var Nightmare = require('nightmare'),
nightmare = Nightmare();
module.exports =
    function (dto) {
        var {city} = dto;
        var url = `https://${city}.craigslist.org`
        console.log('post', url)
        //TODO:
        nightmare.goto(url)
        .wait(2000)
        .click('#postlks #post')
        .click('input[value=fso]')
    }