module.exports = {
    insert
}

function insert(user) {
    return db("users")
        .insert(user)
}
