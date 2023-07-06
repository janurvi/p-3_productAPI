const mongoose = require('mongoose');


const productModel = new mongoose.Schema({


    id : {type : Number},
    title: {type : String},
    description: {type : String},
    price: {type : Number},
    discountPercentage: {type : Number},
    rating: {type : Number},
    stock: {type : Number},
    brand: {type : String},
    category: {type : String},
    thumbnail: {type : String},
    images: {type : String},


});

const product_Model = mongoose.model('product', productModel);

module.exports = product_Model;

