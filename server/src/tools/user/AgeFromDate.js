const isEmpty = require('../empty/isEmpty')

const ageFromDate = (birthday) => {
    if(isEmpty(birthday)) return null
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        age--;
    return age;
}

module.exports = ageFromDate
