const http = require('http');
const fs

const server = http.createServer((req,res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
});

server.listen(3030);








