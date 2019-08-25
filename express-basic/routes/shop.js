// import packages, modules, etc...
const express = require('express');
const fs = require('fs');
// ...

const route = express.Router();

route.get('/', (req, res, next) => {
    res.send(
        "<h1>Welcome to My E-Commerce Website </h1>"
    );
});


module.exports = route;
