import { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Background from '../assets/background.png'
import Card from './Card'
import Cardwide from './Cardwide'
import Background2 from '../assets/background2.png'

import background1 from '../assets/bgforum.png'
import background2 from '../assets/bgpanduan.png'
import background3 from '../assets/bgedukasi.png'

import logo from '../assets/logosamudra.png'
import logo2 from '../assets/logosamudra2.png'
import Footer from '../Footer/Footer'

const paragraf1 = "Samudra adalah forum tempat siswa-siswi SMA/Sederajat untuk mengekspresikan dan membagikan kondisi kesehatan mental mereka dengan siswa-siswi lainnya.";

const forumDesc = "Diskusikan masalah kesehatan mental mu dengan orang lain di forum!";
const edukasiDesc = "Berbagai artikel dan video edukasi tentang kesehatan mental dapat kamu temukan di sini!";
const panduanDesc = "Di dalam sini terdapat panduan cara mengidentifikasi beberapa kelainan mental";


function HomePage() {

  return (
      <>
      <Navbar/>
      <div className='bg-slate-200 w-[100vw] lg:h-[100vh] lg:mt-12'>
        <div id="gambar" className="overflow-hidden aspect-w-6 aspect-h-9 bg-red-500 mt-[75px] lg:hidden lg:overflow-hidden">
          <img class='object-cover h-[100%] w-[100%]' src={Background}/>
        </div>

        <div id="homepage-contents" className='bg-[#d4f1f5] pb-5 w-[100%] lg:pb-0 overflow-hidden lg:hidden content-start'>
          <Card cardTitle="Forum" cardDesc={forumDesc} bg={background1}/>
          <Card cardTitle="Edukasi" cardDesc={edukasiDesc} bg={background2}/>
          <Card cardTitle="Panduan" cardDesc={panduanDesc} bg={background3}/>
        </div>

        <div id="gambarbesar" style={{backgroundImage:`url(${Background2})`}} className="align-bottom flex hidden mt-12 h-[100vh] w-[100vw] lg:block lg:overflow-hidden bg-cover bg-no-repeat bg-center">
          <div className=' flex h-64 w-[100%] justify-between'>
            <img className='ml-5 transform scale-75 hover:scale-100 transition-transform duration-500' src={logo2}></img>
            <div className='w-[70%] h-[100%] mr-12 text-xl font-semibold text-slate-700'>
            <h1 className='text-3xl my-8 font-bold hover:text-slate-950'>Samudra</h1>
            <p className='hover:text-[#2f5443]'>{paragraf1}</p>  
            </div>
            </div>
            <div className=' w-[95%] h-64 mx-auto mt-20 flex justify-between'>
              <Cardwide bg={background1} title="Forum" desc={forumDesc}/>
              <Cardwide bg={background2} title="Edukasi" desc={edukasiDesc}/>
              <Cardwide linkto="/panduan" bg={background3} title="Panduan" desc={panduanDesc}/>
            </div>
        </div>

        <Footer/>

      </div>
      </>
  )
}

export default HomePage 