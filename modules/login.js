var Nightmare = require('nightmare'),
    nightmare = Nightmare({
        show: true
    });

const {
    USER_EMAIL,
    USER_PASSWORD
} = process.env

module.exports =
    async function () {
        var loggedIn;
        console.log(`Attemping login...`)
        nightmare.goto(`https://accounts.craigslist.org/login`)
            .wait(2000)
            .insert('#inputEmailHandle', USER_EMAIL)
            .insert('#inputPassword', USER_PASSWORD)
            .click('.login-box .accountform-btn')
            .wait(200)
            .title()
            .end()
        nightmare.then(function (result) {
            console.log(result)
        })
    }