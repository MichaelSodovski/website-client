const app = express();

const http = require('http');

const adminroutes = require('./api/task/routes');

const server = http.createServer(routes.handler);

server.listen(3030);









