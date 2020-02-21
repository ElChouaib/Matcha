const user = require('../../models/user');

getNotif = async (req, res) => {
    const user_id = req.body.user_id;
    user.select('getNotif', user_id)
    .then( async (resp) => {
        let arr = [];
        if(resp){
            for (var i = 0; i < resp.length; i++) {
                const profilePic = await user.select('GetProfilePic', resp[i].id);
                arr.push({
                    by:{
                        username: resp[i].username,
                        profilePic: profilePic[0].path,
                    },
                    content:  resp[i].content,
                    seen: resp[i].seen
                });
            }
            res.send(arr);
        }
    })
};
module.exports = getNotif;