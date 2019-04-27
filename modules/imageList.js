var fs = require('fs');
var path = require('path');
module.exports = function(){
    var directoryPath = path.join(__dirname, 'config/images');
    fs.readdir( directoryPath, function(err, files){
       return files
    })
}