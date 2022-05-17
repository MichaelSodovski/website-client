// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const express = require('express')
const { log } = require('../../middlewares/logger.middleware')
const { getTasks, getTaskById, addTask, updateTask, performTask, removeTask } = require('./task.controller')
const router = express.Router()

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Some Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
    }
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>page</title></head>');
    res.write('<body><h1>some text</h1></body>');
    res.write('</html>');
    res.end();
}


// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getTasks)
router.get('/:id', getTaskById)
router.post('/', addTask)
router.put('/:id/start', performTask)
router.put('/:id', updateTask)
router.delete('/:id', removeTask)

module.exports = router, requestHandler; 
// another method:
//-------------------
module.exports = {
    handler: 
}