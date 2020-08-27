const express = require('express')
const routes = express.Router()

const productController = require('./controller/produstController')
const produstController = require('./controller/produstController')

routes.get('/products', productController.index)
routes.get('/products/:id', productController.show)
routes.post('/products', produstController.store)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.destroy)

module.exports = routes