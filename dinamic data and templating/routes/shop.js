// import packages, modules, etc...
const express = require( 'express' );
const rootDir = require( '../utils/path' );
const path = require( 'path' );
const { productData } = require( './admin' )
const fs = require( 'fs' );
// ...

const route = express.Router();

route.get( '/', ( req, res, next ) => {
    // res.sendFile( path.join( rootDir, 'views', 'shop', 'index.htm' ) );
    res.render( 'shop/index', { products: productData, path: '/' } )
} );


module.exports = route;
