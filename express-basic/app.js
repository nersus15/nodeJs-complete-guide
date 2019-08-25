// import packages, middleware, etc...
const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
// ...

const app = express();

// use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoute)
app.use(shopRoute)

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not Found</h1>");
})

// custom port to running this app
app.listen(3002)