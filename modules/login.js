const {
    USER_EMAIL,
    USER_PASSWORD,
} = process.env
var Nightmare = require('nightmare'),
    nightmare = Nightmare();

module.exports =
    async function () {
        var loggedIn;
        console.log(`Attempting login...`)
        nightmare.goto(`https://accounts.craigslist.org/login`)
            .wait(1000)
            .insert('#inputEmailHandle', USER_EMAIL)
            .insert('#inputPassword', USER_PASSWORD)
            .click('.login-box .accountform-btn')
            .wait(4000)
            .title()
            .end()
        loggedIn = await nightmare.then(function (result) {
            return result === 'craigslist account'
        })
        return loggedIn
    }