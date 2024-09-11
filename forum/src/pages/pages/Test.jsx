import { Form } from "react-router-dom";

import innerbg from '../assets/login-bg-inner.png'
import outerbg from '../assets/login-bg-outer.png'
import { useState } from 'react';
import InputComponent from "../components/InputComponent";

import Navbar from '../components/Navbar'
import Layout from "./Layout";
import RegisterComponent from "../components/RegisterComponent";
import PostThread from "../components/PostThread";

function Test() {
    
    return(
        <>
        <Layout>
            <PostThread></PostThread>
        </Layout>
        </>
    )
}

export default Test