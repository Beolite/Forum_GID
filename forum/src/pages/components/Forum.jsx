import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, LogOut, reset } from "../../features/authSlice.jsx"
import React, { useState, useEffect } from "react";
import ForumComponentPost from "./ForumComponentPost.jsx";

function ForumComponent(){

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
      };

    return(
        <div className="px-2 w-[100%] lg:w-[60%]">
          <div className=" w-[100%] h-16 mt-4 lg:mt-2">
            <div className="flex mb-4"><p className="my-auto text-3xl mx-2 text-[#1a3f4b] font-medium text-2xl ">Samudra</p></div>
            <div className="flex left-0 text-[#1a3f4b]">
                <button className="bg-[#1a3f4b] text-stone-100 rounded-lg px-4 py-1 text-xl hover:scale-105 transition-transform mr-4">Tanya</button>
                <div className="hidden lg:flex">
                    <button className="border-[#1a3f4b] border-solid border-2 rounded-lg px-4 text-xl hover:scale-105 transition-transform mx-4">Top</button>
                    <button className="border-[#1a3f4b] border-solid border-2 rounded-lg px-4  text-xl hover:scale-105 transition-transform mx-4">New</button>
                    <button className="border-[#1a3f4b] border-solid border-2 rounded-lg px-4 text-xl hover:scale-105 transition-transform mx-4">For You</button>
                </div>
                <button className="border-[#1a3f4b] lg:hidden border-solid border-2 rounded-lg px-4 text-xl hover:scale-105 transition-transform mx-4">Filter</button>
                <button className="border-[#1a3f4b] lg:hidden border-solid border-2 rounded-lg px-4 text-xl hover:scale-105 transition-transform mx-4">Topik</button>
            </div>
          </div>  
          <ForumComponentPost/>
          <ForumComponentPost/>
          <ForumComponentPost/>
          <ForumComponentPost/>

        </div>
    )
}

export default ForumComponent