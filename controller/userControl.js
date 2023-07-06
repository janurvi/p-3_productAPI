const carts_Model = require("../model/cartsModel");
const posts_Model = require("../model/postModel");
const login_Model = require("../model/userModel");
var jwt = require('jsonwebtoken');

const enterData = async ( req, res ) => {
    const select = await login_Model.find({"email":req.body.email});

    if(select.length == 0){
        const data = await login_Model.create(req.body);

        res.status(200).json({
            status: "success",
            data
        })
    }else{
        res.status(200).json({
            status: "your email is already declair",
        })
    } 
}

const userLogin = async ( req,res ) => {
    const data = await login_Model.find({"email": req.body.email});
    var token = jwt.sign({ id : req.body.id }, 'data');

    const email = data[0].email; 
    const id = data[0].id;
    const username = data[0].username;
    const firstName = data[0].firstName;
    const lastName = data[0].lastName;
    const gender = data[0].gender;
    const image = data[0].image;

    if(data.length == 1)
    {
        if(data[0].password == req.body.password)
        {
            res.status(200).json({
                id,
                username,
                email,
                firstName,
                lastName,
                gender,
                image,
                token
            })
        }else
        {
            res.status(200).json({
                status : "Check your Password"
            })
        }
    }else
    {
        res.status(200).json({
            status : "Check Your Email"
        })
    }
}

const singleData = async (req,res) => {
    const id = req.params.id;
    const data = await login_Model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}
const searchuser = async (req,res) => {

    var s_product= req.query

    var data = await login_Model.find(s_product);

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
const limitskiuser= async (req,res) => {

    const data= await login_Model.find().limit(req.query.limit).skip(req.query.skip);

    res.status(200).json({
        status:"success",
        data
    })
}


const allUsers = async (req,res) => {
    const user = await login_Model.find();

    res.status(200).json({
        status: "success",
        user
    })
}






const deletuser = async (req,res) => {

    var id= req.params.id;

    await login_Model.deleteOne({"id": id});

    res.status(200).json({

        status: "success",
       
    })


}

const todouser = async (req,res) => {

    var id= req.params.id;

    const data= await login_Model.findOne({"id": id});

    res.status(200).json({

        status: "success",
        data
       
    });


}
const updateuser = async (req,res) => {

    var id= req.params.id;

    await login_Model.updateOne({"id": id}, req.body);

    const data= await login_Model.findOne({"id": id});
    
    res.status(200).json({
        status: "success",
        data
    });



}
const userIdcart= async (req,res) => {

    var userId= req.params.id;

    const data= await carts_Model.find({"userId" : userId});

    res.status(200).json({
        status:"success",
        data
    })



    
}

const userposts= async (req,res) => {

    var userId= req.params.id;
    const data= await posts_Model.find({"userId" : userId});

    res.status(200).json({
        status:"success",
        data
    })


}





module.exports = {
    enterData,
    userLogin,
    allUsers,
    singleData,
    searchuser,
    limitskiuser,
    deletuser,
    updateuser,
    todouser,
    userIdcart,
    userposts

}