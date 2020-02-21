const user = require('../../models/user');


availableEmail = async (req, res) => {

    const {email} = req.body;
   user.getUser('GetUserByEmail',email)
  .then((response) => {
   if(response)
        res.send(false);
    else
       res.send(true);
  }).catch((error) => {
        console.log(error);
    });

};

module.exports = availableEmail;