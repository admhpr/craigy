var fs = require('fs');
var path = require('path');

var log = require('../utils/logger');

function formatNameToTitle(list){
    return list.map(function(fileName){
        const noFileExt = fileName.replace(/\.[^/.]+$/, "")
        console.log(noFileExt)
        return noFileExt.replace(/-|_/g," ");
    })
}

module.exports = function(price){

    var directoryPath = path.resolve(__dirname, `../config/images/${price}`);
    
    try{
        return formatNameToTitle(fs.readdirSync(directoryPath))
    }catch(e){
        log.error(e.message)
        process.exit()
    }

}