const http = require('http');

const server = http.createServer(() => {
    console.log(req);
});

server.listen(3000);




