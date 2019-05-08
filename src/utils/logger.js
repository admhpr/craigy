var chalk = require("chalk");

function logIt(input) {
  console.log(input);
}

function wrap(fn) {
  return function(str) {
    logIt(fn(String(str)));
  };
}

var spinner = (function() {
  var P = ["\\", "|", "/", "-"];
  var x = 0;
  return setInterval(function() {
    process.stdout.write("\r" + P[x++]);
    x &= 3;
  }, 250);
})();

function stopSpinner(interval) {
  clearInterval(interval);
}

module.exports = {
  out: wrap(chalk.green),
  error: wrap(chalk.red),
  notify: wrap(chalk.blue),
  spinner,
  stopSpinner
};
