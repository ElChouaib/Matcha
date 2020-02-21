const user = require('../../models/user');
const rating = require('../functions/rating');
const checkLikes = require('./checkLikes');

likeUser = async (req, res) => {
    const data = req.body;
    const checkLike = await user.select('checkLike',[data.id,data.liked_user_id]);
    const relation = await checkLikes(data.id, data.liked_user_id);
    if(checkLike.length === 0)
    {
        const blocked = await user.select('checkBlock', [data.id,data.id,data.liked_user_id,data.liked_user_id]);
        if(blocked.length){
            console.log('you can not like');
            return ;
        }
        user.insert('likeUser',[data.id, data.liked_user_id])
            .then(async (response) => {
                const ra = await rating(data.liked_user_id);
                await user.update('updateRating',[ra, data.liked_user_id]);
                if(relation === 'heLiked')
                    await user.insert('insertNotif', [data.id, data.liked_user_id, `You are matched with ${data.username}`, 0]);
                else
                    await user.insert('insertNotif', [data.id, data.liked_user_id, `${data.username} liked you`, 0]);
                res.send(true);
            }).catch((error) => {
                console.log(error);
            });
    }
    else
    {
       console.log('deja liked');
       res.send(false);
    }
        
    
};
module.exports = likeUser;