var fs = require('fs');
var path = require('path');

var log = require('../utils/logger');

function formatNameToTitle(list){
    return list.map(function(fileName){
        const noFileExt = fileName.replace(/\.[^/.]+$/, "")
        return noFileExt.replace(/-|_/g," ");
    })
}

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
        var location = fs.readdirSync(directoryPath)
        
        // we're assuming that if the first item is a directory they all are.
        if(await isDirectory(`${directoryPath}/${location[0]}`)){
            console.log('here')
            //TODO:
            process.exit()
        }
    }catch(e){
        log.error(e.message)
        process.exit()
    }

}