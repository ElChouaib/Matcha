const user = require('../../models/user');


availableUsername = async (req, res) => {
    const {username} = req.body;
     user.getUser('GetUserByUsername',username)
    .then((response) => {
        if(response)
            res.send(false);
        else
        res.send(true);
    }).catch((error) => {
        console.log(error);
    });

};

module.exports = availableUsername;