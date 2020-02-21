const user = require('../../models/user');
const checkLikes = require('./checkLikes');

dislikeUser = async (req, res) => {
    const data = req.body;
    const relation = await checkLikes(data.id, data.dislike_user_id);
    user.delete('dislikeUser',[data.id,data.dislike_user_id])
    .then(async (response) => {
        if(relation === 'match')
            await user.insert('insertNotif', [data.id, data.dislike_user_id, `${data.username} unliked you`, 0]);
        res.send(true);
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = dislikeUser;