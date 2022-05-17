const router = require('express').Router();

router.get('/', function(req, res, next){
    res.status(200).json({ message: "All orders"})
})

router.post('/', function(req, res, next){
    orderId = req.params.orderId
    res.status(201).json({ message: "Create a unique order", id: orderId})
})

router.get('/:orderId', function(req, res, next){
    orderId = req.params.orderId
    res.status(200).json({ message: "A unique order Id details", id: orderId})
})

router.delete('/:orderId', function(req, res, next){
    orderId = req.params.orderId
    res.status(200).json({ message: "Order deleted", id: orderId})
})
module.exports = router