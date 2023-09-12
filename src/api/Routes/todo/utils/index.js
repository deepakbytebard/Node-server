function getTodo(url, res){
    res.end(":send me todo")
}

function upsertTodo(req, res){
    res.end(":add todo")
}

function updateTodo(req, res){
    res.end(":update todo")
}

function deleteTodo(req, res){
    res.end(":delete todo")
}

module.exports = {
    getTodo,
    upsertTodo,
    updateTodo,
    deleteTodo
}