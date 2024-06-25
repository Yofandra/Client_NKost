import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { useNavigate, Link } from "react-router-dom";
import api from "../../axios/api";

const DashboardPemilik = () => {
    const [kosts, setKosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await api.get('/kost/owner', {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
          console.log("Response from backend:", response.data);
            setKosts(response.data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDetailClick = (id) => {
        navigate(`/pemilik/detail-kost/${id}`);
    };

    const handleEditClick = (id) => {
        navigate(`/pemilik/edit-kost/${id}`);
    };

    const handleLocationClick = (id) => {
        navigate(`/pemilik/detail-lokasi/${id}`);
    };

    return (
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik />
                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-black pb-6">Dashboard</h1>
                        <Link to={"/pemilik/tambah-kost"}>
                            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                                <i className="fas fa-plus mr-3"></i> Tambah Kost
                            </button>
                        </Link>

                        <div className="w-full mt-12">
                            <p className="text-xl pb-3 flex items-center">
                                <i className="fas fa-list mr-3"></i> My Kost
                            </p>
                            <div className="bg-white overflow-auto">
                                <table className="text-center w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                ID Kost
                                            </th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Nama Kost
                                            </th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Deskripsi
                                            </th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Gambar
                                            </th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Lokasi
                                            </th>
                                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {kosts.map(item => (
                                            <tr key={item.id} onClick={() => handleDetailClick(item.id)} className="hover:bg-grey-lighter cursor-pointer">
                                                <td className="py-4 px-6 border-b border-grey-light">{item.id}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">{item.name_kost}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">{item.description_kost}</td>
                                                <td className="py-4 px-6 border-b border-grey-light"><img src={item.image} alt="" /></td>
                                                <td className="py-4 px-6 border-b border-grey-light">
                                                    <button onClick={(e) => { e.stopPropagation(); handleLocationClick(item.id); }} className="bg-[#F39200] w-28 p-0">Detail Lokasi</button>
                                                </td>
                                                <td className="py-4 px-6 border-b border-grey-light">
                                                    <button onClick={(e) => { e.stopPropagation(); handleEditClick(item.id); }} className="bg-[#F39200] w-12 p-0 mr-2 font-bold">Edit</button>
                                                    <button className="bg-[#F39200] w-16 p-0 font-bold">Hapus</button>
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
    );
};

export default DashboardPemilik;

