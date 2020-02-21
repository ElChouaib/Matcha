const user = require('../../models/user');

openNotif = async (req, res) => {
    user.update('openNotif')
    .then(resp => {
        if(resp)
            res.send(true);
    })
};
module.exports = openNotif;