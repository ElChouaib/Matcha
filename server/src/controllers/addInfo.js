const tools = require('../tools');
const user = require('../models/user');

addInfo = async (req, res) => {
    const info = req.body;
    let v = false;
    if(info.interests.length){
        const result = await user.checkInterests(info.interests)
        if(result[0].n !== info.interests.length)
            v = false;
        else
            v = true;
    }
    if(info.interests.length > 5){
        v = false;
        res.send({ added:false, error: 'You can not add more than 5 interests !' });
        return ;
    }
    if(tools.isBirthday(info.birthday) && tools.isGender(info.gender) && tools.isOrient(info.sexOrient) && tools.isBio(info.bio) && tools.isInterest(info.interests) && v)
    {
        user.deleteUserInter(info.id);
        user.updateInfo(info.gender, info.sexOrient, info.birthday, tools.age(info.birthday), info.bio, info.id);
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
        user.update('UpdateStep', [1, info.id]);
        const uu = await user.getUser('GetUserById',info.id);
        if(uu) delete uu.password;
        res.send({ added: true , uu});
    }
    else
        res.send({ added:false });
};

module.exports = addInfo;