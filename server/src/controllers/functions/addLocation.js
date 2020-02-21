const user = require('../../models/user');
const tools = require('../../tools');

addLocation = async (req, res) => {
    const info = req.body;
    if(tools.isLatitude(parseFloat(info.loc.lat)) && tools.isLongitude(parseFloat(info.loc.lng))){
        user.update('UpdateLocation', [info.loc.lat, info.loc.lng, info.id])
        .then(resp => {
            if(resp)
                res.send('updated');
        })
        .catch(err => console.log(err));
    }
    else
        res.send(false)
};

module.exports = addLocation;