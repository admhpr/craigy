var Nightmare = require('nightmare'),
nightmare = Nightmare();

var log = require('../utils/logger');

module.exports =
    function (dto) {
        // var {city} = dto;
        city = "jkdsjdskj"
        var url = `https://${city}.craigslist.org`
        console.log('post', url)
        //TODO:
        try{
            nightmare.goto(url)
            .wait(2000)
            .click('#postlks #post')
            .click('input[value=fso]')
        }catch(e){
            log.error(e.message)
        }
    }