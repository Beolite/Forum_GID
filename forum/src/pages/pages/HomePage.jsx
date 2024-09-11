import { useState } from 'react'
import Navbar from '../components/Navbar'
import Background from '../assets/background.png'
import Card from '../components/Card'
import Cardwide from '../components/Cardwide'
import Background2 from '../assets/background2.png'
import Sidebar from '../components/Sidebar';
import HomepageComponent from '../components/HomepageComponent'

import background1 from '../assets/bgforum.png'
import background2 from '../assets/bgpanduan.png'
import background3 from '../assets/bgedukasi.png'

import logo2 from '../assets/logosamudra2.png'
import Footer from '../components/Footer'
import Layout from './Layout'
import LayoutHome from './LayoutHome'

const paragraf1 = "Samudra adalah forum tempat siswa-siswi SMA/Sederajat untuk mengekspresikan dan membagikan kondisi kesehatan mental mereka dengan siswa-siswi lainnya.";

const forumDesc = "Diskusikan masalah kesehatan mental mu dengan orang lain di forum!";
const edukasiDesc = "Berbagai artikel dan video edukasi tentang kesehatan mental dapat kamu temukan di sini!";
const panduanDesc = "Di dalam sini terdapat panduan cara mengidentifikasi beberapa kelainan mental";


function HomePage() {
  
  return (
      <>
      <LayoutHome bgsidebar="bg-white">
        <HomepageComponent></HomepageComponent>
      </LayoutHome>
      </>
  )
}

export default HomePage 