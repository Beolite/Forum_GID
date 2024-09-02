import { useState } from 'react';
import logo from "../assets/logoatas.png";
import icon from '../assets/icon.png';
import { Link } from "react-router-dom";


const gradient="bg-gradient-to-t from-[#214f5d] to-[#20415f]";

function Footer() {

  const [open,setOpen] = useState(false);
  return (
    <>
        <div className="w-[100vw] h-[150vh] md:h-[75vh] lg:h-[50vh] bg-gradient-to-b from-[#214f5d] to-[#264c6f]">
            <h1>Footer</h1>
            <div className=""></div>
        </div>
    </>
  )
}

export default Footer 