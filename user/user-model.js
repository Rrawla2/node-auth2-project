module.exports = {
    insert,
    getUsers,
    findBy,
    findById
}

function insert(user) {
    return db("users")
        .insert(user)
}

function getUsers() {
    return db("users")
}

function findBy(id) {
    return db("users")
        .where(id)
}

function findById(id) {
    return db("users")
        .where({ id })
        .first()
}