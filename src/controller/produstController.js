const mongoose = require('mongoose')

const product = mongoose.model('products')

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query

        const products = await product.paginate({},{ page, limit: 10})

        return res.json(products)
    },
    async show(req, res){
        const prods = await product.findById(req.params.id)

        return res.json(prods)
    },
    async store(req, res) {
        const prod = await product.create(req.body)

        return res.json(prod)
    },
    async update(req, res){
        const prod1 = await product.findByIdAndUpdate(req.params.id, req.body, { new: true})

        return res.json(prod1)
    },
    async destroy(req, res){
        await product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}