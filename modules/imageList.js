var fs = require('fs');
var path = require('path');

var log = require('../utils/logger');

/**
 * 
 * @param {string} path path to image
 * @param {string} list file name list
 * @returns {Object} formats image name as title and return full path to image
 */
function formatNameToTitle(path, list = []){
    return list.map(function(fileName){
        const noFileExt = fileName.replace(/\.[^/.]+$/, "")
        return { image: `${path}/${fileName}`, title: noFileExt.replace(/-|_/g," ")};
    })
}

/**
 * 
 * @param {string} path to location
 * @returns {Promise} resolves to true if locaton is a directory 
 */
function isDirectory(path){
    return new Promise(function(resolve, reject){
        fs.stat(path, function(err, stat){          
            if(err){
                reject(err)
            }
            resolve(stat.isDirectory())
        })
    })
}

module.exports = async function(imageFolder){
    var relativePath = "../config/images";
    var fullPath = imageFolder ? `${relativePath}/${imageFolder}` : `${relativePath}` 
    var directoryPath = path.resolve(__dirname, fullPath);
    
    try{
        var sublocations = fs.readdirSync(directoryPath)
        
        // we're assuming that if the first item is a directory they all are.
        if(await isDirectory(`${directoryPath}/${sublocations[0]}`)){
            console.log('here')
            log.out(`Iterating over sub directories...`)
            return function* fileList(){
                for(let dir of sublocations){
                    var path = `${directoryPath}/${dir}`;
                    var fileList = formatNameToTitle(path, fs.readdirSync(path))
                    yield fileList;
                }
            }
            process.exit()
        }
    }catch(e){
        log.error(e.message)
        process.exit()
    }
}