const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))



app.get('/bmicalculator', function(req, res){
    res.json({ message: "hello world"})
})


app.listen(3000, function(){
    console.log('server is running on port 3000')

})


