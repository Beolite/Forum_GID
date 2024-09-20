

import innerbg from '../assets/login-bg-inner.png'
import outerbg from '../assets/login-bg-outer.png'
import InputComponent from '../components/InputComponent.jsx';

import Navbar from '../components/Navbar.jsx';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, LogOut, reset } from "../../features/authSlice.jsx"
import React, { useState, useEffect } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
      (state) => state.auth
    );
  
    useEffect(() => {
        dispatch(reset());
      }, [user, isSuccess, dispatch, navigate]);
  
    const Auth = async (e) => {
      e.preventDefault();
      dispatch(LoginUser({ email, password }));
      navigate(-1);
    };


    return(
        <>
        <Navbar/>
        <div style={{backgroundImage: `url(${outerbg})`}} className="overflow-x-hidden w-[100vw] h-[100vh] bg-gradient-to-b from-[#92dcc9] via-[#8cd4bc] to-[#85ccab] mt-12 overflow-hidden">
            
            <div style={{backgroundImage: `url(${innerbg})`}} className="flex bg-gradient-to-b from-[#20325e] via-[#264c6f] to-[#2b6a7d] sm:w-[600px] sm:h-[600px] w-[95%] h-[90%] my-[15px] mx-auto overflow-hidden justify-center items-center rounded-lg shadow-lg shadow-[#576264]">
                <div className='rounded-tr-[46px] rounded-bl-[46px] border-white border-2 w-[360px] py-8 align-middle justify-center overflow-hidden'>
                    <div className=' text-[#ede8f5] w-[80%] mx-auto align-middle justfiy-center text-center'><h1 className='mx-auto text-xl font-semibold my-[5px]'>Log In</h1></div>
                    <div className=' w-[80%] mt-[30px] mx-auto align-middle justfiy-center'>
                        <form onSubmit={Auth}>
                            {isError && <p className="text-center text-stone-100">{message}</p>}
                            <div className='mt-[6px]'>
                            <label className='text-[#ede8f5] font-semibold'>Email</label>
                            <InputComponent itype="text" pholder="username" pvalue={email} pchange={(e) => setEmail(e.target.value)}></InputComponent>
                            </div>

                            <div className='mt-[6px]'>
                            <label className='text-[#ede8f5] font-semibold'>Password</label>
                            <InputComponent itype="password" pholder="password" pvalue={password} pchange={(e) => setPassword(e.target.value)}></InputComponent>
                            </div>

                            <div className='flex w-[100%] justify-between mt-4 '>
                                <button className='bg-[#ede8f5] hover:bg-[#92dcc9] transition-transform hover:-translate-y-1 p-[5px] w-[70px] shadow-md rounded-md'>{isLoading ? "Loading..." : "Log Out"}</button>
                                <button type="submit" className='bg-[#ede8f5] hover:bg-[#92dcc9] transition-transform hover:-translate-y-1 p-[5px] w-[70px] shadow-md rounded-md'>{isLoading ? "Loading..." : "Login"}</button>
                            </div>
                        </form>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage