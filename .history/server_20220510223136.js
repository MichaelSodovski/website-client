const express = require('express')
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')
const app = express()
const http = require('http')
const taskRoutes = require('./routes/task.routes')
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')

const server = http.createServer(app)

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
app.set("port", process.env.PORT || 3100);

if (process.env.NODE_ENV === 'production') {
    // Express serve static files on production environment
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    // Configuring CORS
    const corsOptions = {
        // Make sure origin contains the url your frontend is running on
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const { connectSockets } = require('./services/socket.service')

app.all('*', setupAsyncLocalStorage)

app.use('/routes', taskRoutes)
connectSockets(http, session)

// Make every server-side-route to match the index.html
// so when requesting http://localhost:3030/index.html/task/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow vue-router to take it from there
app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/',(req,res) => {
    return 'Server check';
})

server.listen(app.get("port"), () => {
    console.log("Express server listening on port " + app.get("port"));
});