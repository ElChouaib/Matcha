const isEmpty = require("./empty/isEmpty")
const isCorrupt = require("./empty/isCorrupt")
const isDigit = require("./string/isDigit")
const isLowercase = require("./string/isLowercase")
const isUppercase = require("./string/isUppercase")
const isSpecial = require("./string/isSpecial")
const isAlpha = require("./string/isAlpha")
const isAlphaNumeric =  require("./string/isAlphaNumeric")
const isNumeric = require("./string/isNumeric")
const isFloat = require("./string/isFloat")

const isUsername = require("./user/isUsername")
const isEmail = require("./user/isEmail")
const isBirthday = require("./user/isBirthday")
const age = require("./user/AgeFromDate")
const isFirstname = require("./user/isFirstname")
const isLastname = require("./user/isLastname")
const isPassword = require("./user/isPassword")
const isProfileComplete = require("./user/isProfileComplete")
const isGender = require("./user/isGender")
const isOrient = require("./user/isOrient")
const isBio = require("./user/isBio")
const isInterest = require("./user/isInterest")
const isLatitude = require("./user/isLatitude")
const isLongitude = require("./user/isLongitude")
const generate = require("./user/PasswordGenerator")
const download = require("./image/downloadImage")

module.exports = {
    isEmpty, isDigit, isLowercase, isUppercase, isSpecial,
    isAlpha, isAlphaNumeric, isNumeric, isFloat, isUsername,
    isEmail, isBirthday, isFirstname, isLastname, isPassword,
    isProfileComplete, isGender, isOrient, isBio, isInterest,
     isLatitude, isLongitude, age,isCorrupt,generate, download
};
