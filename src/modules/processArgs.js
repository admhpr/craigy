var chalk = require('chalk')

// internal modules
var log = require('../utils/logger')

function usage () {
  banner()
  setTimeout(function () {
    details()
  }, 1000)
}

function banner () {
  log.out(`
                    (_)            
        ___ _ __ __ _ _  __ _ _   _ 
       / __| '__/ _\` | |/ _\` | | | 
      | (__| | | (_| | | (_| | |_| |
       \___|_|  \__,_|_|\__, |\__, |
                         __/ | __/ |
                        |___/ |___/
                        (field guide.)
    -----------------------------------       
        `)
}

async function details () {
  console.log(`
Using Craigy couldn't be easier:
    
    Add your credientials to a .env file
    
    ${chalk.bgBlack('mv .env-example .env')}
    
    replace the values with your own...

    `)

  function info () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log(`..run the script:`)
        resolve(`  
    ${chalk.bgBlack(
      'npm run start'
    )} ${chalk.green('city')} ${chalk.yellow('price')} ${chalk.blue('imageFolder?')}

    For full documentation see ${chalk.blue(
      'https://github.com/harps116/craigy/blob/master/README.md'
    )}
                
                `)
      }, 4000)
    })
  }

  var msg = await info()
  console.log(msg)
  process.exit()
}

module.exports = function () {
  if (!process.argv[2] && !process.argv[3]) {
    usage()
    return
  }

  var city = String(process.argv[2])
  var price = parseFloat(Math.round(process.argv[3] * 100) / 100)
  var imageFolder =
    typeof process.argv[4] !== 'undefined' ? process.argv[4] : false

  if (city.length && !Number.isNaN(price)) {
    return { price, city, imageFolder }
  }

  setTimeout(function () {
    log.error(`Incorrect argument types provided`)
    usage()
  }, 1000)
}
