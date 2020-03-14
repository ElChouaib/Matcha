const user = require('../../models/user');
const img = require('../../models/images');
const T = require('./calculateNbrTagsCommun');
const calculateDistance = require('./calculateDistance');
const checkLikes= require('./checkLikes')
const so = require('./sort');
sortUsers = async (req, res) => {
    const Da = [];
    const user_id = req.body.id;
    const methode = req.body.methode;
    const indice = req.body.indice;
    const filtre = findFilter(req.body.filtre);
    console.log(filtre);
    const users = await user.getUsers(user_id);
    const user1 = await user.select('GetUserById',user_id);
        for (var i = 0; i < users.length; i++) {
            if(user1[0].sexOrient === 'men')
            {
                if(users[i].gender === 'female')
                {
                    users.splice(i, 1);
                    i--;
                }
            }
            else if(user1[0].sexOrient === 'women')
            {
                if(users[i].gender === 'male')
                {
                    users.splice(i, 1);
                    i--;
                }
            }
        }

        if(filtre!== null && filtre.tags !== null)
        {
        for (var i = 0; i < users.length; i++){
           const tagsU2 = await T.getTags(users[i].id)
            if(tagsU2)
            {
                let checker = (arr, target) => target.every(v => arr.includes(v));
                let isExit = checker(tagsU2, filtre.tags);
                if(isExit === false)
                {
                    users.splice(i, 1);
                    i--;
                }
            }
            
        }
        } 

       if(filtre!== null && filtre.nbrTags !== null)
       {
        for (var i = 0; i < users.length; i++){
            users[i].nbrTagsCom = await T.calculateNbrTagsCommun(user1[0],users[i]);

            if( users[i].nbrTagsCom < filtre.nbrTags.min || users[i].nbrTagsCom > filtre.nbrTags.max)
            {
                    users.splice(i, 1);
                    i--;
            }
        }
       } 
       if(filtre!== null && filtre.rating !== null)
       {
           for (var i = 0; i < users.length; i++){
                if(users[i].rating < filtre.rating.min || users[i].rating > filtre.rating.max)
                {
                        users.splice(i, 1);
                        i--;
                }
            }
       } 
       if(filtre!== null && filtre.age !== null)
       {
        for (var i = 0; i < users.length; i++){
            if(users[i].age < filtre.age.min || users[i].age > filtre.age.max)
            {
                    users.splice(i, 1);
                    i--;
            }
        }
       } 
       if(filtre!== null && filtre.loc !== null)
       {
        for (var i = 0; i < users.length; i++){
            users[i].distance = calculateDistance(user1[0],users[i]);     
            if(users[i].distance > filtre.loc.max ) 
            {
                    users.splice(i, 1);
                    i--;
            }
        }
       }
    const cmp = indice * 20;
    for (var i = 0; i < users.length; i++) {
        users[i].distance =  calculateDistance(user1[0],users[i]);
        users[i].nbrTags = await T.calculateNbrTagsCommun(user1[0],users[i]);
    }
    SorteTabe = users.sort(so(methode));
    const Data = SorteTabe.slice(cmp,cmp+20);
    for (var j = 0; j < Data.length; j++) {
        const images = await img.getImages(Data[j].id);
        const interests  = await user.getUserInterests(Data[j].id);
        Data[j].like = await  checkLikes(user_id,Data[j].id);
        Da[j]= {
         user :  Data[j],
         images : images,
         interests: interests
        }
    }
   res.send(Da);
};

const findFilter = (filtre) =>{
    if(filtre === null)
        return null;
    let data = {
        nbrTags : null,
        tags : null,
        rating : null,
        age : null,
        loc : null
    }
    if(filtre.tags.length !== 0)
        data.tags = filtre.tags
    if(filtre.nbrTags[0] !== 0 || filtre.nbrTags[1] !== 0)
        data.nbrTags = {min : filtre.nbrTags[0],max : filtre.nbrTags[1]}
    if(filtre.rating[0] !== 0 || filtre.rating[1] !== 0)
        data.rating = {min : filtre.rating[0],max : filtre.rating[1]}
    if(filtre.age[0] !== 18 || filtre.age[1] !== 18)
        data.age = {min : filtre.age[0],max : filtre.age[1]}
    if(filtre.loc[0] !== 0)
        data.loc = {max : filtre.loc[0]}
    return data;  
}

module.exports = sortUsers;