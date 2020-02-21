const user = require('../../models/user');

checkLikes = async (user1_id,user2_id) => {
    const likes = await user.select('getUserLikes', [user1_id, user1_id]);
    let x = false;
    let y = false;
    let relation = null;
    for(var i = 0; i < likes.length; i++){
        if(likes[i].liker_id === user2_id && likes[i].liked_id === user1_id)
            x = true;
        if(likes[i].liker_id === user1_id && likes[i].liked_id === user2_id)
            y = true;
    }
    if(x && y)
        relation = "match";
    else if(x)
        relation = "heLiked";
    else if(y)
        relation = "iLike";
    return relation;
}
module.exports = checkLikes;