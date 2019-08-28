const Product = require( '../models/product' );

exports.addProduct = ( req, res, next ) => {
    const product = new Product(
        req.body.title
    )
    product.save();
    return res.redirect( '/admin/add-product' );
}

exports.fetchProducts = ( req, res, next ) => {
    Product.fetchAll( ( productData ) => {
        res.render( 'shop/index', { products: productData, path: '/' } )
    } );

}