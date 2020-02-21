const user = require('../../models/user');

getOptions = async (req, res) => {
     user.getOptions()
    .then((response) => {
        let options = [];
        Object.keys(response).forEach(function() {
            for (var i = 0; i < response.length; i++) {
                options[i] = {
                  value: response[i].interest,
                  label: response[i].interest,
                };
            }
        });
        res.send(options);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = getOptions;