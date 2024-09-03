import { useState } from 'react';
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
    ArrowUpRightIcon,
  } from "@heroicons/react/24/outline";
import{
    UserCircleIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/solid";
const postIcon = <ChevronUpIcon className='size-4 ml-3 my-auto'/>
const saveIcon = <BookmarkIcon className='size-4 ml-3 my-auto'/>
const themeIcon = <MoonIcon className='size-4 ml-3 my-auto'/>
const settingsIcon = <AdjustmentsHorizontalIcon className='size-4 ml-3 my-auto'/>
const logoutIcon = <ArrowRightStartOnRectangleIcon className='size-4 ml-3 my-auto'/>
const arrow = <ArrowUpRightIcon className='size-4 ml-3 my-auto'/>

function Sidebar(){
    return(
        <div id="menuContainer" className='text-stone-100 fixed shadow-[0_1px_2px_#000] bg-[#1a3f4b] py-2 px-2 top-12 left-0 h-[100vh] w-[18vw] overflow-hidden transition-transform'>
            skibidi edge rizz
        </div>
    )
}
  
export default Sidebar