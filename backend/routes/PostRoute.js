import express from "express";
import {getPost,
        getPostById,
        createPost,
        deletePost
} from "../controllers/PostController.js"
import {verifyUser} from '../middleware/AuthUser.js'

const router = express.Router();

router.get('/post',verifyUser,getPost);
router.get('/post/:id',verifyUser,getPostById);
router.post('/post',verifyUser,createPost);
router.delete('/post/:id',verifyUser,deletePost);


export default router;