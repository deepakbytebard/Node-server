function getUser(url, res){
    res.end(":send me user")
}

function upsertUser(req, res){
    res.end(":add user")
}

function updateUser(req, res){
    res.end(":update user")
}

function deleteUser(req, res){
    res.end(":delete user")
}

module.exports = {
    getUser,
    upsertUser,
    updateUser,
    deleteUser
}