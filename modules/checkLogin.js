

module.exports = async function () {
    var Nightmare = require('nightmare'),
    nightmare = Nightmare();
    var loggedIn = await nightmare.goto(`https://accounts.craigslist.org/login`)
        .wait(1000)
        .title()
        .end()
        .then(function (result) {
            loggedIn = (result === 'craigslist account')
            return loggedIn
        })
    return loggedIn
}