const { API_PATH } = require("../constants")
function isResourceAnApiRequest(url){
    return API_PATH[url] || false
}

module.exports={
    isResourceAnApiRequest,
}