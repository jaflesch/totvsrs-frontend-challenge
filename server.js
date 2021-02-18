const express = require('express')
const server = express()

server.use(express.static('views'))
server.use(express.static('public'))

server.get('/', (request, response) => {
  response.render('index.html')
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
