var chalk = require('chalk');

// interal modules
var log = require('../utils/logger');

function usage(){
            log.out(`
                    (_)            
        ___ _ __ __ _ _  __ _ _   _ 
       / __| '__/ _\` | |/ _\` | | | 
      | (__| | | (_| | | (_| | |_| |
       \___|_|  \__,_|_|\__, |\__, |
                         __/ | __/ |
                        |___/ |___/
    -----------------------------------       
        `)
        console.log(`
Using Craigy couldn't be easier:

Add your credientials to a .env file

${chalk.bgBlack('mv .env-example .env')}
        
replace the values with your own
        
run the script:
        
${chalk.bgBlack('npm run start')} ${chalk.green('city')} ${chalk.yellow('price')} ${chalk.blue('imageFolder')}
        
    `)
}
module.exports = function(){
    if(!process.argv[2] && !process.argv[3]){
        usage()
        process.exit()
    }

    var city = String(process.argv[2]);
    var price = parseFloat(Math.round(process.argv[3] * 100) / 100);
    var imageFolder = typeof process.argv[4] !== "undefiend" ? process.argv[4] : false;
    
    if(city.length && !Number.isNaN(price)){
        return {price, city, imageFolder}
    }

    log.error(`Incorrect argument types provided`)

    setTimeout(function(){
        usage()
        process.exit()
    },1000)

}