const isEmpty = require('../empty/isEmpty')

const isBirthday = (date) => {

    if(isEmpty(date)) return false
    if(date.length !== 'YYYY-MM-DD'.length || date.split('-').length !== 3) return false
    if(date && !/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(date))
        return false
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age < 18)
        return false
    if(age > 120)
        return false

    return true
}

module.exports = isBirthday
