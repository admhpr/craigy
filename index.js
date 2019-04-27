"use strict";

var Nightmare = require('nightmare'),
    nightmare = Nightmare();

const fs = require('fs');
require('dotenv').config()

var ads = require('./config/ads');
var post = require('./modules/post');
var login = require('./modules/login');
var checkLogin = require('./modules/checkLogin');

const url = ""

async function run() {
    var loggedIn = await checkLogin();
    switch (loggedIn) {
        case true:
            console.log(`Login successful`)
            nightmare.end()
            main(ads)
            break;
        default:
            console.log(`Not logged in, initiate login procedure`);
            loggedIn = await login()
            nightmare.end()
            loggedIn ? main(ads) : console.error(`Unable to login please check credientials in .env file`)
    }
}

function main(ads) {
    console.log(`Running main function..`)
    var ads = JSON.parse(fs.readFileSync('./config/ads.json'));
    for (let ad of ads) {
        console.log(ad)
        post(ad)
        nightmare.end()
    }
}

run()