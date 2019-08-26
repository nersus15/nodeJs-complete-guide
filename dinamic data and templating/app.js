// import packages, middleware, etc...
const path = require( 'path' )
const rootDir = require( './utils/path' );
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const { adminRoutes } = require( './routes/admin' );
const shopRoute = require( './routes/shop' );
// ...


const app = express();

// use middleware
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( '/admin', adminRoutes ) // route is /admin/<adminRoute>
app.use( shopRoute )

// use static file
// bootstrap file
app.use( express.static( path.join( rootDir, '/node_modules/bootstrap/dist' ) ) )
app.use( ( req, res, next ) => {
    res.sendFile( path.join( rootDir, 'views', '404.htm' ) );
} )

// custom port to running this app
app.listen( 3002 )