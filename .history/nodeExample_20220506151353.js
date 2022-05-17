const express = require('express')
const path = require('path')
const http = require('http')
const server = express()
http.createServer(server)
server.use(app.router);
routes.initialize(app);

const adminRoutes = require('./routes/admin.js');

server.use('/userApi/', require('./controllers/userController'))

server.use(bodyParser.urlencoded({ extended: false }));

server.use(adminRoutes);

server.listen(3030);









