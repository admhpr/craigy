var fs = require('fs');
var path = require('path');

function formatNameToTitle(list){
    return list.map(function(fileName){
        const noFileExt = fileName.replace(/\.[^/.]+$/, "")
        console.log(noFileExt)
        return noFileExt.replace(/-|_/g," ");
    })
}

module.exports = function(){
    var directoryPath = path.resolve(__dirname, '../config/images');
    return formatNameToTitle(fs.readdirSync( directoryPath))
}