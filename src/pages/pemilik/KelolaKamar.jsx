import React, {useState} from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { useNavigate } from "react-router-dom";
import gambarKamar from "../../assets/images/kamar.webp";

const KelolaKamar = () => {

    let navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/pemilik/daftar-kost');
    }

    const handleDetailClick = () => {
        navigate('/pemilik/detail-kamar');
    }
    
    const handleEditClick = (itemId) => {
        navigate('/pemilik/edit-kamar');
    }

    return(
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik/>
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <i onClick={handleBackClick} className="fa-solid fa-arrow-left fa-2x mb-4"></i>
                        <h1 className="text-3xl text-black pb-6 font-bold">Kelola Kamar</h1>
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i className="fas fa-plus mr-3"></i> Tambah Kamar
                    </button>
                        <div className="w-full mt-12">
                            <div className="bg-white overflow-auto">
                                <table className="text-center w-full border-collapse">
                                    <thead>
                                        <tr>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            ID Kamar
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            No.Kamar
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Nama Penyewa
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Harga
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Deskripsi
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Gambar
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Aksi
                                        </th>
                                        </tr>
                                    </thead>     
                                    <tbody>
                                        {[
                                            { id: 1, nama: "Yofa", noKamar: "1", price: "1.000.000", description: "Kamar ini memiliki fasilitas lengkap" },
                                        ].map(item => (
                                            <tr key={item.id} onClick={handleDetailClick} className="hover:bg-grey-lighter ">
                                                <td className="py-4 px-6 border-b border-grey-light">{item.id}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">{item.noKamar}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">{item.nama}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">Rp {item.price}</td>
                                                <td className="py-4 px-6 border-b border-grey-light">{item.description}</td>
                                                <td className="py-4 px-6 border-b border-grey-light"><img src={gambarKamar} alt="" /></td>
                                                <td className="py-4 px-6 border-b border-grey-light">
                                                    <button onClick={(e) => { e.stopPropagation(); handleEditClick(item.id); }} className="bg-[#F39200] w-12 h-8 mr-2 font-bold text-sm p-0">Edit</button>
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