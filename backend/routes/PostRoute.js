import express from "express";
import {getPost,
        getPostById,
        createPost,
        deletePost
} from "../controllers/PostController.js"

const router = express.Router();

router.get('/post',getPost);
router.get('/post/:id',getPostById);
router.post('/post',createPost);
router.delete('/post/:id',deletePost);


export default router;