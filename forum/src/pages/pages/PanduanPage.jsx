
import Navbar from '../components/Navbar'
import Background from '../assets/background.png'
import { Form } from "react-router-dom";
import Background2 from '../assets/background2.png'
import innerbg from '../assets/login-bg-inner.png'
import outerbg from '../assets/login-bg-outer.png'
import { useState } from 'react';
import desc from '../components/desc.json';
import bgpanduanpage from '../assets/bgpanduanpage.png'
import Layout from './Layout';
import PanduanComponent from '../components/PanduanComponent';

function PanduanPage() {
    return(
        <Layout>
            <PanduanComponent></PanduanComponent>
        </Layout>
    )
}

export default PanduanPage