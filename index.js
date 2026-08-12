require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product_module.js');
const app = express();
const productRoutes = require('./routes/product.route.js');


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/products', productRoutes);

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.get('/', (req, res) =>{
    res.send("hello this is the main :) node api page :)");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database!');
})
.catch((error) =>{
    console.log('Connection failed!', { message: error.message });
})