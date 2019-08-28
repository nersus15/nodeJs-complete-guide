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
// render cart page
exports.getCart = ( req, res, next ) => {
    productModel.fetchAll( ( productData ) => {
        res.render( 'shop/cart', {
            products: productData,
            path: '/cart',
            pageTitle: 'My Cart'
        } );
    } );
}
// render order page
exports.getOrder = ( req, res, next ) => {
    productModel.fetchAll( ( productData ) => {
        res.render( 'shop/order', {
            products: productData,
            path: '/order',
            pageTitle: 'My Order'
        } );
    } );
}
// render checkout page
exports.getCheckout = ( req, res, next ) => {
    productModel.fetchAll( ( productData ) => {
        res.render( 'shop/checkout', {
            products: productData,
            path: '/checkout',
            pageTitle: 'Checkout'
        } );
    } );
}