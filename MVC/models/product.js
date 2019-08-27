const products = [];

module.exports = class product {
    constructor( title ) {
        this.title = title;
    }

    static fetchAll() {
        return products;
    }
    save() {
        products.push( this )
    }
}