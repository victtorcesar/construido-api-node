const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requiDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true}
)
requiDir('./src/models')


app.use('/api', require('./src/routes'))

app.listen(3030)
