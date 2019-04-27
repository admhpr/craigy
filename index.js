"use strict";

var Nightmare = require('nightmare'),
    nightmare = Nightmare();

var fs = require('fs');

require('dotenv').config();

var post = require('./modules/post');
var login = require('./modules/login');
var checkLogin = require('./modules/checkLogin');
var log = require('./utils/logger');
var processArgs = require('./modules/processArgs');
var imageList = require('./modules/imageList');

async function run() {
    var args = processArgs()
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
            loggedIn ? main(args) : log.error(`Unable to login please check credientials in .env file`)
    }
}

// (async function(){
//     var files = await imageList(20)
//     console.log("HERE:", files)
// }())

function main({city, price, imageFolder = false}) {
    log.out(`Login succesful, Running main function..`)
    var ads = JSON.parse(fs.readFileSync('./config/post.json'));
    for (let ad of ads) {
        console.log(ad)
        post(ad)
        nightmare.end()
    }
}

run()