const bcrypt = require ('bcrypt');
const user = require('../models/user');

Login =  async (req, res) => {
    const {username, password} = req.body;
    let dataUser = await  user.getUser('GetUserByUsername',username);
    let profilePic = await user.select('GetProfilePic', dataUser.id);
    if(dataUser)
    {
        bcrypt.compare(password, dataUser.password)
        .then((response) => {
            if (response)
            {
                if(dataUser.confirmed === 1)
                {
                    user.update('UpdateOnline',[dataUser.id])
                    dataUser.isOnline = 1;
                    delete dataUser.verif_token;
                    delete dataUser.password;
                    if(profilePic.length > 0)
                        dataUser.profilePic = profilePic[0].path;
                    res.send({isValid : true, user: dataUser});
                }
                else
                    res.send({isValid: false, errorField : 'Please confirm your e-mail'})
            }
            else
            {
                res.send({isValid : false, errorField : 'Password Incorrect'});
            }
        })
        .catch(err => console.log(err))
    }
    else
        res.send({isValid: false, errorField : 'Username Not Found'});
}

module.exports = Login;