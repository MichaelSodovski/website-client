const express = require('express')
const path = require('path')
const http = require('http')
const server = express()
http.createServer(server)

const adminRoutes = require('./routes/admin.js');

server.use('/userApi/', require('./controllers/userController.js'))

server.use(bodyParser.urlencoded({ extended: false }));

server.use(adminRoutes);

server.listen(3030);









