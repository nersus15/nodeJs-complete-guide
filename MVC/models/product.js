const fs = require( 'fs' );
const path = require( 'path' );
const rootDir = require( '../utils/path' );

const p = path.join( rootDir, 'data', 'products.json' );
const getProductFromFile = ( callBack ) => {
    fs.readFile( p, ( err, fileContent ) => {
        if ( err ) {
            callBack( [] );
        } else {
            callBack( JSON.parse( fileContent ) );
        }

    } )
}
module.exports = class product {
    constructor( title ) {
        this.title = title;
    }

    static fetchAll( callBack ) {
        getProductFromFile( callBack );
    }
    save() {
        getProductFromFile( ( products ) => {
            products.push( this );
            fs.writeFile( p, JSON.stringify( products ), ( err ) => {
                throw err
            } );
        } )
    }
}