// import packages, modules, etc...
const express = require('express');
const fs = require('fs');
const path = require('path')
const rootDir = require('../utils/path');
// ...

const route = express.Router();

// /admin/add-product => GET
route.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin', 'add-product.htm'));
});

// /admin/add-product => POST
route.post('/add-product', (req, res, next) => {
    fs.writeFile('file out/Products.txt', 'Title: ' + req.body.title, () => {
        return res.redirect('/admin/add-product');
    });
});

module.exports = route;
