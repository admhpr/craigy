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
        nightmare.goto(`https://accounts.craigslist.org/login`)
            .wait(1000)
            .title()
            .end()
            .then(function (result) {
                loggedIn = (result === 'craigslist account')
            })
        return loggedIn
    }