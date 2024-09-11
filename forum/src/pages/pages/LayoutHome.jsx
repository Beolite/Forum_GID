import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer";
import ForumComponent from "../components/Forum";
import { useState } from 'react';

function LayoutHome({children}){
    const [openSidebar,setOpenSidebar] = useState(true);
    return(
        <div className='grid bg-gradient-to-b from-[#264c6f] to-[#214f5d] bg-[#8fd7b7] bg-opacity-25 overflow-hidden'>
            
            <Navbar/>
            <div className="w-12 h-12 ml-2 fixed" onClick={() =>{setOpenSidebar(!openSidebar)}}></div>
            <div className="flex" >
                <div className={`${openSidebar? 'transition-transform ease-in-out' : 'hidden lg:grid lg:-translate-x-[13vw] transition-transform duration-300 ease-in-out'}`} ><Sidebar sidebarbg="bg-gradient-to-b from-[#264c6f] to-[#214f5d] border-r-8 border-black border-opacity-5 " sidebartext="text-gray-200"/></div>
                <div className={`${openSidebar? 'lg:w-[87vw] lg:ml-[13vw] w-[100vw]' : 'w-[100vw]'}`}>
                    <div className="bg-gradient-to-b from-[#264c6f] to-[#214f5d] w-[100%] mt-12">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default LayoutHome