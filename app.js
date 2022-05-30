const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan');
const cors = require('cors')
require('dotenv').config()




const app = express();

//cross orgin region
app.use(cors())

//DB

const productRoutes = require('./api/product')
const orderRoutes = require('./api/order')

//http request logger.
app.use(morgan("dev"))

//Handling parsers
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Routes
app.use('/products', productRoutes );
app.use('/order', orderRoutes);

//Handling routes errors
app.use((req, res, next) => {
    const error = new Error('Url not found')
    error.status = 404;
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: { message : error.message}
    })
})


module.exports = app