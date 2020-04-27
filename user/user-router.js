const express = require("express")

const router = express.Router()

const User = require("./user-model.js")

router.get("/users", (req, res) => {
    User.getUsers()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve users", err })
        })
})