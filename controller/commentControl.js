const comment_Model = require("../model/commentModel");
const posts_Model = require("../model/postModel");
// var jwt = require('jsonwebtoken');

const entercomment = async ( req, res ) => {

    const data = await comment_Model.create(req.body);


    res.status(200).json({
        status: "success",
        data
    })


}
const singlecomment = async (req,res) => {


    const id = req.params.id;

    const data = await comment_Model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allcomment = async (req,res) => {
    const user = await comment_Model.find();

    res.status(200).json({
        status: "success",
        user
    })
}


const deletcomment = async (req,res) => {

    var id= req.params.id;

    await comment_Model.deleteOne({"id": id});

    res.status(200).json({

        status: "success",
       
    })


 }
const updatecomment = async (req,res) => {

    var id= req.params.id;

    await comment_Model.updateOne({"id": id}, req.body);

    const data= await comment_Model.find({"id": id});
    
    res.status(200).json({
        status: "success",
        data
    })



}

const limitskipcomment= async (req,res) => {

    const data= await comment_Model.find().limit(req.query.limit).skip(req.query.skip);

    res.status(200).json({
        status:"success",
        data
    })
}

const userIdcomment= async (req,res) => {

    var userId= req.params.id;
    const data= await posts_Model.find({"userId" : userId});

    res.status(200).json({
        status:"success",
        data
    })


}


module.exports={

    entercomment,
    allcomment,
  singlecomment,
    deletcomment,
    updatecomment,
   limitskipcomment,
   userIdcomment

}
