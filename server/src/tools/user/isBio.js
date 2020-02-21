const isEmpty = require('../empty/isEmpty')

const isBio = (bio) => {
    if(isEmpty(bio))
        return false
    if(bio && !/^.{1,200}$/.test(bio))
        return false
    return true
}

module.exports = isBio