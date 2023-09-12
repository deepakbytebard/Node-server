const { readFile } = require("./utils")
function handleWebFileRequest(req, res){
    readFile(req,res)
}
module.exports = {
    handleWebFileRequest
}

