const user = require('../../models/user');

createOption = async (req, res) => {
    const {option, id} = req.body;
    user.InterCreatedNbr(id)
    .then(r => {
        if(r[0].n > 10){
            res.send({ created: false, error: 'You can not create more than 10 interests !' });
        }
        else{
            if(option.length < 20)
            {
                user.createOption(option, id);
                res.send({ created: true, option: {value: option, label: option} })
            }
            else
                res.send({ created: false, error: 'maximum is 20 characters !' })
        }
    }).catch(err => console.log(err));
};

module.exports = createOption;