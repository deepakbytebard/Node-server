const { getTodo, upsertTodo, updateTodo, deleteTodo } = require("./utils")

function handleTodoApiRequest(req, res){
    const { url, method } = req 
    switch (method){
        case "GET":
            getTodo(url, res);
            break;
        case "POST":
            upsertTodo(req,res);
            break;
        case "PUT":
            updateTodo(req, res);
            break;
        case "DELETE":
            deleteTodo(url, res);
            break;
        default:
            res.end("Does not support given todo method.")
            break;
    }
}

module.exports = {
    handleTodoApiRequest
}