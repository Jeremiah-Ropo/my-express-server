const mongoose = require('mongoose');
 
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true})

const connectDb = mongoose.connection;

connectDb.on('error', console.error.bind(console, 'Error occured from the database'));
connectDb.once('open', () => {
    console.log('Database is connected')
});

//Models
require('./product')