import Dropdown from "./trash/Dropdown";
import { useState } from 'react';
import logo from "../assets/logoatas2.png";
import icon from '../assets/icon.png';
import Iconlarge from "./trash/Iconlarge";
import { Link } from "react-router-dom";
import LoginPost from "./LoginPost";
import React, { Component } from 'react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./SideBar/Sidebar";




const gradient="bg-gradient-to-t from-[#214f5d] to-[#20415f]";

function Navbar() {

  const [openSidebar,setOpenSidebar] = useState(true);
  return (
    <>
    <div id="header" className="overflow-x-hidden bg-gradient-to-b from-[#214f5d] to-[#264c6f] h-12 top-0 w-screen flex align-middle justify-between fixed overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        
        {/* setting,logo,and name */}
        <div id="logo-title-container" className="my-auto align-middle flex cursor-grab">
            <div id="samudra-settings" className="flex align-middle w-10 h-10 my-auto ml-6" onClick={() =>{setOpenSidebar(!openSidebar)}}>
              <Bars3Icon className="text-stone-100 my-auto size-8"/>
            </div>
            

            <div id="samudra-logo" className="w-10 h-10 my-auto"><img src={logo}></img></div>
            <p className="my-auto text-xl mx-2 text-[#8fd7b7] font-medium text-2xl ">Samudra</p>
        </div>

        {/* search */}
        <div id="search" className="bg-stone-100 overflow-hidden w-64 lg:w-[500px] h-9 my-auto align-middle hidden lg:flex justify-between rounded-lg">
          <input type="text" className="text-xl font-light my-auto text-gray-600 mx-2 bg-stone-100 h-[100%] outline-none pr-48 border-b-zinc-100" placeholder="Search Something..."></input>
          <div className="hover:bg-black hover:bg-opacity-10 flex align-middle pl-4">
            <MagnifyingGlassIcon className="text-gray-600 mr-4 my-auto size-8"/>
          </div>
        </div>

        {/* login and post */}
        <LoginPost/>


    </div>
    </>
  )
}

export default Navbar 