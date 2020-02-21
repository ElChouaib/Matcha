const jwt = require('jsonwebtoken');

decodeToken = async (req, res) => {
    const token = req.body.token;
    try {
        let decoded =  await jwt.verify(token, 'fuckingSecretKey');
        if(decoded)
            res.send(decoded.data);
        else
            res.send('false')
    }catch (err){
        res.send('Invalid signature')
    }
};

module.exports = decodeToken;