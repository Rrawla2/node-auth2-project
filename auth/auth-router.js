const router = require("express").Router()

const bcrypt = require("bcryptjs")

const Users = require("../user/user-model")

const generateToken = require("./generateToken")

router.post("/register", (req, res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    Users.insert(user)
        .then(newUser => {
            user.id = newUser[0]

            const token = generateToken(user)
            res.status(201).json({ user, token })
        })
        .catch(err => {
            res.status(500).json({ message: "Error", err })
        })
})

module.exports = router;