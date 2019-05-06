require('dotenv').config();

const {
    USER_EMAIL,
    USER_PASSWORD,
    SHOW_BROWSER
} = process.env


module.exports = async function () {
        var Nightmare = require('nightmare'),
        nightmare = Nightmare({show: SHOW_BROWSER});
        
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