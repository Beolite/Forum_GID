import Navbar from '../navbar/Navbar'
import Background from '../assets/background.png'
import { Form } from "react-router-dom";
import Background2 from '../assets/background2.png'
import innerbg from '../assets/login-bg-inner.png'
import outerbg from '../assets/login-bg-outer.png'
import { useState } from 'react';
import desc from './desc/desc.json';
import bgpanduanpage from '../assets/bgpanduanpage.png'

function PanduanPage() {
    return(
        <>
        <Navbar/>
        <div style={{backgroundImage: `url(${bgpanduanpage})`}} className="bg-center bg-cover bg-no-repeat w-[100vw] pb-10 mt-[75px] md:mt-[90px] overflow-hidden w-">
            <div className='w-[90%] mx-auto'>
                <h1 className='mx-auto my-4 text-3xl font-bold text-[#374f52]'>Panduan</h1>
                <p className='text-justify'>{desc.maindesc1}</p>
                <p className='text-justify'>{desc.maindesc2}</p>
                <p className='text-justify'>{desc.maindesc3}</p>
                
                <h1 className='mx-auto mt-20 mb-4 text-3xl font-bold text-[#374f52]'>Struktur Forum</h1>
                <ol>
                    <li className=' my-2 text-justify'>- {desc.kategori}</li>
                    <li className=' my-2 text-justify'>- {desc.topik}</li>
                    <li className='my-2 text-justify'>- {desc.pencarian}</li>
                </ol>

                <h1 className='mx-auto mt-20 mb-4 text-3xl font-bold text-[#374f52]'>Etika & Peraturan</h1>
                <ol>
                    <h2 className='ml-3 font-bold text-[#374f52]'>1. Saling Menghormati dan Menggunakan Bahasa yang Pantas</h2>
                    <li className='mx-3 mb-3 text-justify'>{desc.etika1}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>2. Privasi</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.etika2}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>3. Tidak Mendiagnosa</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.etika3}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>4. Larangan membahas SARA dan Politik</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.etika4}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>5. Larangan Untuk Spam</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.etika5}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>6. Larangan Mengenai Obat Tanpa Pihak Profesional</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.etika6}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>7. Larangan Diskusi Topik Ilegal</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.etika7}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>8. Laporkan Konten Tak Pantas</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.etika8}</li>
                </ol>

                <h1 className='mx-auto mt-20 mb-4 text-3xl font-bold text-[#374f52]'>Fitur Pendukung</h1>
                <ol>
                    <h2 className='ml-3 font-bold text-[#374f52]'>1. Anonimitas</h2>
                    <li className='mx-3 mb-3 text-justify'>{desc.fitur1}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>2. Moderasi</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.fitur2}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>3. Materi Edukasi</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.fitur3}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>4. Grup Diskusi Privat</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.fitur4}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>5. Polling dan Survey</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.fitur5}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>6. Jurnal Pribadi</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.fitur6}</li>

                    <h2 className='ml-3 font-bold text-[#374f52]'>7. Fitur Pengingat</h2>
                    <li className='mx-3 mb-3 text-justify'> {desc.fitur7}</li>
                </ol>

                
            </div>
        </div>
        </>
    )
}

export default PanduanPage