const isEmpty = require('../empty/isEmpty')

const isOrient = (sexOrient) => {

    if(isEmpty(sexOrient))
        return false
    if(sexOrient !== 'men' && sexOrient !== 'women' && sexOrient !== 'both')
        return false
    return true
}

module.exports = isOrient