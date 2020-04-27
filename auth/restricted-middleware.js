const jwt= require("jsonwebtoken")

const secret = require("../config/secret")

module.exports = (req, res, next) => {

    const token = req.headers.authorization
}