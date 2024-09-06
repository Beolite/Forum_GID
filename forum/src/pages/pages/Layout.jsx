import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import ForumComponent from "../components/Forum";
import { useState } from 'react';

function Layout({children}){
    const [openSidebar,setOpenSidebar] = useState(true);
    return(
        <div className='flex bg-[#8fd7b7] bg-opacity-25'>
            
            <Navbar/>
            <div className="w-12 h-12 ml-2 fixed" onClick={() =>{setOpenSidebar(!openSidebar)}}></div>
            <div className="flex" >
                <div className={`${!openSidebar? 'hidden lg:-translate-x-[13vw] transition-transform' : 'transition-transform'}`} ><Sidebar /></div>
                <div className={`${!openSidebar? 'w-[100vw] ' : 'lg:w-[87vw] lg:ml-[13vw] w-[100vw]'}`}>
                    <div className="bg-inherit w-[100%] mt-12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout