const http = require("http");
const { PORT_NUMBER } = require("./constants")
const { isResourceAnApiRequest } = require("./api/utils")
const { isResourceWebFileRequest } = require("./web/utils")
const { handleApiRequest } = require("./api")
const { handleWebFileRequest } = require("./web")

function handleRequest(req, res){
    const { url } = req
    if(isResourceWebFileRequest(url)){
        handleWebFileRequest(req, res)
    }else if(isResourceAnApiRequest(url)){
        handleApiRequest(req, res)
    }else{
        handleWebFileRequest({...req, url:"/404.html"}, res)
    }

}

const server = http.createServer(handleRequest);
server.listen(PORT_NUMBER, ()=>{})