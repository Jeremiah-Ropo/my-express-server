const router = require('express').Router();

router.get('/', function(req, res, next){
    res.status(200).json({ message: "All products"})
})


router.post('/:productId', function(req, res, next){
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