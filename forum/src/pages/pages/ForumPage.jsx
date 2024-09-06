import Navbar from '../components/Navbar'
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ForumComponent from '../components/Forum';
import Layout from './Layout';

function ForumPage() {
    
    return(
        <Layout>
            <ForumComponent/>
        </Layout>
    )
}

export default ForumPage