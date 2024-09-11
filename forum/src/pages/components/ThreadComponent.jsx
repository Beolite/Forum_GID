import ForumComponentPostButton from "./ForumComponentPostButton"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ThreadComponent(){
    const [post,setPost] = useState([])
    const id = "f2fa552f-d4b5-4a13-847a-0f53788b77d1"

    useEffect(() => {
        getPost();
      }, []);

    const getPost = async () => {
        const response = await axios.get(`http://localhost:5000/post/${id}`);
        setPost(response.data);
      };
  
    return(
        <div className="w-[100vw] h-[100vh] bg-slate-500">
            {post.title}
        </div>
    )
}

export default ThreadComponent