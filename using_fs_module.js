var fs = require('fs')

/* takes 3 parameters
    1 name of file
    2 type or format of file or the encoding (optional)
    3 callback function
*/
exports.read = function read(){

fs.readFile('result.js','utf-8',function(err,data){
    console.log(data)
})
    
}

//wwriteFile will replace the content if file exists
fs.writeFile('file.js','console.log("done")',function(err){
    console.log("Data saved")
})

//appendFile will add new content to existing content
fs.appendFile('file.js','console.log("data append")',function(err){
    console.log("Data appended successfully")
})

//we use unlink in case we want to delete
fs.unlink('demo.js', function(err){
    console.log("File Deleted successfully")
})