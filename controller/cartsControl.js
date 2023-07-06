const carts_Model = require("../model/cartsModel");
// var jwt = require('jsonwebtoken');

const entercarts = async ( req, res ) => {

    const data = await carts_Model.create(req.body);


    res.status(200).json({
        status: "success",
        data
    })


}
const singleData = async (req,res) => {
    const id = req.params.id;

    const data = await carts_Model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allcarts = async (req,res) => {
    const user = await carts_Model.find();

    res.status(200).json({
        status: "success",
        user
    })
}


const deletcarts = async (req,res) => {

    var id= req.params.id;

    await carts_Model.deleteOne({"id": id});

    res.status(200).json({

        status: "success",
       
    })


}
const updatecarts = async (req,res) => {

    var id= req.params.id;

    await carts_Model.updateOne({"id": id}, req.body);

    const data= await carts_Model.find({"id": id});
    
    res.status(200).json({
        status: "success",
        data
    })



}



module.exports={

    entercarts,
    allcarts,
    singleData,
    deletcarts,
    updatecarts

}
