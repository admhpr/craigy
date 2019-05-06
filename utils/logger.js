var chalk = require('chalk');

function logIt (input) {
    console.log(input)
}
function wrap(fn){
    return function(str){
        logIt(fn(String(str)))
    }
}

module.exports = {
    out: wrap(chalk.green),
    error: wrap(chalk.red),
    notify: wrap(chalk.blue)
}