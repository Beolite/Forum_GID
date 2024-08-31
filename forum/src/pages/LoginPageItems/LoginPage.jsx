import Navbar from '../navbar/Navbar'
import Background from '../assets/background.png'
import { Form } from "react-router-dom";
import Background2 from '../assets/background2.png'
import innerbg from '../assets/login-bg-inner.png'
import outerbg from '../assets/login-bg-outer.png'
import { useState } from 'react';

function LoginPage() {
    return(
        <>
        <Navbar/>
        <div style={{backgroundImage: `url(${outerbg})`}} className="overflow-x-hidden w-[100vw] h-[100vh] bg-gradient-to-b from-[#92dcc9] via-[#8cd4bc] to-[#85ccab]   mt-[75px] md:mt-[90px] overflow-hidden">
            
            <div style={{backgroundImage: `url(${innerbg})`}} className="flex bg-gradient-to-b from-[#20325e] via-[#264c6f] to-[#2b6a7d] sm:w-[600px] sm:h-[600px] w-[95%] h-[90%] my-[15px] mx-auto overflow-hidden justify-center items-center rounded-lg shadow-lg shadow-[#576264]">
                <div className='rounded-tr-[46px] rounded-bl-[46px] border-white border-2 w-[360px] h-[45%] align-middle justify-center overflow-hidden'>
                    <div className=' text-[#ede8f5] w-[80%] mx-auto align-middle justfiy-center text-center'><h1 className='mx-auto text-xl font-semibold my-[5px]'>Log In</h1></div>
                    <div className=' w-[80%] mt-[30px] mx-auto align-middle justfiy-center'>
                        <div className='mt-[6px]'>
                        <label className='text-[#ede8f5] font-semibold'>Username</label>
                        <input type="text" className='transition-transform hover:-translate-y-[2px] bg-[#ede8f5] hover:bg-[#92dcc9] placeholder-slate-600 mt-[5px] w-[100%] mt-[5px] w-[100%] rounded-r-full' placeholder='username'></input>
                        </div>

                        <div className='mt-[6px]'>
                        <label className='text-[#ede8f5] font-semibold'>Password</label>
                        <input type="password" className='transition-transform hover:-translate-y-[2px] bg-[#ede8f5] hover:bg-[#92dcc9] placeholder-slate-600 mt-[5px] w-[100%] rounded-r-full' placeholder='password'></input>
                        </div>

                        <div className='flex w-[100%] justify-between mt-[10px] '>
                            <button className='bg-[#ede8f5] hover:bg-[#92dcc9] transition-transform hover:-translate-y-1 p-[5px] w-[70px] shadow-md rounded-md'>Register</button>
                            <button className='bg-[#ede8f5] hover:bg-[#92dcc9] transition-transform hover:-translate-y-1 p-[5px] w-[70px] shadow-md rounded-md'>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage