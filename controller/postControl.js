const comment_Model = require("../model/commentModel");
const posts_Model = require("../model/postModel");
// var jwt = require('jsonwebtoken');

const enterposts = async ( req, res ) => {

    const data = await posts_Model.create(req.body);


    res.status(200).json({
        status: "success",
        data
    })


}
const singlepost = async (req,res) => {


    const id = req.params.id;

    const data = await posts_Model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allposts = async (req,res) => {
    const user = await posts_Model.find();

    res.status(200).json({
        status: "success",
        user
    })
}


const deletposts = async (req,res) => {

    var id= req.params.id;

    await posts_Model.deleteOne({"id": id});

    res.status(200).json({

        status: "success",
       
    })


 }
const updateposts = async (req,res) => {

    var id= req.params.id;

    await posts_Model.updateOne({"id": id}, req.body);

    const data= await posts_Model.find({"id": id});
    
    res.status(200).json({
        status: "success",
        data
    })



}

const searchposts = async (req,res) => {

    var s_post= req.query

    var data = await posts_Model.find(s_post);

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
const limitskippost= async (req,res) => {

    const data= await posts_Model.find().limit(req.query.limit).skip(req.query.skip);

    res.status(200).json({
        status:"success",
        data
    })
}

const userIdpost= async (req,res) => {

    var userId= req.params.id;
    const data= await posts_Model.find({"userId" : userId});

    res.status(200).json({
        status:"success",
        data
    })



    
}

const usercomment= async (req,res) => {

    var userId= req.params.id;
    const data= await comment_Model.find({"postId" : userId});

    res.status(200).json({
        status:"success",
        data
    })


}

module.exports={

    enterposts,
    allposts,
    singlepost,
    deletposts,
    updateposts,
    searchposts,
    limitskippost,
    userIdpost,
    usercomment

}
