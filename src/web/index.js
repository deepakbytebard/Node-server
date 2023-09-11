const { handleReadFileSync } = require("./utils")

function handleWebFileRequest(req, res){
    handleReadFileSync(req, res)
}
module.exports = {
    handleWebFileRequest
}

