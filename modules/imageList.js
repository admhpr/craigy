module.exports = function(){
    var directoryPath = path.join(__dirname, 'config/images');
    fs.readdir( directoryPath, function(err, files){
        console.log(files)
    })
}