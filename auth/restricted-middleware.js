const jwt= require("jsonwebtoken")

const secret = require("../config/secret")

module.exports = (req, res, next) => {

    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "No access granted", err })
            } else {
                req.decodedToken = decodedToken
                next()
            }
        })
    } else {
        res.status(500).json({ message: "You shall not pass!" })
    }
}