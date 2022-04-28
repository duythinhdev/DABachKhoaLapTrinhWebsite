const express = require("express")
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const Routes = require('./Routes');

class kernel {
    app = {};
    apiVersion = '';
    mongoose = {};
    constructor() {
        this.app = app
        this.apiVersion = "/v1";
        this.mongoose = mongoose;
        this.allowHeader();
        this.runDB();
        this.runApiApp();
    }

    allowHeader() {
        const router = new Routes();
        router.allowOriginHeader(this.app);
    }
    runApiApp() {
        const router = new Routes();
        router.runApi(this.app, this.apiVersion);
    }
    runDB() {
        const router = new Routes();
        router.connectMongoose(this.mongoose);
    }
}
mongoose.Promise = global.Promise;
const kernels = new kernel();
module.exports = kernels.app;