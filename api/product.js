const router = require('express').Router();
require('../model/database');
const Product = require('../model/product');

router.get('/', function(req, res, next){
    Product.find({})
    .exec()
    .select(" _id name price")
    .then(product =>{
        const response = {
            counts : product.length,
            products: product.map(product => {
                return {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    request : {
                        type : "GET",
                        url : `http://localhost:3000/${product._id}`
                    }
                }
            })
        }
        res.status(200).json(response)
    })
    .catch(error => {
        res.status.apply(500).json({
            message: error.message || "Page not found"
        })
    })
    
})

router.post('/', function(req, res, next){

        const { name, price} = req.body
        product = new Product({
            name: name, 
            price: price
        })
        product.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Succesfully created",
                CreatedProduct: product
            });
        })
        .catch (error => {
            res.status(500).json({
            error: error.message || 'Something went wrong'
        })
    })

   
})

router.get('/:productId', function(req, res, next){
    const id = req.params.productId
        Product.findById({_id: id})
        .exec()
        .then((result) => {
            if(result){
                res.status(201).json(result)
            }else{
                res.status(404).json({
                    error: "Result not found."
                })
            }
        })
        .catch(error => {
            res.status(500).json({message: error.message || "Error Occurred"})
        })
    
})

router.patch('/:productId', function(req, res, next){
    const id = req.params.productId;
    const {name, price} = req.body;

    Product.findOneAndUpdate({_id:id}, {name: name, price: price}, {new:true})
    .then(updatedProduct => {
        res.status(200).json({
            message: "Product updated",
            updatedProduct})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error ocurred"
        })
    })

})

router.delete('/:productId', function(req, res, next){

    const id = req.params.productId;

    Product.findByIdAndDelete(id)
    .then(() => {
        res.status(200).json({ message: "Product deleted"})
    })
    .catch(err => {
        res.status(500).json({
            message: "Invalid ID"
        })
    })
    
})

module.exports = router