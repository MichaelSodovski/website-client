const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.u);
});

server.listen(3030);







