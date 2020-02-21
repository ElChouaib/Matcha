const user = require('../../models/user');
const img = require('../../models/images');
const checkLikes= require('./checkLikes');
getViewProfileList = async (req, res) => {
    const user_id = req.body.id;
    const users = await user.select('getViewProfileList',[user_id, user_id, user_id]);
    for (var i = 0; i < users.length; i++) {
        const images = await img.getProfilPic(users[i].id);
        users[i].profilePic = images[0].path;
        users[i].like = await  checkLikes(user_id,users[i].id);
    }
    res.send(users);
};
module.exports = getViewProfileList;