import Navbar from '../navbar/Navbar'
import Background from '../assets/background.png'
import { Form } from "react-router-dom";
import Background2 from '../assets/background2.png'
import innerbg from '../assets/login-bg-inner.png'
import outerbg from '../assets/login-bg-outer.png'
import { useState } from 'react';
import bgpanduanpage from '../assets/bgpanduanpage.png'
import Sidebar from '../navbar/SideBar/Sidebar';
import Forum from './Forum';

function ForumPage() {
    const [openSidebar,setOpenSidebar] = useState(true);
    return(
        <div className='flex bg-[#8fd7b7] bg-opacity-25'>
            
            <Navbar/>
            <div className="w-12 h-12 ml-2 fixed" onClick={() =>{setOpenSidebar(!openSidebar)}}></div>
            <div className="flex" >
                <div className={`${!openSidebar? '-translate-x-[18vw] transition-transform' : 'transition-transform'}`} ><Sidebar /></div>
                <div className={`${!openSidebar? 'w-[18vw]' : 'w-[82vw] ml-[18vw]'}`}>
                    <div className="bg-inherit w-[100vw] h-[100vh] mt-12">
                        <Forum/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForumPage