const user = require('../../models/user');
const rating = require('../functions/rating')
reportUser = async (req, res) => {
    const data = req.body;
    const ra = await rating(data.reported_user_id,'report');
    console.log("hbtat b : "+ra);
    user.update('updateRating',[ra, data.reported_user_id]);
    user.insert('reportUser',[data.id,data.reported_user_id])
    .then((response) => {
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = reportUser;