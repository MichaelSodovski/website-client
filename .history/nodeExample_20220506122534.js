const server = express();

const adminRoutes = require('./routes/admin.js');

server.use('/api/', require('./controllers/userController.js'))

server.use(bodyParser.urlencoded({ extended: false }));

server.use(adminRoutes);

server.listen(3030);









