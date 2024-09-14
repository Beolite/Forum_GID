import Buttons from "./Buttons2"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function PostMobileComponent(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [msg, setMsg] = useState("");
    
    const savePost = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/post", {
            title: title,
            content: content,
          });
          
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
  
    return(
        <div className="lg-hidden bg-[#e3f5ed] w-[100%] h-[100%] pb-20">
            <div className="bg-slate-500 bg-opacity-40 w-[100%] h-36">

            </div>
            <div className="bg-slate-500 bg-opacity-60 w-[100%] h-16">

            </div>
            <form onSubmit={savePost}>
                <p className="">{msg}</p>
                <div className="mx-auto w-[95%]">
                    <div className="">
                        <div className="flex justify-between">
                            <div className=" ml-2 mt-4 mb-1 text-xl font-semibold">Title</div>
                            <div className=" ml-2 mt-4 mb-1 text-xl font-semibold">0/300</div>
                        </div>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="w-[100%] h-12 rounded-xl text-xl pl-1 mb-4 bg-black bg-opacity-10 border-black border-opacity-15 border-2">
                            
                        </input>
                    </div>
                    
                    <div className="">
                        <div className="flex justify-between">
                            <div className="ml-2 mt-4 mb-1 text-xl font-semibold">Content</div>
                            <div className=" ml-2 mt-4 mb-1 text-xl font-semibold">0/300</div>
                        </div>
                        
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} contentEditable="true"  className="w-[100%] overflow-scroll min-h-36 max-h-96 rounded-xl mb-4 bg-black bg-opacity-10 border-black border-opacity-15 border-2"/>
                    </div>
                </div>
                <div className="flex justify-end text-stone-100 mr-1">
                    <button className="mx-2 text-xl font-semibold bg-[#1a3f4b] rounded-lg p-2">Simpan Draf</button>
                    <button type="submit" className="hover:scale-105 transition-transform mx-2 text-xl font-semibold bg-[#1a3f4b] active:bg-[#235464] rounded-lg p-2">Post</button>
                </div>
            </form>


        </div>
    )
}
export default PostMobileComponent