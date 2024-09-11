import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getPost = async(req, res) => {
    try {
        let response;
        response = await Post.findAll({
            attributes:['uuid','title','content'],
            include:[{
                model: User,
                attributes:['name','email']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPostById = async(req, res) => {
    try {
        const response = await Post.findOne({
            attributes:['uuid','title','content'],
            include:[{
                model: User,
                attributes:['name','email']
            }],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createPost = async(req, res) => {
    const {title, content} = req.body;
    try {
        await Post.create({
            title: title,
            content: content,
            userId: req.userId
        });
        res.status(201).json({msg: "Thread Posted Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deletePost = async(req, res) => {
    try {
        const post = await Post.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!post) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {name, price} = req.body;
        if(req.role === "admin"){
            await Post.destroy({
                where:{
                    id: post.id
                }
            });
        }else{
            if(req.userId !== post.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Post.destroy({
                where:{
                    [Op.and]:[{id: post.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Post deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}