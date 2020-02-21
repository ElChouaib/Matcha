var jwt =  require('jsonwebtoken');
const user = require('../../models/user');
const checkToken = async (token) =>{
    try{
        if(token)
        {
            const us = await jwt.verify(token, 'fuckingSecretKey');
            const response = await user.select('GetUserById',us.id);
            if(response)
                return true;
            else
                return false
        }else 
        return 0;
    }
    catch (err) {
        return false;
    }
    
    
}   
module.exports  = checkToken;