const app = express();

const adminRoutes = require('./routes/admin.js');

app.use(bodyParser.urlencoded({extended: false}));

const http = require('http');

const server = http.createServer(routes.handler);

server.listen(3030);









