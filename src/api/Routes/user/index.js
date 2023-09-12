const { getUser, upsertUser, updateUser, deleteUser } = require("./utils")
function handleUserApiRequest(req, res){
    const {url, method} = req
    switch (method){
        case "GET":
            getUser(url, res);
            break;
        case "POST":
            upsertUser(req,res);
            break;
        case "PUT":
            updateUser(req, res);
            break;
        case "DELETE":
            deleteUser(url, res);
            break;
        default:
            res.end("Does not support given user method.")
            break;
    }
}

module.exports = {
    handleUserApiRequest
}