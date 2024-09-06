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
    HomeIcon,

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

function ListSidebar(props){
    return(
        <div className='hover:bg-black flex hover:bg-opacity-5 py-1 rounded-lg text-xl font-semibold'>{props.bicons} {props.title}</div>
    )
}
  
export default ListSidebar