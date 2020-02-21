const user = require('../../models/user');

matched = async (user_id) => {
    const users = await user.select('getUserLikes', [user_id, user_id]);
    let matchs = [], liked = [], likedBy = [];
    for(var i = 0; i < users.length; i++){
        if(users[i].liker_id === user_id)
            liked.push(users[i].liked_id);
        else if(users[i].liked_id === user_id)
            likedBy.push(users[i].liker_id);
    }
    for(var i = 0; i < liked.length; i++){
        if(likedBy.includes(liked[i]))
            matchs.push(liked[i]);
    }
    return matchs;
}
module.exports = matched;