const express = require('express')
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')
const http = require('http')
const app = express()
http.createServer(app)

const adminRoutes = require('./routes/admin.js');

server.use('/userApi/', require('./controllers/userController.js'))

server.use(bodyParser.urlencoded({ extended: false }));

server.use(adminRoutes);

server.listen(3030);









