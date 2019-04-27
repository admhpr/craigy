var Nightmare = require('nightmare'),
    nightmare = Nightmare();
var ads = require('./config/ads');
var post = require('./modules/post');
var login = require('./modules/login');
var checkLogin = require('./modules/checkLogin');

const url = ""

async function run() {
    var loggedIn = await checkLogin();
    switch (loggedIn) {
        case true:
            console.log('Login successful')
            main(ads)
            break;
        default:
            console.log('Login check failed, attemping login');
            loggedIn = await login()
    }
}


function main() {
    console.log(`Running main function`)
}


run()