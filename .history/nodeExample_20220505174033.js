const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Some Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message'){
        const = 
    }
});

server.listen(3030);









