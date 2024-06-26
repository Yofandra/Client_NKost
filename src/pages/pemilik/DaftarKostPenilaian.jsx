import React, { useState, useEffect } from 'react';
import SidebarPemilik from '../../components/SidebarPemilik';
import NavbarPemilik from '../../components/NavbarPemilik';
import gambarKamar from '../../assets/images/kamar.webp';
import { Link } from 'react-router-dom';
import api from '../../axios/api';

const DaftarKostPenilaian = () => {
    const [kosts, setKosts] = useState([]);

    useEffect(() => {
        const fetchKosts = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/kost/owner', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setKosts(response.data);
            } catch (error) {
                console.error('Error fetching kost data:', error.response ? error.response.data : error.message);
            }
        };

        fetchKosts();
    }, []);

    return (
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik />
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-black pb-6 font-bold">Daftar Kost</h1>
                        <div className='flex flex-wrap'>
                            {kosts.map((kost) => (
                                <div key={kost.id} className='flex flex-col justify-between shadow-2xl bg-white w-80 h-96 rounded-xl mb-20 mx-10 p-4'>
                                    <img className='w-fit h-fit rounded-xl' src={kost.image || gambarKamar} alt={kost.name} />
                                    <h1 className='text-lg font-bold'>{kost.name_kost}</h1>
                                    <p className='truncate'>{kost.description_kost}</p>
                                    <Link to={`/pemilik/penilaian/${kost.id}`}>
                                        <div className="flex justify-center">
                                            <button className="bg-sidebar font-bold text-center text-white">Lihat Penilaian</button>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default DaftarKostPenilaian;
