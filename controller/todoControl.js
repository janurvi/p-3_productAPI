const todos_Model= require("../model/todoModel");
// var jwt = require('jsonwebtoken');

const entertodos = async ( req, res ) => {

    const data = await todos_Model.create(req.body);


    res.status(200).json({
        status: "success",
        data
    })


}
const singletodos = async (req,res) => {


    const id = req.params.id;

    const data = await todos_Model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const alltodos = async (req,res) => {
    const user = await todos_Model.find();

    res.status(200).json({
        status: "success",
        user
    })
}


const delettodos = async (req,res) => {

    var id= req.params.id;

    await todos_Model.deleteOne({"id": id});

    res.status(200).json({

        status: "success",
       
    })


 }
const updatetodos = async (req,res) => {

    var id= req.params.id;

    await todos_Model.updateOne({"id": id}, req.body);

    const data= await todos_Model.find({"id": id});
    
    res.status(200).json({
        status: "success",
        data
    })



}

const limitskiptodos= async (req,res) => {

    const data= await todos_Model.find().limit(req.query.limit).skip(req.query.skip);

    res.status(200).json({
        status:"success",
        data
    })
}

const randomtodos= async (req,res) => {

    const data= await todos_Model.aggregate([{ $sample : {size:1}}]);

    res.status(200).json({
        status:"success",
        data
    })

}



module.exports={

    entertodos,
    alltodos,
    singletodos,
    delettodos,
    updatetodos,
    limitskiptodos,
    randomtodos

}
