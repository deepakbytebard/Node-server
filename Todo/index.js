const handleTodo = (url, method, res) =>{
    switch(method){
        case "GET":
            res.end("Get todo.");
            break;
        case "POST":
            res.end("Post todo.");
            break;
        case "DELETE":
            res.end("Delete todo.");
            break;
        case "PUT":
            res.end("put todo.");
            break;
        default:
            res.end("Invalid method todo.");
            break;
    }
}

module.exports = {
    handleTodo
}