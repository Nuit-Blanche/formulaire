const Shop = require('./Shop');

class ShopProduct extends Shop {
    constructor(title, price) {
        super(title, price);
    }

    get Description() {
    return `${this.title} ${this.price} ${this.playlength} ${this.numPages}`
  }   
}


let CDProduct = new Shop('Prout', '7', '10')

console.log(CDProduc.Description);
CDProduc.price = 'test';

console.log(CDProduc.price)



let BookProduct = new Student('BookProduct', '8', '11', '20')

console.log(BookProduct.Description);
BookProduct.playlength = 'test';

console.log(BookProduct.playlength)



module.exports = Shop;