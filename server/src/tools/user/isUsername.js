const isEmpty = require('../empty/isEmpty')
const isAlphaNumeric = require('../string/isAlphaNumeric')

const  isUsername = (username) => {
    if(isEmpty(username) || typeof(username) !== "string") return false
    if(username.length < 2 || username.length > 20) return false
    if(isAlphaNumeric(username)) return false
    return true
}

module.exports = isUsername
