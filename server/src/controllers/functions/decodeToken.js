const jwt = require('jsonwebtoken');

decodeToken = async (req, res) => {
    const token = req.body.token;
    try {
        let decoded =  await jwt.verify(token, 'MyChouaibKEY');
        if(decoded)
            res.send(decoded.data);
        else
            res.send('false')
    }catch (err){
        res.send('Invalid signature')
    }
};

module.exports = decodeToken;