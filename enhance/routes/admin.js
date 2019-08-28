// import packages, modules, etc...
const express = require( 'express' );
const adminController = require( '../controllers/admin' );
// ...

// global variabel to save products data
const products = [];

const route = express.Router();

// /admin/add-product => GET
route.get( '/add-product', ( req, res, next ) => {
    res.render( 'admin/add-product', { path: '/admin/add-product', pageTitle: 'Admin || Add-Product' } )
} );
// /admin/products => GET
route.get( '/products', ( req, res, next ) => {
    res.render( 'admin/products', { path: '/admin/products', pageTitle: 'Admin || My Products' } )
} );

// /admin/add-product => POST
route.post( '/add-product', adminController.addProduct );

exports.adminRoutes = route;
exports.productData = products;

