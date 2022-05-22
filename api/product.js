const router = require('express').Router();
const Product = require('../model/product');

router.get('/', function(req, res, next){
    const products = Product.find({})
    res.status(200).json({ products: products})
})

router.post('/', function(req, res, next){

     const name = req.body.name;
     const price =  req.body.price;

    try {
        product = new Product({
            name: name,
            price: price
        })
        product.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: "Succesfully created",
                CreatedProduct: product
            });
        });
    } catch (error) {
        res.status(500).json({
            error: error.message || new Error('Something went wrong')
        })
    }

   
})

router.get('/:productId', function(req, res, next){
    id = req.params.productId

    res.status(201).json({ message: "On the productId page", id: id})
})

router.patch('/:productId', function(req, res, next){
    id = req.params.productId
    res.status(200).json({ message: "Updated", id: id})
})

router.delete('/:productId', function(req, res, next){
    id = req.params.productId
    res.status(200).json({ message: "Product deleted"})
})

module.exports = router