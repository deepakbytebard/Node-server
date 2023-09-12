const fs = require("fs")
const { FILE_PATH, ROOT } = require("../constants")
const { readFileFromDisk } = require("../../utils")

function isResourceWebFileRequest(url){
    return FILE_PATH[url] !== undefined ? true : false
}

function readFile(req, res){
    res.end(readFileFromDisk(`${ROOT}${FILE_PATH[req.url]}`))
}

module.exports={
    readFile,
    isResourceWebFileRequest
}