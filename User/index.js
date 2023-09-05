const handleUser = (url, method, res) =>{

        switch(method){
        case "GET":
            res.end("Get user.");
            break;
        case "POST":
            res.end("Post user.");
            break;
        case "DELETE":
            res.end("Delete user.");
            break;
        case "PUT":
            res.end("put user.");
            break;
        default:
            res.end("Invalid method user.");
            break;
    }
}

module.exports = {
    handleUser
}