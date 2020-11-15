const app = require("express")();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 4000;

io.on('connection', socket => {
  socket.on('message', ({user, msgObj}) => {
    io.emit('message', {user, msgObj})
  })
})

http.listen(PORT, function() {
  console.log(`listenning on port ${PORT}`)
})
