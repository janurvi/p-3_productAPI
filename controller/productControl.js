const product_Model = require("../model/productModel");
// var jwt = require('jsonwebtoken');

const enterproduct = async ( req, res ) => {

    const data = await product_Model.create(req.body);


    res.status(200).json({
        status: "success",
        data
    })


}
const singleData = async (req,res) => {
    const id = req.params.id;
    const data = await product_Model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const searchproduct = async (req,res) => {

    var s_product= req.query

    var data = await product_Model.find(s_product);

    if(data.length == 1){

        res.status(200).json({
            status:"success",
            data
        })
    }else{

        res.status(200).json({
            status:"NO RESULT FOUND",
            
        })
    }
}
const limitskipproduct= async (req,res) => {

    const data= await product_Model.find().limit(req.query.limit).skip(req.query.skip);

    res.status(200).json({
        status:"success",
        data
    })
}



const allproducts = async (req,res) => {
    const user = await product_Model.find();

    res.status(200).json({
        status: "success",
        user
    })
}


const productcategory = async (req,res) => {

    const data = await product_Model.find({}, {"category" : 1, "_id":0});

    res.status(200).json({
        status: "success",
        data
    });


}


const category = async (req,res) => {

    var id= req.params.id;

    const data= await product_Model.find({"category": id});

    res.status(200).json({
        status: "success",
        data
    })

}


const deletproduct = async (req,res) => {

    var id= req.params.id;

    await product_Model.deleteOne({"id": id});

    res.status(200).json({

        status: "success",
       
    })


}
const updateproduct = async (req,res) => {

    var id= req.params.id;

    await product_Model.updateOne({"id": id}, req.body);

    const data= await product_Model.find({"id": id});
    
    res.status(200).json({
        status: "success",
        data
    })



}




module.exports={

    enterproduct,
    allproducts,
    singleData, 
    searchproduct,
    limitskipproduct,
    productcategory,
    category,
    deletproduct,
    updateproduct

}
