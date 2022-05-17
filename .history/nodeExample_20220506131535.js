const express = require('express')
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')
const http = require('http')
const server = express()
http.createServer(server)

// session setup
const session = expressSession({
    secret: 'coding is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
// Express App Config
app.use(express.json())
app.use(session)

const adminRoutes = require('./routes/admin.js');

server.use('/userApi/', require('./controllers/userController.js'))

server.use(bodyParser.urlencoded({ extended: false }));

server.use(adminRoutes);

server.listen(3030);









