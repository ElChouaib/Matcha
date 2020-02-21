const user = require('../../models/user');

getActiveStep = async (req, res) => {
    const id = req.body.id;
     user.getStep(id)
    .then((response) => {
        res.send({step: response[0].complete});
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = getActiveStep;