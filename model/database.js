const mongoose = require('mongoose');
 
require('dotenv').config()
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true})

const connectDb = mongoose.connection;

connectDb.on('error', console.error.bind(console, 'Error occured from the database'));
connectDb.once('connection', (stream) => {
    console.log('Database is connected')
});


module.exports = connectDb;