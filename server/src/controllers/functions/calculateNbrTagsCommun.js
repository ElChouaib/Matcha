const user = require('../../models/user');
module.exports = {
    getTags : async function (id) {
        let data = [];
        const tags = await user.getUserInterests(id);
        if(tags)
        {
            for (var j = 0; j < tags.length; j++) {
                data[j] = tags[j].value;
            }
        }
        return data;
    },
    calculateNbrTagsCommun : async function (user1,user2) {
        const interestsU1  = await user.getUserInterests(user1.id);
        const interestsU2  = await user.getUserInterests(user2.id);
        let nbrTagsComm = 0;
        if(interestsU1 === null || interestsU2 === null)
            return 0;
        for (var i = 0; i < interestsU1.length; i++) {
            for (var j = 0; j < interestsU2.length; j++) {
                if(interestsU1[i].value === interestsU2[j].value)
                    nbrTagsComm++;
            }
        }
        return nbrTagsComm;
    }
}