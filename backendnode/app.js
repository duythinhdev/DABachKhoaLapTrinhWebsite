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
        const router = new Routes(this.app, null, null);
        router.allowOriginHeader();
    }
    runApiApp() {
        const router = new Routes(this.app, this.apiVersion, null);
        router.runApi();
    }
    runDB() {
        const router = new Routes(null, null, this.mongoose);
        router.connectMongoose();
    }
}
mongoose.Promise = global.Promise;
const kernels = new kernel();
module.exports = kernels.app;