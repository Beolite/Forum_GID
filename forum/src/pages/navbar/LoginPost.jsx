import Dropdown from "./trash/Dropdown";
import { useState } from 'react';
import logo from "../assets/logoatas.png";
import icon from '../assets/icon.png';
import { Link } from "react-router-dom";
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
import DropdownUser from "./DropdownUser";
import DropdownBantukami from "./DropDownBantuKami";


function LoginPost(){
    const [openUser,setOpenUser] = useState(false);
    const [openBantukami,setOpenBantukami] = useState(false);
    return(
        <div className="my-auto mr-4 hidden lg:flex">
            <div id="dukung-kami" className="rounded-lg hover:bg-black hover:bg-opacity-10 w-40 h-10 my-auto mx-4 flex align-middle text-stone-100 justify-center cursor-grab" onClick={() =>{setOpenBantukami(!openBantukami)}} >
                <p className="text-xl my-auto ">Dukung Kami</p>
                <ChevronDownIcon className="size-4 mt-4 ml-2" />
            </div>
            <div className={`${!openBantukami? 'transition-opacity opacity-0' : 'transition-opacity opacity-100 '}`} ><DropdownBantukami/> </div>

            <div id="account" className="rounded-lg px-1 text-stone-100 flex justify-center align-middle w-28 h-10 my-auto ml-4 hover:bg-black hover:bg-opacity-10 cursor-grab" onClick={() =>{setOpenUser(!openUser)}} >
                <p className="text-xl my-auto ">User</p>
                <UserCircleIcon className="ml-4 mt-1.5 size-8"/>
                <ChevronDownIcon className="size-4 mt-4 ml-2" />
            </div>
            <div className={`${!openUser? 'transition-opacity opacity-0' : 'transition-opacity opacity-100 '}`} ><DropdownUser/></div>
            
            <div id="bahasa" className="text-stone-100 w-10 h-10 my-auto ml-4 hover:bg-black hover:bg-opacity-10 pl-1 rounded-lg cursor-grab">
                <GlobeAltIcon className="size-8 mt-1.5"/>
            </div>
            <button id="post" className="bg-stone-100 hover:bg-[#8fd7b7] text-gray-600 w-28 h-10 my-auto ml-4 rounded-full flex justify-center align-middle cursor-grab">
                <p className="text-2xl font-semibold my-auto">Post</p>
                <PlusCircleIcon className="mt-1.5 size-8 ml-2"/>
            </button>
        </div>
    )
}
export default LoginPost