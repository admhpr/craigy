var log = require('../utils/logger');
var chalk = require('chalk');

function usage(){
            log.out(`
                    (_)            
        ___ _ __ __ _ _  __ _ _   _ 
       / __| '__/ _\` | |/ _\` | | | |
      | (__| | | (_| | | (_| | |_| |
       \___|_|  \__,_|_|\__, |\__, |
                         __/ | __/ |
                        |___/ |___/
        -----------------------------       
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
    if(!process.argv[2]){
        usage()
    }

    process.exit()
}