import Dropdown from "./Dropdown";
import { useState } from 'react';
import logo from "../assets/logoatas.png";
import icon from '../assets/icon.png';
import Iconlarge from "../Iconlarge";
import { Link } from "react-router-dom";


const gradient="bg-gradient-to-t from-[#214f5d] to-[#20415f]";

function NavbarOld() {

  const [open,setOpen] = useState(false);
  return (
    <nav id="header" className="overflow-x-hidden bg-gradient-to-b from-[#214f5d] to-[#264c6f] md:h-[90px] h-[75px] top-0 w-screen flex justify-between fixed overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">

        <div id="forum-title" className="text-[#ede8f5] w-[25%] md:w-[15%] my-auto ">
        <img className='max-w-[100px] md:max-w-[200px]' src={logo}></img> 
        </div>

        
        <div id="header-settings" className="h-[100%] w-[35%] sm:w-[0] md:w-[15%] flex justify-around ">
          <Link to="/login" className="sm:hidden my-auto mx-[10px] bg-[#183a45] active:bg-[#0f172a] active:-translate-y-1 transition-transform rounded-[10%] px-[12px] shadow-md font-semibold text-[#ede8f5]">log in</Link>
          <div className="sm:hidden my-auto mx-[10px]">
            <div id="menuTrigger" className="active:-translate-y-1 transition-transform" onClick={() =>{setOpen(!open)}}>
              <img src={icon} width='25px'></img>
            </div>

            <div className={`${open? 'transition-opacity opacity-0' : 'transition-opacity opacity-100 '}`} ><Dropdown/></div>
          </div>
        </div>  
        <Iconlarge/>    

    </nav>
  )
}

export default NavbarOld