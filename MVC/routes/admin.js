// import packages, modules, etc...
const express = require( 'express' );
const { addProduct } = require( '../controllers/products' );
// ...

// global variabel to save products data
const products = [];

const route = express.Router();

// /admin/add-product => GET
route.get( '/add-product', ( req, res, next ) => {
    res.render( 'admin/add-product', { path: '/admin/add-product' } )
} );

// /admin/add-product => POST
route.post( '/add-product', addProduct );

exports.adminRoutes = route;
exports.productData = products;

