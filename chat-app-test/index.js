const express = require("express")
const app = express()
const sanitizeHTML = require("sanitize-html")
const jwt = require("jsonwebtoken")
const { StringDecoder } = require("string_decoder")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", require("./router"))

const server = require("http").createServer(app)
const io = require("socket.io")(server, {
  pingTimeout: 30000
})

io.on("connection", function(socket) {
  socket.on("chatFromBrowser", function(data) {
    try {
      let user = jwt.verify(data.token, process.env.JWTSECRET)
      socket.broadcast.emit("chatFromServer", { message: sanitizeHTML(data.message, { allowedTags: [], allowedAttributes: {} }), username: user.username, avatar: user.avatar })
    } catch {
      console.log("Not a valid token for chat.")
    }
  })
})

module.exports = server


I need to install socke.io client in order for this to run on the client Side 
