import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getPost = async(req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes:['uuid','title','content'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Product.findAll({
                attributes:['uuid','title','content'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPostById = async(req, res) => {
    
}

export const createPost = async(req, res) => {
    
}

export const deletePost = async(req, res) => {
    
}