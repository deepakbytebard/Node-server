const http = require("http");
const { PORT_NUMBER } = require("./constants")
const { isResourceAnApiRequest } = require("./api/utils")
const { isResourceWebFileRequest } = require("./web/utils")
const { handleApiRequest } = require("./api")
const { handleWebFileRequest } = require("./web")
const { readFileFromDisk } = require("./utils")


let userData = {}
let todoData = {}

function handleRequest(req, res){
    const [url, query] = req.url.split("?")
    if(isResourceWebFileRequest(url)){
        handleWebFileRequest(req, res)
    }else if(isResourceAnApiRequest(url)){
        res.end(JSON.stringify(handleApiRequest({req:req, userData:userData, todoData:todoData})))
    }else{
        handleWebFileRequest({...req, url:"/404.html"}, res)
    }

}

function onStartUp(){
    userData = JSON.parse(readFileFromDisk("data/user.json"));
    todoData = JSON.parse(readFileFromDisk("data/todo.json"));
}

const server = http.createServer(handleRequest);
server.listen(PORT_NUMBER, onStartUp)