const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

const productRoutes = require('./api/product')

app.use('/products', productRoutes )


module.exports = app