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

router.post("/login", (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({
                message: `Welcome ${username}`,
                jwtToken: token
            })
        } else {
            res.status(401).json({ message: "Invalid Credentials" })
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;