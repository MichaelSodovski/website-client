const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Some message</title></head>');
        res.write();
        res.write();
        res.write('</html>');
    }
});

server.listen(3030);









