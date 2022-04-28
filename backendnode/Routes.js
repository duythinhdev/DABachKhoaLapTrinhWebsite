const bodyParser = require("body-parser");
const morgan = require('morgan');
const mainRoutes = require('./api/main');
const mainDetailRoutes = require('./api/maindetail');
const userRoutes = require('./api/user')
const productRoutes = require('./api/products');
const optionRoutes = require('./api/option');
const categoryRoutes = require('./api/category_product');
const newsRoutes = require('./api/news');
const cors = require('cors');
const flash = require('express-flash');
const session = require('express-session');
require('dotenv').config();

class Routers {
    runApi(app, apiVersion) {
        app.use(morgan('dev'));
        app.use(cors())
        app.use(bodyParser.json());
        app.use(
            session({
                secret: 'secret',
                resave: true,
                saveUninitialized: true
            })
        );
        app.use(flash());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(`${apiVersion}/user`, userRoutes);
        app.use(`${apiVersion}/main`, mainRoutes);
        app.use(`${apiVersion}/mainDetail`, mainDetailRoutes);
        app.use(`${apiVersion}/products`, productRoutes);
        app.use(`${apiVersion}/option`, optionRoutes);
        app.use(`${apiVersion}/ctproduct`, categoryRoutes);
        app.use(`${apiVersion}/news`, newsRoutes)
    }
    connectMongoose(mongoose) {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("MongoDb connected"))
            .catch(err => console.log(err));
    }
    allowOriginHeader(app) {
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
            );
            next();
        });
    }
}

module.exports = Routers;