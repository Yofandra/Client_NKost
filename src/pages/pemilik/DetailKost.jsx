import React, {useState} from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { useNavigate } from "react-router-dom";
import gambarKost from "../../assets/images/kost.png";

const DetailKost = () => {
    let navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/pemilik/dashboard');
    }
    return(
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik/>
                <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main class="w-full flex-grow p-6">
                        <i onClick={handleBackClick} class="fa-solid fa-arrow-left fa-2x mb-4"></i>
                        <div className="container mx-auto p-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <img className="rounded-lg" src={gambarKost} alt="Room" />
                            </div>
                            <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
                                <h2 className="text-xl font-bold mb-2">Detail Kost</h2>
                                <p><b>Id Kost:</b> 1</p>
                                <p><b>Nama Kost:</b> Kost Rejeki</p>
                                <p><b>Deskripsi:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente expedita atque assumenda iste. Necessitatibus perspiciatis nesciunt architecto et repellendus eligendi, maiores neque impedit culpa assumenda! Laborum sapiente fugit sint?</p>
                                <p><b>Lokasi:</b> Malang</p>
                                <p><b>Link Google Map:</b> Malang</p>
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

export default DetailKost;