var chalk = require('chalk');

const log = {
    out: wrap(chalk.green),
    error: wrap(chalk.red),
    notify: wrap(chalk.blue)
}

function logIt (input) {
    console.log(input)
}
function wrap(fn){
    return function(str){
        logIt(fn(str))
    }
}

module.exports = log