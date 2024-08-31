import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login="../LoginPageItems/LoginPage.jsx"
function Dropdown() {
  const [open,setOpen] = useState(false);
    return (
      <div id="menuContainer" className='text-[#ede8f5] fixed shadow-[0_1px_2px_#000] rounded-br-[25px] rounded-tl-[25px] bg-[#112931] w-[150px] py-[8px] px-[12px] top-[65px] right-[10px] overflow-visible'>
            <ul>
              <li className='py-[5px]'><a>Pengaturan</a></li>
              <li className='py-[5px]'><a>Forum</a></li>
              <li className='py-[5px]'><a>Edukasi</a></li>
              <li className='py-[5px]'><a>Panduan</a></li>
              <li className='py-[5px]'><a>Tentang Kami</a></li>
              <hr></hr>
              <li className='py-[5px]'><Link to="/login">Akun Saya</Link></li>
              <li className='py-[5px]'><a>Log Out</a></li>
            </ul>
      </div>
    )
  }
  
export default Dropdown 