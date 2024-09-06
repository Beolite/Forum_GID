
import { useState } from 'react';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    UserIcon,
    ChevronDownIcon,
    GlobeAltIcon,
  } from "@heroicons/react/24/outline";
import{
    UserCircleIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/solid";
import DropdownUser from './DropdownUser';
import { useSelector } from "react-redux";




const gradient="bg-gradient-to-t from-[#214f5d] to-[#20415f]";

function NavbarHomepage() {

    const [openUser,setOpenUser] = useState(false);
    const [openBantukami,setOpenBantukami] = useState(false);
    const { user } = useSelector((state) => state.auth);
  return (
    <>
    <div id="header" className="overflow-x-hidden bg-gradient-to-b from-[#214f5d] to-[#264c6f] h-12 top-0 w-screen flex align-middle justify-between fixed overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        
        {/* setting,logo,and name */}
        <div id="logo-title-container" className="my-auto align-middle flex cursor-grab pl-2">
            <div id="samudra-logo" className="w-10 h-10 my-auto"><img></img></div>
            <p className="my-auto text-xl mx-2 text-[#8fd7b7] font-medium text-2xl ">Samudra</p>
        </div>


        {/* login and post */}
        <div className="my-auto mr-4 hidden lg:flex">
            <div id="dukung-kami" className="rounded-lg hover:bg-black hover:bg-opacity-10 w-40 h-10 my-auto mx-4 flex align-middle text-stone-100 justify-center cursor-grab" onClick={() =>{setOpenBantukami(!openBantukami)}} >
                <p className="text-xl my-auto ">Dukung Kami</p>
                <ChevronDownIcon className="size-4 mt-4 ml-2" />
            </div>
            <div className={`${!openBantukami? 'transition-opacity opacity-0' : 'transition-opacity opacity-100 '}`} ><DropdownBantukami/> </div>

            <div id="account" className="rounded-lg px-1 text-stone-100 flex justify-center align-middle w-28 h-10 my-auto ml-4 hover:bg-black hover:bg-opacity-10 cursor-grab" onClick={() =>{setOpenUser(!openUser)}} >
                <p className="text-xl my-auto ">
                {user ? {username} : "Login"}
                </p>
                <UserCircleIcon className="ml-4 mt-1.5 size-8"/>
                <ChevronDownIcon className="size-4 mt-4 ml-2" />
            </div>
            <div className={`${!openUser? 'transition-opacity opacity-0' : 'transition-opacity opacity-100 '}`} ><DropdownUser/></div>
            
            <div id="bahasa" className="text-stone-100 w-10 h-10 my-auto ml-4 hover:bg-black hover:bg-opacity-10 pl-1 rounded-lg cursor-grab">
                <GlobeAltIcon className="size-8 mt-1.5"/>
            </div>
        </div>

    </div>
    </>
  )
}

export default NavbarHomepage