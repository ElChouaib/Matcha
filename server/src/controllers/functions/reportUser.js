const user = require('../../models/user');

reportUser = async (req, res) => {
    const data = req.body;
    user.insert('reportUser',[data.id,data.reported_user_id])
    .then((response) => {
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = reportUser;