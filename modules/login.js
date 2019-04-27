var Nightmare = require('nightmare'),
    nightmare = Nightmare({
        show: true
    });

module.exports =
    async function () {
        var loggedIn;
        console.log(`Attemping login...`)
        nightmare.goto(`https://accounts.craigslist.org/login`)
            .wait(2000)
            .insert('#inputEmailHandle', 'email@email.com')
            .insert('#inputPassword', 'password')
            .click('.login-box .accountform-btn')
            .wait(200)
            .title()
            .end()
        nightmare.then(function (result) {
            console.log(result)
        })
    }