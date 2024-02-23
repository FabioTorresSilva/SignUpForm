const { findEmail } = require("../data/signup")


function checkEmailPassword(email, password) {
    const userPassword = findEmail(email).password
    return userPassword === password
}

module.exports = { checkEmailPassword }