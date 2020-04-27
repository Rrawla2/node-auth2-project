const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const restricted = require("./auth/restricted-middleware.js")

const userRouter = require("./user/user-router.js")
const authRouter = require("./auth/auth-router.js")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/users", restricted, userRouter)
server.use("/auth", authRouter)

server.get("/", (req, res) => {
    res.json({ api: "IT'S ALIVE" })
})

module.exports = server;