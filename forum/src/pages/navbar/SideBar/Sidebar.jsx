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
    ChatBubbleLeftRightIcon,
    UserGroupIcon,
    ChatBubbleLeftEllipsisIcon,


  } from "@heroicons/react/24/outline";
import{
    UserCircleIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/solid";
const forumIcon = <ChatBubbleLeftRightIcon className='size-8 mx-3 my-auto'/>
const ahliIcon = <ChatBubbleLeftEllipsisIcon className='size-8 mx-3 my-auto'/>
const komunIcon = <UserGroupIcon className='size-8 mx-3 my-auto'/>
const userIcon = <UserGroupIcon className='size-8 mx-3 my-auto'/>

import List from './List';

function Sidebar(){
    return(
        <div id="menuContainer" className='text-[#374f52] fixed bg-transparent py-2 px-2 top-12 left-0 h-[100vh] w-[15vw] transition-transform'>
            <div className='pb-2'>
                <List bicons={forumIcon} title="Forum"></List>
                <List bicons={ahliIcon} title="Tanya Ahli"></List>
                <List bicons={komunIcon} title="Komunitas"></List>
                <List bicons={userIcon} title="Pengguna"></List>
            </div>
            <div className='my-2 border-b-2 pb-2 border-b-black border-opacity-10'>
                <button className='bg-[#1a3f4b] hover:bg-[#132e37] hover:scale-105 transition-transform text-xl p-2 mx-4 rounded-lg text-stone-100'>Tentang Kami</button>
            </div>
            <div className="ml-2">
                <div className='text-xl'>Jelajahi Topik</div>
            </div>
        </div>
    )
}
  
export default Sidebar