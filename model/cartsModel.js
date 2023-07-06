const mongoose = require('mongoose');


const cartsModel = new mongoose.Schema({

    id : {type : Number},
    products : [
         {
            id : {type : Number},
            title: {type : String},
            price: {type : Number},
            quantity: {type : Number},
            total: {type : Number},
            discountPercentage: {type : Number},
            discountedPrice: {type : Number},
        },
        {
            id : {type : Number},
            title: {type : String},
            price: {type : Number},
            quantity: {type : Number},
            total: {type : Number},
            discountPercentage: {type : Number},
            discountedPrice: {type : Number},
        },
        {
            id : {type : Number},
            title: {type : String},
            price: {type : Number},
            quantity: {type : Number},
            total: {type : Number},
            discountPercentage: {type : Number},
            discountedPrice: {type : Number},
        }, 
        {
            id : {type : Number},
            title: {type : String},
            price: {type : Number},
            quantity: {type : Number},
            total: {type : Number},
            discountPercentage: {type : Number},
            discountedPrice: {type : Number},
        },
        
        {
            id : {type : Number},
            title: {type : String},
            price: {type : Number},
            quantity: {type : Number},
            total: {type : Number},
            discountPercentage: {type : Number},
            discountedPrice: {type : Number},
        }
    ],
   total:{type : Number},
   discountedTotal:{type : Number},
   userId:{type : Number},
   totalProducts:{type : Number},
   totalQuantity:{type : Number}
  

});

const carts_Model = mongoose.model('carts', cartsModel);

module.exports = carts_Model;