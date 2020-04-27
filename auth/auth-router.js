const router = require("express").Router()

const bcrypt = require("bcryptjs")

const Users = require("../user/user-model")

const generateToken = require("./generateToken")

router.post("/register", (req, res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    
})