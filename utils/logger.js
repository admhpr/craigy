var chalk = require('chalk');

const log = {
    _log: function (input) {
        return console.log(input)
    },
    out: function (str) {
        this._log(chalk.green(str))
    },
    error: function (str) {
        this._log(chalk.red(str))
    },
    notify: function (str) {
        this._log(chalk.blue(str))
    }
}

module.exports = log