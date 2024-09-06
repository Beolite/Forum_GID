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
import Buttons2 from './Buttons2';
import needmoney from '../assets/needmoney.png'
const postIcon = <ChevronUpIcon className='size-4 ml-3 my-auto'/>
const saveIcon = <BookmarkIcon className='size-4 ml-3 my-auto'/>
const themeIcon = <MoonIcon className='size-4 ml-3 my-auto'/>
const settingsIcon = <AdjustmentsHorizontalIcon className='size-4 ml-3 my-auto'/>
const logoutIcon = <ArrowRightStartOnRectangleIcon className='size-4 ml-3 my-auto'/>
const arrow = <ArrowUpRightIcon className='size-4 ml-3 my-auto'/>

const Login="../LoginPageItems/LoginPage.jsx"
function DropdownBantuKami() {
  const [openBantukami,setOpenBantukami] = useState(false);
    return (
      <div id="menuContainer" className='text-stone-100 rounded-lg fixed shadow-[0_1px_2px_#000] bg-[#1a3f4b] py-2 px-2 top-14 right-96'>
            <img src={needmoney} className='size-48'></img>
            <div id="item-section" className='border-b-2 border-b-stone-100 border-opacity-20 w-[100%]'>
                <Buttons2 title="jadi sponsor kami" bicons={arrow}></Buttons2>
                <Buttons2 title="Jadi donatur kami" bicons={arrow}></Buttons2>
            </div>
      </div>
    )
  }
  
export default DropdownBantuKami