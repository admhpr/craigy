var fs = require('fs');
var path = require('path');

function formatNameToTitle(){}

module.exports = function(){
    var directoryPath = path.resolve(__dirname, '../config/images');
    return fs.readdirSync( directoryPath, function(err, files){
        return files
    })
}