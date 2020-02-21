const IMAGES = require('../../models/images');

getImages = async (req, res) => {
    const user_id = req.body.user_id;
     IMAGES.getImages(user_id)
    .then((response) => {
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = getImages;