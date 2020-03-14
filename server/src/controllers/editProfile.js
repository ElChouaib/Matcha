const tools = require('../tools');
const user = require('../models/user');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const EM = require('./functions/email');

editProfile = async (req, res) => {
    const info = req.body;
    let v = false;
    let result = {
        valid: false,
    };
    let CheckUsername = await  user.getUser('CheckEditUsername', [info.username, info.id]);
    let CheckEmail = await  user.getUser('CheckEditEmail', [info.email, info.id]);

    if(CheckUsername)
    {
        result.username = 'Username already exists';
    }
    if(CheckEmail)
    {
        result.email = 'Email already exists';
    }

    if(info.interests.length){
        const result = await user.checkInterests(info.interests)
        if(result[0].n !== info.interests.length){
            v = false;
            result.interests = 'Invalid selection !';
        }
        else
            v = true;
    }
    if(info.interests.length > 5){
        v = false;
        result.interests = 'You can not add more than 5 interests !';
    }
    const p = info.hasOwnProperty('password'); const confP = info.hasOwnProperty('confirmPassword');
    if( p || confP)
    {
        if((p && confP) && tools.isPassword(info.password, info.confirmPassword))
        {
            let hashPassword = await bcrypt.hash(info.password, 10);
            user.update('UpdatePassword', [hashPassword, info.id]);
            v = true;
        }
        else
        {
            result.password = 'Password error';
            v = false;
        }
    }

    if(tools.isLastname(info.lastname) && tools.isFirstname(info.firstname) && tools.isUsername(info.username) && tools.isEmail(info.email) && tools.isBirthday(info.birthday) && tools.isGender(info.gender) && tools.isOrient(info.sexOrient) && tools.isBio(info.bio) && tools.isInterest(info.interests) && !CheckUsername && !CheckEmail && v)
    {
        const check = await user.getUser('GetUserById',info.id);
        if(check && info.email !== check.email)
        {
            user.notConfirmed(check.email);
            const verifToken = crypto.randomBytes(64).toString('hex');
            user.UpdateVerifToken(check.email, verifToken);
            EM.sendEmail(info.email, verifToken);
            result.confirmed = false;
        }
        user.deleteUserInter(info.id);
        user.update('UpdateProfile',[info.firstname, info.lastname, info.username, info.email, info.gender,info.birthday, tools.age(info.birthday),  info.sexOrient, info.bio, info.id]);
        info.interests.forEach( element => {
            user.getInterId(element)
            .then(re => {
                if(re){
                    user.insertUserInter(info.id, re[0].interest_id);
                }
            })
            .catch(err => {
                console.log(err);
            })
        });
        const uu = await user.getUser('GetUserById',info.id);
        if(uu){
            let profilePic = await user.select('GetProfilePic', info.id);
            uu.profilePic = profilePic[0].path;
            delete uu.verif_token;
            delete uu.password;
        }
        result.valid = true;
        res.send({result, uu});
    }
    else{
        result.valid = false;
        let err = [];
        for(let key in result){
            if(key !== 'valid')
                err.push(result[key]);
        }
        res.send({result, err});
    }
};

module.exports = editProfile;