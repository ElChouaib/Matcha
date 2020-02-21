const user = require('../../models/user');
const crypto = require('crypto');

checkConfirmToken = async (req, res) => {
    
    const token = req.body.token;
     user.getUser('GetUserByToken',token)
    .then((response) => {
        if(response){
            const verifToken = crypto.randomBytes(64).toString('hex');
            user.UpdateVerifToken(response.email, verifToken);
            user.Confirmed(response.email);
            if(response.rating === 0)
                user.update('updateRating',[2,response.id]);
            res.send('success');
        }
        else
            res.send('error');
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = checkConfirmToken;