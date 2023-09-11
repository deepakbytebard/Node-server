const http = require("http");
const { handleRequest } = require("./utils")
const { PORT_NUMBER } = require("./constants")

const server = http.createServer(handleRequest);
server.listen(PORT_NUMBER, ()=>{})