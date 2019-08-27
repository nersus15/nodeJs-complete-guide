// import packages, modules, etc...
const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' )
const rootDir = require( '../utils/path' );
// ...

// global variabel to save products data
const products = [];

const route = express.Router();

// /admin/add-product => GET
route.get( '/add-product', ( req, res, next ) => {
    res.render( 'admin/add-product', { path: '/admin/add-product' } )
} );

// /admin/add-product => POST
route.post( '/add-product', ( req, res, next ) => {
    products.push( { title: req.body.title } )
    return res.redirect( '/admin/add-product' );
} );

exports.adminRoutes = route;
exports.productData = products;

