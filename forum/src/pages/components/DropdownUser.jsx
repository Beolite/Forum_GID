
import { Link } from 'react-router-dom';
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    UserIcon,
    ChevronDownIcon,
    GlobeAltIcon,
    ChevronRightIcon,
    BookmarkIcon,
    MoonIcon,
    ChevronUpIcon,
    AdjustmentsHorizontalIcon,
    ArrowRightStartOnRectangleIcon,
  } from "@heroicons/react/24/outline";
import{
    UserCircleIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/solid";
import Buttons from './Buttons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../../features/authSlice.jsx";
import React, { useState, useEffect } from "react";

const postIcon = <ChevronUpIcon className='size-4 ml-3 my-auto'/>
const saveIcon = <BookmarkIcon className='size-4 ml-3 my-auto'/>
const themeIcon = <MoonIcon className='size-4 ml-3 my-auto'/>
const settingsIcon = <AdjustmentsHorizontalIcon className='size-4 ml-3 my-auto'/>
const logoutIcon = <ArrowRightStartOnRectangleIcon className='size-4 ml-3 my-auto'/>

const Login="../LoginPageItems/LoginPage.jsx"
function DropdownUser() {
  const [open,setOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
    };

  
    return (
      <div id="menuContainer" className='text-stone-100 rounded-lg fixed shadow-[0_1px_2px_#000] bg-[#1a3f4b] py-2 px-2 top-14 right-44'>
            <button id="user-section" className='border-b-2 text-left px-2 border-b-stone-100 border-opacity-20 w-[100%] h-[100px] hover:bg-black hover:bg-opacity-10'>
                <div className="flex">
                    <UserCircleIcon className='size-12'/>
                    <div className='text-left px-2'>
                        <p className='font-semibold'>{user.name}</p>
                        <p className='font-light'>@{user.username}</p>
                    </div>
                </div>
                <div className='my-2 flex'>
                    <p>Go to my account</p> <ChevronRightIcon className='size-7 ml-3'/>
                </div>
            </button>
            <div id="item-section" className='border-b-2 border-b-stone-100 border-opacity-20 w-[100%]'>
                <Buttons title="My Post" bicons={postIcon}></Buttons>
                <Buttons title="My Saved" bicons={saveIcon}></Buttons>
                <Buttons title="Night Mode" bicons={themeIcon}></Buttons>
            </div>
            <div id="setting-section" className='border-b-2 border-b-stone-100 border-opacity-20 w-[100%]'>
                <Buttons title="Settings" bicons={settingsIcon}></Buttons>
                <Buttons bclick={logout} title="Log Out" bicons={logoutIcon}></Buttons>
            </div>
      </div>
    )
  }
  
export default DropdownUser 