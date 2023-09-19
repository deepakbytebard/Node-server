const { getUser, upsertUser, updateUser, deleteUser } = require("./utils")
function handleUserApiRequest(req, userData) {
    const { url, method } = req
    const [route, query] = url.split("?")
    switch (method) {
        case "GET":
            return (getUser(route, query, userData));
        case "POST":
            return (upsertUser(req, userData));
        case "PUT":
            return (updateUser(req, userData));
        case "DELETE":
            return (deleteUser(route, query, userData));
    }
}

module.exports = {
    handleUserApiRequest
}