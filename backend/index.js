import express from "express";
import cors from "cors";
import UserRoute from './routes/UserRoute.js';
import PostRoute from './routes/PostRoute.js'
import session  from 'express-session';
import dotenv from 'dotenv';
import db from "./config/database.js";
dotenv.config();

const app = express();

(async()=>{
    await db.sync();
})();

app.use(session({
    secret:process.env.SESS_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:'auto',

    }
}))
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}));
app.use(express.json());
app.use(UserRoute);
app.use(PostRoute)

app.listen(process.env.APP_PORT,() => console.log('Server running correctly...'));