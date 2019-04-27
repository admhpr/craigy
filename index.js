"use strict";

// libs
var fs = require('fs');
var Nightmare = require('nightmare'),
    nightmare = Nightmare();

// setup
require('dotenv').config();

// internal modules
var checkLogin = require('./modules/checkLogin');
var imageList = require('./modules/imageList');
var log = require('./utils/logger');
var login = require('./modules/login');
var post = require('./modules/post');
var processArgs = require('./modules/processArgs');

// init
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

async function main({city, price, imageFolder = false}) {
    console.log(city, price, imageFolder)
    log.out(`Login successful, Running main function..`)
    var postValues = JSON.parse(fs.readFileSync('./config/post.json'));
    var files = await imageList(imageFolder)
    for (let fileList of files()) {
        console.log("FILELIST", fileList)
        // post({...postValues, image: file})
    }
}

run()