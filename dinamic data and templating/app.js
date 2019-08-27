// import packages, middleware, etc...
const path = require( 'path' )
const rootDir = require( './utils/path' );
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const { adminRoutes } = require( './routes/admin' );
const shopRoute = require( './routes/shop' );
// ...


const app = express();

// add global configuration
app.set( 'view engine', 'pug' );
app.set( 'views', 'views' );
// ...

// use middleware
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( '/admin', adminRoutes ) // route is /admin/<adminRoute>
app.use( shopRoute )
// ...

// use static file
// bootstrap file
app.use( express.static( path.join( rootDir, '/node_modules/bootstrap/dist' ) ) );
app.use( express.static( path.join( rootDir, '/public' ) ) );
// ...

// add route for 404 - resource not found
app.use( ( req, res, next ) => {
    res.render( 'error/404' )
} )
// ...

// custom port to running this app
app.listen( 3002 )
// ...