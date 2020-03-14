const user = require('../../models/user');

const rating = async (id,type) =>{
    let coefficient = 0;
    const us = await user.select('GetUserById',id);
    const user_rating = us[0].rating;
    if (type=='view'){
        if(user_rating < 3)
            coefficient = 0.2;
        else if(user_rating < 4 && user_rating >= 3)
            coefficient = 0.1;
        else if(user_rating < 5 && user_rating >= 4)
            coefficient = 0.05;
    }
    else if (type== 'like')
    {
        if(user_rating < 3)
            coefficient = 0.5;
        else if(user_rating < 4 && user_rating >= 3)
            coefficient = 0.3;
        else if(user_rating < 5 && user_rating >= 4)
            coefficient = 0.15;
    }
    else if (type== 'unlike')
    {
        if(user_rating < 3)
            coefficient = -0.25;
        else if(user_rating < 4 && user_rating >= 3)
            coefficient = -0.2;
        else if(user_rating < 5 && user_rating >= 4)
            coefficient = -0.15;
    }
    else if (type == 'report')
    {
        coefficient = -1;
    }
    return coefficient;
}

module.exports = rating