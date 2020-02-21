const user = require('../../models/user');

loadMessages = async (req, res) => {
    const {user_id, conv_id} = req.body;
    const messages = await user.select('getMessages', [user_id, user_id, conv_id, conv_id]);
    messages.forEach(element => {
        if(element.sender == user_id)
            element.isMyMessage = true;
        else
            element.isMyMessage = false;
        delete element.sender;
    });
    res.send(messages);
};
module.exports = loadMessages;