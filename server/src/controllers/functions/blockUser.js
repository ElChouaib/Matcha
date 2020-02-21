const user = require('../../models/user');

blockUser = async (req, res) => {
    const data = req.body;
    user.insert('blockUser',[data.id,data.blocked_user_id]);
    user.delete('dislikeUser',[data.id,data.blocked_user_id]);
    user.delete('dislikeUser',[data.blocked_user_id,data.id])
    .then((response) => {
        res.send(true);
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = blockUser;