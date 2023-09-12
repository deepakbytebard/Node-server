const fs = require("fs")


function readFileFromDisk(filePath, encoding="utf-8"){
    let file = fs.readFileSync(filePath, encoding)
    return file
}


module.exports={
    readFileFromDisk,
    
}