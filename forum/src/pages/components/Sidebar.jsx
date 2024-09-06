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

import ListSidebar from './ListSidebar';

function Sidebar(){
    return(
        <div id="menuContainer" className='text-[#374f52] fixed py-2 px-2 top-12 left-0 h-[100vh] w-[13vw] transition-transform hidden lg:grid'>
            <div className='pb-2'>
                <ListSidebar bicons={forumIcon} title="Forum"></ListSidebar>
                <ListSidebar bicons={ahliIcon} title="Tanya Ahli"></ListSidebar>
                <ListSidebar bicons={komunIcon} title="Komunitas"></ListSidebar>
                <ListSidebar bicons={userIcon} title="Pengguna"></ListSidebar>
            </div>
            <div className='my-2 border-b-2 pb-2 border-b-black border-opacity-10'>
                <button className='bg-[#1a3f4b] hover:bg-[#132e37] hover:scale-105 transition-transform text-xl p-2 mx-4 rounded-lg text-stone-100'>Tentang Kami</button>
            </div>
            <div className="ml-2">
                <div className='text-xl font-bold mb-3'>Jelajahi Topik</div>
                <div className='mx-1'>
                <ListSidebar title="Topik 1"/>
                <ListSidebar title="Topik 2"/>
                <ListSidebar title="Topik 3"/>
                <ListSidebar title="Topik 4"/>
                <ListSidebar title="Topik 5"/>
                <ListSidebar title="Topik 6"/>
                <ListSidebar title="Topik 7"/>
                <ListSidebar title="Topik 8"/>
                <ListSidebar title="Topik 9"/>
                </div>
            </div>
        </div>
    )
}
  
export default Sidebar