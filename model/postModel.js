const mongoose = require('mongoose');

const postsModel = new mongoose.Schema({

    id : {type : Number},
    title: {type : String},
    body: {type : String},
    userId: {type : Number},
    tags: [
     
        {type : String},
        {type : String},
        {type : String}
     
      
    ],
    reactions: {type : Number},
    
    
})





const posts_Model = mongoose.model('posts', postsModel);

module.exports = posts_Model;