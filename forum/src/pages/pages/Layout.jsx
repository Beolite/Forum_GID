import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import ForumComponent from "../components/Forum";
import Footer from "../components/Footer";
import { useState } from 'react';

function Layout({children}){
    const [openSidebar,setOpenSidebar] = useState(true);
    return(
        <div className='grid bg-[#8fd7b7] min-h-[100vh] bg-opacity-25 overflow-hidden'>
            
            <Navbar/>
            <div className="w-12 h-12 ml-2 fixed" onClick={() =>{setOpenSidebar(!openSidebar)}}></div>
            <div className="flex" >
                <div className={`${!openSidebar? 'hidden lg:grid lg:-translate-x-[13vw] transition-transform ease-in-out' : 'transition-transform ease-in-out'}`} ><Sidebar sidebartext="text-[#374f52]"/></div>
                <div className={`${!openSidebar? 'w-[100vw] ' : 'lg:w-[87vw] lg:ml-[13vw] w-[100vw]'}`}>
                    <div className="bg-inherit w-[100%] mt-12">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Layout