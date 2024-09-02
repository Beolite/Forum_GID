import Dropdown from "./Dropdown"
import { Link } from 'react-router-dom';

function Iconlarge() {

    return (
        <div className="text-white items-center hidden sm:flex sm:w-[100%] w-[50%] h-[50%] justify-end mx-[20px] font-semibold my-auto">

                <Link className="hover:text-[#92dcc9] mx-[10px] lg:mx-[20px] hover:transform hover:scale-125 transition-transform">Pengaturan</Link>
                <Link to='/forum' className="hover:text-[#92dcc9] mx-[10px] lg:mx-[20px] hover:transform hover:scale-125 transition-transform">Forum</Link>
                <Link className="hover:text-[#92dcc9] mx-[10px] lg:mx-[20px] hover:transform hover:scale-125 transition-transform">Edukasi</Link>
                <Link to='/panduan' className="hover:text-[#92dcc9] mx-[10px] lg:mx-[20px] hover:transform hover:scale-125 transition-transform">Panduan</Link>
                <Link className="hover:text-[#92dcc9] mx-[10px] lg:mx-[20px] hover:transform hover:scale-125 transition-transform ">Tentang Kami</Link>
                <Link to="/login" className="hover:transform hover:scale-125 transition-transform my-auto mx-[10px] hover:text-[#92dcc9] bg-[#183a45] rounded-[10%] px-[12px] md:px-[15px] md:py-[5px] lg:text-xl shadow-md font-semibold text-[#ede8f5] text-nowrap align-middle">log in</Link>
        </div>
    
    )
}

export default Iconlarge