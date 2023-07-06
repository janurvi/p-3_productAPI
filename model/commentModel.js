const mongoose = require('mongoose');


const commentModel = new mongoose.Schema({


id : {type : Number},
body : {type : String},
postId: {type : Number},
user:{
    id : {type : Number},
    username:{type : String}
}


});

const comment_Model = mongoose.model('comment', commentModel);

module.exports = comment_Model;

