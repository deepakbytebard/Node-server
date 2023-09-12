const fs = require("fs")
const { FILE_PATH, ROOT } = require("../constants")
// const { readFileFromDisk } = require("../../utils")

function readFileFromDisk(filePath, encoding="utf-8"){
    let file = fs.readFileSync(filePath, encoding)
    return file
}

module.exports={
    readFileFromDisk
}