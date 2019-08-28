const Product = require( '../models/product' );

exports.addProduct = ( req, res, next ) => {
    const product = new Product(
        req.body.title
    )
    product.save();
    return res.redirect( '/admin/add-product' );
}