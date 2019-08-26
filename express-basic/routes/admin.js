// import packages, modules, etc...
const express = require('express');
const fs = require('fs');
// ...

const route = express.Router();

// /admin/add-product => GET
route.get('/add-product', (req, res, next) => {
    res.send(
        "<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button type=submit>Add</button>"
    );
});

// /admin/add-product => POST
route.post('/add-product', (req, res, next) => {
    console.log(req.body.title)
    fs.writeFile('file out/Products.txt', 'Title: ' + req.body.title, () => {
        return res.redirect('/admin/add-product');
    });
});

module.exports = route;
