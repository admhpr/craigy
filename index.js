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
run().catch(console.error)

async function run() {
    var args = processArgs()
    var loggedIn = await checkLogin();
    switch (loggedIn) {
        case true:
            log.out(`Login successful`)
            await nightmare.end()
            main(args)
            break;
        default:
            log.notify(`Not logged in, initiating login procedure`);
            loggedIn = await login();
            await nightmare.end();
            nightmare = null;
            loggedIn ? main(args) : log.error(`Unable to login please check credientials in .env file`)
    }
}

async function main({
    city,
    price,
    imageFolder = false
}) {
    log.out(`Login successful, Running main function..`)
    var postValues = JSON.parse(fs.readFileSync('./config/post.json'));
    var files = await imageList(imageFolder)
    for (let fileList of files()) {
        fileList.forEach(async function (fileInfo) {
            await post({
                ...fileInfo,
                ...{
                    city,
                    price
                },
                ...postValues
            })
        })
    }
}