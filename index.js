const http =  require("http")
const { PORT } = require("./constants")
const { handler } = require("./handler")


const server =  http.createServer(handler)
server.listen(PORT)