var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => {
    return Product.find({})
  },
  postProductsHelper: (product) => {
    return Product.create(product)
  },
  updateProductHelper: (_id, updates) => {
    return Product.findOneAndUpdate(_id, updates)
  },
  deleteProductHelper: (_id) => {
    return Product.deleteOne(_id)
  }
};

module.exports = helpers