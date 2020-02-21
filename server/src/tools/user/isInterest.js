const user = require('../../models/user');

const isInterest =  (inter) => {
    if(!Array.isArray(inter) || !inter.length)
        return false
    if(inter.includes("", inter))
        return false
    return true
}

module.exports = isInterest