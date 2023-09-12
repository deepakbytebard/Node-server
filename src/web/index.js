const { FILE_PATH, ROOT } = require("./constants")
const { readFileFromDisk } = require("./utils")

function handleWebFileRequest(req, res){
    res.end(readFileFromDisk(`${ROOT}${FILE_PATH[req.url]}`))
}
module.exports = {
    handleWebFileRequest
}

