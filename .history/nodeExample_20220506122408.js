const server = express();

const adminRoutes = require('./routes/admin.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

server.listen(3030);









