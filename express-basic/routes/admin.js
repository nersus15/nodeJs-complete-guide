// import packages, modules, etc...
const express = require('express');
const fs = require('fs');
// ...

const route = express.Router();

route.use('/add-product', (req, res, next) => {
    res.send(
        "<form action='/validate' method='POST'><input type='text' name='title'/><button type=submit>Add</button>"
    );
});
route.post('/validate', (req, res, next) => {
    console.log(req.body.title)
    fs.writeFile('file out/Products.txt', 'Title: ' + req.body.title, () => {
        return res.redirect('/add-product');
    });
});

module.exports = route;
