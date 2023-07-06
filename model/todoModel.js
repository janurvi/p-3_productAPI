const mongoose = require('mongoose');


const todosModel = new mongoose.Schema({


id : {type : Number},
todo : {type : String},
completed : {type : String},

userId: {type : Number},


});

const todos_Model = mongoose.model('todo', todosModel);

module.exports = todos_Model;

