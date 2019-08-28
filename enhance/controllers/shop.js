// import packages, moduls, models, etc...
const productModel = require( '../models/product' );
// ...

// render products page
exports.getProducts = ( req, res, next ) => {
    /* function from model to fetch all products */
    productModel.fetchAll( ( productData ) => {
        res.render( 'shop/product-list', {
            products: productData,
            path: '/products',
            pageTitle: 'My Shop || Product-list'
        } )
    } );
}
// ...

// render index page
exports.getIndex = ( req, res, next ) => {
    productModel.fetchAll( ( productData ) => {
        res.render( 'shop/index', {
            products: productData,
            path: '/',
            pageTitle: 'My Shop'
        } );
    } );
}