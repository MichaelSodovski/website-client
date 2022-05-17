const http = require('http');
const routes = require('./api/task/routes');

const server = http.createServer(routes);

server.listen(3030);









