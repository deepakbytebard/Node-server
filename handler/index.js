const { handleTodo } = require("../Todo");
const { handleUser } = require("../User");

const handler = (req, res) =>{
    const {url, method} = req;
    switch(url){
        case "/api/user":
            handleUser(url, method, res);
            break;
        case "/api/todo":
            handleTodo(url, method, res);
            break;
        default:
            res.end("Invalid Url.")
    }
}

module.exports = {
    handler
}