const fs = require("fs")
const { handleApiRequest, isResourceAnApiRequest } = require("../api/utils")
const {FILE_PATH } = require("../web/constants") 
const { handleWebFileRequest } = require("../web")

function isResourceWebFileRequest(url){
    return FILE_PATH[url] !== undefined ? true : false
}

function handleRequest(req, res){
    const { url } = req
    if(isResourceWebFileRequest(url)){
        handleWebFileRequest(req, res)
    }else if(isResourceAnApiRequest(url)){
        handleApiRequest(req, res)
    }else{
        handleWebFileRequest({...req, url:"/404.html"}, res)
    }

}

// function readFileFromDisk(filePath, encoding="utf-8"){
//     let file = fs.readFileSync(filePath, encoding)
//     return file
// }

module.exports={
    handleRequest,
    // readFileFromDisk
}