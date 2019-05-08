var fs = require('fs')
var path = require('path')

// internal modules
var log = require('../utils/logger')
var format = require('../utils/format')

/**
 *
 * @param {string} path path to image
 * @param {string} list file name list
 * @returns {Object} formats image name as title and return full path to image
 */
function formatNameToTitle (path, list = []) {
  return list.map(function (fileName) {
    var noFileExt = fileName.replace(/\.[^/.]+$/, '')
    return {
      image: `${path}/${fileName}`,
      title: format.capitalFirstLetter(noFileExt.replace(/-|_/g, ' '))
    }
  })
}

/**
 *
 * @param {string} path to location
 * @returns {Promise} resolves to true if locaton is a directory
 */
function isDirectory (path) {
  return new Promise(function (resolve, reject) {
    fs.stat(path, function (err, stat) {
      if (err) {
        reject(err)
      }
      resolve(stat.isDirectory())
    })
  })
}

module.exports = async function (imageFolder) {
  var relativePath = '../config/images'
  var directoryPath = imageFolder
    ? `${relativePath}/${imageFolder}`
    : `${relativePath}`
  var absolutePath = path.resolve(__dirname, directoryPath)

  try {
    var sublocations = fs.readdirSync(absolutePath)
    // we're assuming that if the first item is a directory they all are.
    if (
      !imageFolder &&
      (await isDirectory(`${absolutePath}/${sublocations[0]}`))
    ) {
      log.out(`Iterating over sub directories...`)
      // yields a file list for each dir within the images folder
      return function * fileList () {
        for (let dir of sublocations) {
          var dirPath = `${absolutePath}/${dir}`
          var fileList = formatNameToTitle(dirPath, fs.readdirSync(dirPath))
          yield fileList
        }
      }
    } else {
      log.out(`Getting files from directory...`)
      // returns an array so result can be comsumed as an iterable like a generator
      return () => [
        formatNameToTitle(absolutePath, fs.readdirSync(absolutePath))
      ]
    }
  } catch (e) {
    log.error(e.message)
    process.exit()
  }
}
