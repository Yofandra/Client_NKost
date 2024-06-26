import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../axios/api";

const DetailKamar = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [room, setRoom] = useState({
        id: '',
        namaKost: '',
        noKamar: '',
        namaPenyewa: '',
        harga: '',
        deskripsi: '',
        gambar: '',
        idKost: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/room/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const roomData = response.data;
                setRoom({
                    id: roomData.id,
                    namaKost: roomData.namakost,
                    noKamar: roomData.num_room,
                    namaPenyewa: roomData.nama_penyewa,
                    harga: roomData.price,
                    deskripsi: roomData.description,
                    gambar: roomData.image,
                    idKost: roomData.id_kost
                });
                setLoading(false);
            } catch (error) {
                console.error('Error fetching room details:', error);
                setLoading(false);
            }
        };

        fetchRoomDetails();
    }, [id]);

    const handleBackClick = () => {
        navigate(`/pemilik/kelola-kamar/${room.idKost}`);
    };

    if (loading) {
        return <div>Loading...</div>;
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
                                        <img className="rounded-lg" src={room.gambar} alt="Room" />
                                    </div>
                                    <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
                                        <h2 className="text-xl font-bold mb-2">Detail Kamar</h2>
                                        <p><b>Id Kamar:</b> {room.id}</p>
                                        <p><b>Nama Kost:</b> {room.namaKost}</p>
                                        <p><b>No. Kamar:</b> {room.noKamar}</p>
                                        <p><b>Nama Penyewa:</b> {room.namaPenyewa}</p>
                                        <p><b>Harga:</b> Rp {room.harga}</p>
                                        <p><b>Deskripsi:</b> {room.deskripsi}</p>
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

export default DetailKamar;
