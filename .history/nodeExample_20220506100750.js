const app = express();

const http = require('http');

const adminRoutes = require('./');

const server = http.createServer(routes.handler);

server.listen(3030);









