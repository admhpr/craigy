"use strict";

var Nightmare = require('nightmare'),
    nightmare = Nightmare();

var fs = require('fs');
var path = require('path');
require('dotenv').config()

var post = require('./modules/post');
var login = require('./modules/login');
var checkLogin = require('./modules/checkLogin');
var log = require('./utils/logger');

const url = ""

async function run() {
    var loggedIn = await checkLogin();
    switch (loggedIn) {
        case true:
            log.out(`Login successful`)
            nightmare.end()
            main(ads)
            break;
        default:
            log.notify(`Not logged in, initiating login procedure`);
            loggedIn = await login()
            nightmare.end()
            loggedIn ? main() : log.error(`Unable to login please check credientials in .env file`)
    }
}

(function(){
    
}())

function main(ads) {
    log.out(`Login succesful, Running main function..`)
    var ads = JSON.parse(fs.readFileSync('./config/ads.json'));
    for (let ad of ads) {
        console.log(ad)
        post(ad)
        nightmare.end()
    }
}

run()