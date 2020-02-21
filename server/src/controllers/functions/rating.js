const user = require('../../models/user');

const rating = async (id) =>{
    let coefficient = 0;
    const users = await user.select('GetAllUsers')
    const us = await user.select('GetUserById',id);
    const myRating = us[0].rating;
        let len = 0;
    if(users)
        len = users.length;
    if(len <= 250)
    {
        if(myRating < 3)
            coefficient = 0.2;
        else if(myRating < 4 && myRating >= 3)
            coefficient = 0.1;
        else if(myRating < 5 && myRating >= 4)
            coefficient = 0.05;
    }
    else if(len > 250 && len <= 750)
    {
        if(myRating < 3)
            coefficient = 0.1;
        else if(myRating < 4 && myRating >= 3)
            coefficient = 0.05;
        else if(myRating < 5 && myRating >= 4)
            coefficient = 0.025;
    }
    else
    {
        if(myRating < 3)
            coefficient = 0.05;
        else if(myRating < 4 && myRating >= 3)
            coefficient = 0.025;
        else if(myRating < 5 && myRating >= 4)
            coefficient = 0.0125;
    } 
        return coefficient;
}

module.exports = rating