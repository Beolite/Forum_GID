import ForumComponentPostButton from "./ForumComponentPostButton"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { Link,useParams,useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
import ThreadPostReply from "./ThreadPostReply";
import ThreadReplies from "./ThreadReplies";

function ThreadComponent(){
    // const [post,setPost] = useState([])
    // useEffect(() => {
    //     getPost();
    //   }, []);

    // const getPost = async () => {
    //     const response = await axios.get(`http://localhost:5000/post/${id}`);
    //     setPost(response.data);
    //   };

    

    const [title,setTitle] = useState([])
    const [content,setContent] = useState([])
    const [msg, setMsg] = useState("");
    const { id } = useParams();

      useEffect(() => {
        const getPostById = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/post/${id}`
            );
            setTitle(response.data.title);
            setContent(response.data.content);
          } catch (error) {
            if (error.response) {
              setMsg(error.response.data.msg);
            }
          }
        };
        getPostById();
      }, [id]);
  
    // key={post.uuid}
    return(
        <div className="w-[97%] lg:w-[80%] ml-4 pt-4 text-justify text-[#1a3f4b]">
          <div className="w-[100%] min-h-[10vh] pr-4  ">
              <div className="flex justify-between">
                  <div className="">
                      <div className="font-bold text-2xl">{title}</div>
                      
                  </div>
                  <div className="">
                      <div className=""></div>
                  </div>
              </div>
              <div className="mt-2">
                  {content}
                  
              </div>
          </div>
          <div className="border-t-2 border-t-black border-opacity-40 mt-8">
            <ThreadPostReply/>
            <ThreadReplies/>
          </div>
        </div>
    )
}

export default ThreadComponent