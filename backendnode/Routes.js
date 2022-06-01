const bodyParser = require("body-parser");
const morgan = require('morgan');
const mainRoutes = require('./api/main');
const mainDetailRoutes = require('./api/maindetail');
const userRoutes = require('./api/user')
const productRoutes = require('./api/products');
const optionRoutes = require('./api/option');
const categoryProductRoutes = require('./api/category_product');
const newsRoutes = require('./api/news');
const CategoryNewsRoutes = require('./api/categoryNews');
const OrderRoutes = require('./api/order');
const OrderOptionRoutes = require('./api/order_option');
const cors = require('cors');
const flash = require('express-flash');
const session = require('express-session');
require('dotenv').config();
const sliderRoutes = require('./api/slider');
const cookieParser = require("cookie-parser");

class Routers {
    app;
    apiVersion;
    mongoose;
    constructor(app = null, apiVersion = null, mongoose = null) {
        this.app = app;
        this.apiVersion = apiVersion;
        this.mongoose = mongoose;
    }
    runApi() {
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.app.use(bodyParser.json());
        this.app.use(
            session({
                secret: 'secret',
                resave: true,
                saveUninitialized: true
            })
        );
        this.app.use(cookieParser());
        this.app.use(flash());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(`${this.apiVersion}/user`, userRoutes);
        this.app.use(`${this.apiVersion}/main`, mainRoutes);
        this.app.use(`${this.apiVersion}/mainDetail`, mainDetailRoutes);
        this.app.use(`${this.apiVersion}/products`, productRoutes);
        this.app.use(`${this.apiVersion}/option`, optionRoutes);
        this.app.use(`${this.apiVersion}/ctproduct`, categoryProductRoutes);
        this.app.use(`${this.apiVersion}/news`, newsRoutes)
        this.app.use(`${this.apiVersion}/slider`, sliderRoutes)
        this.app.use(`${this.apiVersion}/ctnews`, CategoryNewsRoutes)
        this.app.use(`${this.apiVersion}/order`, OrderRoutes)
        this.app.use(`${this.apiVersion}/orderoption`, OrderOptionRoutes)
    }
    connectMongoose() {
        this.mongoose.set('useNewUrlParser', true);
        this.mongoose.set('useFindAndModify', false);
        this.mongoose.set('useCreateIndex', true);
        this.mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("MongoDb connected"))
            .catch(err => console.log(err));
    }
    allowOriginHeader() {
        this.app.use((req, res, next) => {
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