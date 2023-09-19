function getUser(query, userData) {
    let [key, value,...rest] = query.split("=")
    let user = userData.data[value]
    return (user)
}

function upsertUser(req, userData) {
    return ":add user"
}

function updateUser(req, userData) {
    return (":update user")
}

function deleteUser(route, query, userData) {
    return (":delete user")
}

module.exports = {
    getUser,
    upsertUser,
    updateUser,
    deleteUser
}