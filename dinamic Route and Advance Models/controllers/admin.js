// import packages, moduls, models, utils, etc...
const productModel = require( '../models/product' );
const { numberToRupiah } = require( '../utils/numberFormater' );
// ...

// Controller to add new product
exports.addProduct = ( req, res, next ) => {
    const price = numberToRupiah( req.body.price );
    const product = new productModel(
        req.body.title,
        req.body.description,
        price
    )
    product.save();
    return res.redirect( '/admin/add-product' );
}
// ...

// render products page
exports.getProducts = ( req, res, next ) => {
    /* function from model to fetch all products */
    productModel.fetchAll( ( productData ) => {
        res.render( 'admin/products', {
            products: productData,
            path: '/admin/products',
            pageTitle: 'Admin || My Products'
        } )
    } );
}
// ...