const matched = require('./matched');
const user = require('../../models/user');

sendMessage = async (req, res) => {
    const {sender, receiver, message} = req.body;
    const matchs = await matched(sender);
    const blocked = await user.select('checkBlock', [sender,sender,receiver,receiver]);
    const u1 = await  user.getUser('GetUserById',sender);
    const u2 = await  user.getUser('GetUserById',receiver);
    const p1 = await user.select('GetProfilePic', sender);
    if(u1 && u2)
    {
        if(message.length > 255){
            res.send({sent: false, err:'Message is too long'});
            return ;
        }
        if(!matchs.includes(receiver)){
            res.send({sent: false, err:'Not matched'});
            return ;
        }
        if(blocked.length){
            if(blocked[0].blocker_id === sender)
                res.send({sent: false, err:'You blocked this user'});
            else if(blocked[0].blocked_id === sender)
                res.send({sent: false, err:'This user blocked you'});
            return ;
        }
        user.insert('insertMessage', [sender, receiver, message])
        .then(async resp => {
            if(resp){
                await user.insert('insertNotif', [sender, receiver, `${u1.username} sent you a message`, 0]);
                res.send({sent:true, sender: sender, receiver: receiver, profilePic: p1[0].path, message: message});
            }
        }).catch(err => console.log(err));
    }
    else
        res.send({sent: false, err:'user does not exist'});
};
module.exports = sendMessage;