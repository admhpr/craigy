


const { USER_ZIP, USER_STREET, USER_CITY, USER_TEL} = process.env;
var log = require('../utils/logger');

module.exports = async function (dto) {
        var Nightmare = require('nightmare'),
        nightmare = Nightmare({show: true});
        require('nightmare-upload')(Nightmare);
        
        var {city, title, price, body, image} = dto;
        var url = `https://${city}.craigslist.org`
        
        try{
            await nightmare.goto(url)
            .wait(5000)
            .click('#postlks #post')
            .click('input[value=fso]')
            .click('.pickbutton')
            .wait(1000)
            //TODO:
            .click('input[value=5]')
            .click('.pickbutton')
            .wait(1000)
            .insert('#PostingTitle', title)
            .insert('.price > .json-form-input', price)
            .insert('#GeographicArea', USER_CITY)
            .insert('#postal_code', USER_ZIP)
            .insert('#PostingBody', body)
            .click('.see_my_other')
            .click('.contact_text_ok')
            .insert('contact_phone > .json-input-form', USER_TEL)
            .insert('.xstreet0 > .json-form-input', USER_STREET)
            .insert('.city > .json-form-input', USER_CITY)
            .click('input[value=continue]')
            .wait(1000)
            .click('.continue .bigbutton')
            .wait(1000)
            .upload('#plupload', image)
            .wait(1000)
            .click('.done .bigbutton')
            .click('input[value=Continue]')
        
            await nightmare.end()
        }catch(e){
            log.error(e.message)
        }
    }