const user = require('../../models/user');

logout = async (req, res) => {
const id = req.body.id;
    user.update('UpdateOffline',[id])
    .then((response) => {
          res.send(response);
    }).catch((error) => {
          console.log(error);
      });
  
};
module.exports = logout;
