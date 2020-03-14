const user = require('../../models/user');
const img = require('../../models/images');
const filtreUsers = require('./filtre');
const checkLikes= require('./checkLikes')
const calculateDistance = require('./calculateDistance')
getUsers = async (req, res) => {
    const Da = [];
    const user_id = req.body.id;
    const indice = req.body.indice;
    const filtre = req.body.filtre;
    const users = await filtreUsers(user_id,filtre,indice);
    for (var i = 0; i < users.length; i++) {
        users[i].like = await  checkLikes(user_id,users[i].id);
        const images = await img.getImages(users[i].id);
        const interests  = await user.getUserInterests(users[i].id); 
        Da[i]= {
            user :  users[i],
            images : images,
            interests: interests,
        }
    }
   res.send(Da);
    
};

module.exports = getUsers;