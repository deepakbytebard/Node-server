const { handleTodoApiRequest } = require("./Routes/todo")
const { handleUserApiRequest } = require("./Routes/user")

function handleApiRequest({req, userData, todoData}){
    const [url, ...rest] = req.url.split("?")
    switch(url){
        case "/api/user":
           return(handleUserApiRequest(req, userData));
        case "/api/todo":
            return(handleTodoApiRequest(req, todoData));
    }
}

module.exports = {
    handleApiRequest
}