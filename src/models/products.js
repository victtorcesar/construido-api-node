const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

productSchema.plugin(mongoosePaginate)

mongoose.model("products", productSchema)