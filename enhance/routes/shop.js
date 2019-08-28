// import packages, modules, etc...
const express = require( 'express' );
const shopController = require( '../controllers/shop' )
// ...

const route = express.Router();

route.get( '/', shopController.getIndex );
route.get( '/products', shopController.getProducts );
route.get( '/cart' );
route.get( '/checkout' );

module.exports = route;
