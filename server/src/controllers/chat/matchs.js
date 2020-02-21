const user = require('../../models/user');
const matched = require('./matched');

getMatchedUsers = async (req, res) => {
    const user_id = req.body.user_id;
    let matchs = await matched(user_id);
    let matchedUsers = [];
    if(matchs.length > 0)
        matchedUsers = await user.select('getMatchs', [matchs]);
    res.send(matchedUsers);
};
module.exports = getMatchedUsers;