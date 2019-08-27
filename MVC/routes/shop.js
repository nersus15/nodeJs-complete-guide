// import packages, modules, etc...
const express = require( 'express' );
const { fetchProducts } = require( '../controllers/products' )
// ...

const route = express.Router();

route.get( '/', fetchProducts );


module.exports = route;
