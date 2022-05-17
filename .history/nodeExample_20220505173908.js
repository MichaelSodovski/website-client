const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Some Message</title></head>');
        res.write('<body><form action="/message" method="POST"></</body>');
        res.write();
        res.write('</html>');
    }
});

server.listen(3030);









