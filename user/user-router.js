const express = require("express")

const router = express.Router()
const restricted = require("../auth/restricted-middleware")

const User = require("./user-model.js")

router.get("/", restricted, (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve users", err })
        })
})

module.exports = router;