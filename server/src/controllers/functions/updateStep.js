const user = require('../../models/user');

updateStep = async (req, res) => {
    const data = req.body;
    if(data.step <= 3){
        user.update('UpdateStep',[data.step, data.id])
        .then((response) => {
            if(response.affectedRows === 1)
                res.send(true);
        }).catch((error) => {
            console.log(error);
        });
    }
    else
        res.send(false)
};
module.exports = updateStep;