require('dotenv').config();

const {
    USER_EMAIL,
    USER_PASSWORD,
    SHOW_BROWSER
} = process.env;

var format = require('../utils/format');
var log = require('../utils/logger');


module.exports = async function () {
    var Nightmare = require('nightmare');
    var nightmare = format.stringToBoolean(SHOW_BROWSER) ? Nightmare({
        show: true
    }) : Nightmare();

    var loggedIn;

    console.log(`Attempting login...`)
    log.spinner
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
    log.stopSpinner(log.spinner)
    return loggedIn
}