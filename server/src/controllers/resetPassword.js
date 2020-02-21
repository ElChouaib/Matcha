const user = require('../models/user');
const crypto = require('crypto');
const bcrypt = require ('bcrypt');


resetPassword = async (req, res) => {
    const {token, pass, c_pass} = req.body;
    let hashPassword = await bcrypt.hash(pass, 10);
     user.getUser('GetUserByToken',token)
    .then((response) => {
        if(response){
            if(pass !== c_pass){
                res.send({reset: false, error: 'Passwords does not match !'})
            }
            else
            {
                user.ResetPassword(hashPassword, token);
                const verifToken = crypto.randomBytes(64).toString('hex');
                user.UpdateVerifToken(response.email, verifToken);
                res.send({reset: true});
            }
        }
        else
            res.send({reset: false, error: 'Token may be expired, please retry.'});
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = resetPassword;