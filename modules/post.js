require('dotenv').config();
const { USER_ZIP, USER_STREET, USER_CITY, USER_TEL, USER_EMAIL} = process.env;
var log = require('../utils/logger');

module.exports = async function (dto) {
        var Nightmare = require('nightmare');
        require('nightmare-upload')(Nightmare);
        var nightmare = Nightmare({show: true});
        
        var {city, title, price, body, image} = dto;
        console.log(image)
        var url = `https://${city}.craigslist.org`
        log.notify('Starting post creation')
        try{
            await nightmare.goto(url)
            .wait(2000)
            // create post
            .click('#postlks #post')
            .click('input[value=fso]')
            .click('.pickbutton')
            .wait(2000)
            // post type
            // general for sale
            .click('#new-edit > div > label > label:nth-child(28) > input')
            .click('.pickbutton')
            .wait(1200)
            // post values
            .insert('#PostingTitle', title)
            .insert('.price > .json-form-input', price)
            .insert('#GeographicArea', USER_CITY)
            .insert('#postal_code', USER_ZIP)
            .insert('#PostingBody', `${title} for sale
            ${body}`)
            .click('.see_my_other')
            .click('.contact_text_ok')
            .insert('label.json-form-item.text.contact_phone.variant-tel > label > input', USER_TEL)
            .insert('.xstreet0 > .json-form-input', USER_STREET)
            .insert('.city > .json-form-input', USER_CITY)
            .insert('.email-form-text-input > label > label > input', USER_EMAIL)
            .wait(500)
            .click('.submit-buttons > div > button')
            .wait(1000)
            // map
            .click('#leafletForm > button')
            .wait(2000)
            // upload image
            .upload('.moxie-shim > input:nth-child(1)', image)
            .wait(3000)
            // cotinue
            .click('body > article > section > form > button')
            // publish
            .wait(2000)
            .click('form#publish_top > button.button')
            log.out('New post has been created')
            await nightmare.end()
        }catch(e){
            log.error(e.message)
        }
    }