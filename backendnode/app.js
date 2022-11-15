const express = require("express")
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const factory = require('./Routes');

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
        const router = new factory(this.app, null, null);
        router.allowOriginHeader();
    }
    runApiApp() {
        const router = new factory(this.app, this.apiVersion, null);
        router.runPackage();
        router.runRouter();
    }
    runDB() {
        const router = new factory(null, null, this.mongoose);
        router.connectMongoose();
    }
}
const kernels = new kernel();
mongoose.Promise = global.Promise;
module.exports = kernels.app;