const user = require('../../models/user');
const EM = require('./email');
sendResetEmail = async (req, res) => {
    const {email} = req.body;
     user.getUser('GetUserByEmail', email)
    .then((response) => {
        if(response){
            EM.sendResetEmail(email, response.verif_token);
            res.send({sent: true, error: null});
        }
        else
            res.send({sent: false, error: 'Email not found'});
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = sendResetEmail;