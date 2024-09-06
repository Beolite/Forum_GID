import innerbg from '../assets/login-bg-inner.png'
import outerbg from '../assets/login-bg-outer.png'
import InputComponent from './InputComponent'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterComponent(){
    const [username, setUsername] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("user");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
  
    const saveUser = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/users", {
          username: username,
          name: name,
          email: email,
          password: password,
          confPassword: confPassword,
          role: role,
        });
        navigate("/login");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
          }
        }
    }
    
    return(
        <div style={{backgroundImage: `url(${outerbg})`}} className="overflow-x-hidden w-[100vw] h-[100vh] bg-gradient-to-b from-[#92dcc9] via-[#8cd4bc] to-[#85ccab]   mt-12 overflow-hidden">
            
            <div style={{backgroundImage: `url(${innerbg})`}} className="flex bg-gradient-to-b from-[#20325e] via-[#264c6f] to-[#2b6a7d] sm:w-[600px] sm:h-[600px] w-[95%] h-[90%] my-[15px] bg-no-repeat bg-cover mx-auto overflow-hidden justify-center items-center rounded-lg shadow-lg shadow-[#576264]">
                <div className='rounded-tr-[46px] rounded-bl-[46px] border-white border-2 w-[360px] py-4 align-middle justify-center overflow-hidden'>
                    <div className=' text-[#ede8f5] w-[80%] mx-auto align-middle justfiy-center text-center'><h1 className='mx-auto text-xl font-semibold my-[5px]'>Sign In</h1></div>
                    <div className=' w-[80%] mt-[10px] mx-auto align-middle justfiy-center'>
                        <form onSubmit={saveUser}>
                          <p>{msg}</p>
                        <div className='mt-[6px]'>
                        <label className='text-[#ede8f5] font-semibold'>Username</label>
                        <InputComponent itype="text" pholder="username" pvalue={username} pchange={(e) => setUsername(e.target.value)}></InputComponent>
                        </div>

                        <div className='mt-[6px]'>
                        <label className='text-[#ede8f5] font-semibold' >Name</label>
                        <InputComponent itype="text" pholder="name" pvalue={name} pchange={(e) => setName(e.target.value)}></InputComponent>
                        </div>

                        <div className='mt-[6px]'>
                        <label className='text-[#ede8f5] font-semibold'>Email</label>
                        <InputComponent itype="email" pholder="email" pvalue={email} pchange={(e) => setEmail(e.target.value)}></InputComponent>
                        </div>

                        <div className='mt-[6px]'>
                        <label className='text-[#ede8f5] font-semibold'>Password</label>
                        <InputComponent itype="password" pholder="password" pvalue={password} pchange={(e) => setPassword(e.target.value)}></InputComponent>
                        </div>

                        <div className='mt-[6px]'>
                        <label className='text-[#ede8f5] font-semibold'>Confirm Password</label>
                        <InputComponent itype="password" pholder="confirm password" pvalue={confPassword} pchange={(e) => setConfPassword(e.target.value)}></InputComponent>
                        </div>

                        <div className='flex w-[100%] justify-between mt-[20px] '>
                            <button className='bg-[#ede8f5] hover:bg-[#92dcc9] transition-transform hover:-translate-y-1 p-[5px] w-[70px] shadow-md rounded-md'>Log In</button>
                            <button type="submit" className='bg-[#ede8f5] hover:bg-[#92dcc9] transition-transform hover:-translate-y-1 p-[5px] w-[70px] shadow-md rounded-md'>Register</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterComponent