// import packages, middleware, etc...
const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
// ...

const app = express();

// use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoute)

// custom port to running this app
app.listen(3002)