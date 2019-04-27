const {
    USER_EMAIL,
    USER_PASSWORD,
    SHOW_BROWSER,
} = process.env
var Nightmare = require('nightmare'),
    nightmare = Nightmare({
        show: SHOW_BROWSER
    });

module.exports =
    async function () {
        var loggedIn;
        console.log(`Attemping login...`)
        nightmare.goto(`https://accounts.craigslist.org/login`)
            .wait(1000)
            .insert('#inputEmailHandle', USER_EMAIL)
            .insert('#inputPassword', USER_PASSWORD)
            .click('.login-box .accountform-btn')
            .wait(1000)
            .title()
            .end()
        loggedIn = await nightmare.then(function (result) {
            return result === 'craigslist account'
        })
        return loggedIn
    }