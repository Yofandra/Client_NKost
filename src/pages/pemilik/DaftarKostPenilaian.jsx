import react, { useState } from 'react';
import SidebarPemilik from '../../components/SidebarPemilik';
import NavbarPemilik from '../../components/NavbarPemilik';
import gambarKamar from '../../assets/images/kamar.webp';
import { Link } from 'react-router-dom';


const DaftarKostPenilaian = () => {
    return(
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik/>
                <div class="w-full h-screen overflow-x-hidden border-t flex flex-col ">
                <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6 font-bold">Daftar Kost</h1>
                    <div className='flex flex-wrap'>
                        <div className='flex flex-col justify-between shadow-2xl bg-white w-80 h-96 rounded-xl mb-20 mx-10 p-4'>
                            <img className='w-fit h-fit rounded-xl' src={gambarKamar} alt="" />
                            <h1 className='text-lg font-bold'>Kost Rejeki</h1>
                            <p className='truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi vitae fugit beatae, eum harum voluptatem sit id fugiat delectus? Quod recusandae quo molestias sint corporis porro voluptate voluptas aspernatur!</p>
                            <Link to="/pemilik/penilaian">
                                <div className="flex justify-center">
                                    <button className="bg-sidebar font-bold text-center text-white">Lihat Penilaian</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </main>
                </div>
            </div>
        </div>
    )
}

export default DaftarKostPenilaian;