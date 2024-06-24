import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../axios/api";

const DetailKost = () => {
    const [kost, setKost] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchKostDetail = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get(`/kost/id/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setKost(response.data); 
            } catch (error) {
                console.error('Error fetching Kost detail:', error);
            }
        };

        fetchKostDetail();
    }, [id]); 

    const handleBackClick = () => {
        navigate('/pemilik/dashboard');
    };

    if (!kost) {
        return <p>Loading...</p>; 
    }

    return (
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik />
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <i onClick={handleBackClick} className="fa-solid fa-arrow-left fa-2x mb-4"></i>
                        <div className="container mx-auto p-6">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2">
                                        <img className="rounded-lg" src={kost.image} alt="Room" />
                                    </div>
                                    <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
                                        <h2 className="text-xl font-bold mb-2">Detail Kost</h2>
                                        <p><b>Id Kost:</b> {kost.id}</p>
                                        <p><b>Nama Kost:</b> {kost.name_kost}</p>
                                        <p><b>Deskripsi:</b> {kost.description_kost}</p>
                                        <p><b>Lokasi:</b> {kost.fullAddress}</p>
                                        <p><b>Link Google Map:</b> {kost.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DetailKost;
