var log = require('../utils/logger');
var chalk = require('chalk');

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

    var city = String(process.argv[2])
    var price = parseFloat(Math.round(process.argv[3] * 100) / 100)

    if(city.length && !Number.isNaN(price)){
        return {price, city}
    }

    log.error(`Incorrect argument types provided`)

    setTimeout(function(){
        usage()
        process.exit()
    },1000)

}