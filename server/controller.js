// Controller here
// complete building out the controller
var helpers = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    return helpers.getProductsHelper()
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(400).send(err))

  },
  post: (req, res) => {
    return helpers.postProductsHelper(req.body)
    .then(() => res.status(201).send('product added'))
    .catch(err => res.status(401).send(err))

  },
  put: (req, res) => {
    return helpers.updateProductHelper(req.params._id, req.body)
    .then(() => res.status(202).send('product updated'))
    .catch(err => res.status(402).send(err))

  },
  delete: (req, res) => {
    return helpers.deleteProductHelper(req.params._id)
    .then(() => res.status(203).send('product deleted'))
    .catch(err => res.status(403).send(err))

  }
}

module.exports = controller