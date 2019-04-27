var fs = require('fs');
var path = require('path');

var log = require('../utils/logger');

function formatNameToTitle(list){
    return list.map(function(fileName){
        const noFileExt = fileName.replace(/\.[^/.]+$/, "")
        return noFileExt.replace(/-|_/g," ");
    })
}

module.exports = function(imageFolder){

    var basePath = "../config/images";
    var fullPath = imageFolder ? `${basePath}/${imageFolder}` : `${basePath}` 
    console.log(fullPath)
    var directoryPath = path.resolve(__dirname, fullPath);
    
    try{
        var location = fs.readdirSync(directoryPath)
        console.log(location)
        fs.stat(location[0], function(err, stat){
            console.log(stat)
            console.log(stat, stat.isDirectory())
        })
    }catch(e){
        log.error(e.message)
        process.exit()
    }

}