import React, {useState} from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { useNavigate } from "react-router-dom";
import gambarKamar from "../../assets/images/kamar.webp";

const DetailKamar = () => {
    let navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/pemilik/kelola-kamar');
    }
    return(
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik/>
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <i onClick={handleBackClick} className="fa-solid fa-arrow-left fa-2x mb-4"></i>
                        <div className="container mx-auto p-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <img className="rounded-lg" src={gambarKamar} alt="Room" />
                            </div>
                            <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
                                <h2 className="text-xl font-bold mb-2">Detail Kamar</h2>
                                <p><b>Id Kamar:</b> 1</p>
                                <p><b>Nama Kost:</b> Kost Rejeki</p>
                                <p><b>No. Kamar:</b> A101</p>
                                <p><b>Nama Penyewa:</b> Yofa</p>
                                <p><b>Harga:</b> Rp 1000000</p>
                                <p><b>Deskripsi:</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, nemo. Voluptates quibusdam blanditiis culpa perspiciatis dicta natus praesentium commodi, explicabo, tempora accusamus veniam optio aspernatur! Unde enim rem pariatur ab.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </main>
                </div> 
            </div>
        </div> 
    )
}

export default DetailKamar;