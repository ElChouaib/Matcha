const isEmpty = require('../empty/isEmpty')

const isGender = (gender) => {
    if(isEmpty(gender))
        return false
    if(gender !== 'male' && gender !== 'female')
        return false

    return true
}

module.exports = isGender
