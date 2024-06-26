import React, { useState, useEffect } from 'react';
import SidebarPemilik from '../../components/SidebarPemilik';
import NavbarPemilik from '../../components/NavbarPemilik';
import { useNavigate, Link, useParams } from 'react-router-dom';
import api from '../../axios/api'; 

const KelolaKamar = () => {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams(); 

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get(`/room/kost/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setRooms(response.data || []);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token');
                    navigate('/login');
                } else {
                    console.error('Error fetching data:', error.response ? error.response.data : error.message);
                }
            }
        };

        fetchRooms();
    }, [id, navigate]); 

    const handleDetailClick = (itemId) => {
        navigate(`/pemilik/detail-kamar/${itemId}`);
    }

    const handleEditClick = (itemId) => {
        navigate(`/pemilik/edit-kamar/${itemId}`);
    }

    return (
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik />
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <Link style={{ color: 'black' }} to={"/pemilik/daftar-kost-kamar"}>
                            <i className="fa-solid fa-arrow-left fa-2x mb-4 "></i>
                        </Link>
                        <h1 className="text-3xl text-black pb-6 font-bold">Kelola Kamar</h1>
                        <Link to={`/pemilik/tambah-kamar/${id}`}>
                            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                                <i className="fas fa-plus mr-3"></i> Tambah Kamar
                            </button>
                        </Link>
                        <div className="w-full mt-12">
                            <div className="bg-white overflow-auto">
                                <table className="text-center w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ID Kamar</th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">No. Kamar</th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nama Penyewa</th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Harga</th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Deskripsi</th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Gambar</th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.isArray(rooms) && rooms.map(room => (
                                            <tr key={room.id} onClick={() => handleDetailClick(room.id)} className="hover:bg-grey-lighter ">
                                                <td className="py-4 px-6 border-b border-grey-light">{room.id}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">{room.num_room}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">{room.nama_penyewa}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">Rp {room.price}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">{room.description}</td>
                                                <td className="py-4 px-6 border-b border-grey-light"><img src={room.image || gambarKamar} alt="" /></td>
                                                <td className="py-4 px-6 border-b border-grey-light">
                                                    <button onClick={(e) => { e.stopPropagation(); handleEditClick(room.id); }} className="bg-[#F39200] w-12 h-8 mr-2 font-bold text-sm p-0">Edit</button>
                                                    <button className="bg-[#F39200] w-12 h-8 mr-2 font-bold text-sm p-0">Hapus</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default KelolaKamar;
