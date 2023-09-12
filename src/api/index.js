const { handleTodoApiRequest } = require("./Routes/todo")
const { handleUserApiRequest } = require("./Routes/user")

function handleApiRequest(req, res){
    const { url } = req

    switch(url){
        case "/api/user":
            handleUserApiRequest(req, res);
            break;
        case "/api/todo":
            handleTodoApiRequest(req, res);
            break;
    }
}

module.exports = {
    handleApiRequest
}