import React, { useState } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import gambarKost from "../../assets/images/kost.png";
import { useNavigate } from "react-router-dom";
import TambahKost from "./TambahKost";

const DashboardPenyewa = () => {
    let navigate = useNavigate();

    const handleDetailClick = () => {
        navigate('/pemilik/detail-kost');
    }

    const handleEditClick = () => {
        navigate('/pemilik/edit-kost');
    }

    const handleCreateClick = () => {
        navigate('/pemilik/tambah-kost');
    }
    
    const handleLocationClick = () => {
        navigate('/pemilik/detail-lokasi');
    }
  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
    <SidebarPemilik />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavbarPemilik/>
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Dashboard</h1>

            <button onClick={handleCreateClick} className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
              <i className="fas fa-plus mr-3"></i> Tambah Kost
            </button>

            <div className="w-full mt-12">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-list mr-3"></i> My Kost
              </p>
              <div className="bg-white overflow-auto">
                <table className="text-center w-full border-collapse ">
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
                    {[
                      { id: 1, name: "Kost A",  deskripsi: " deskripsi 1", gambar: "Edit", location: "Location A" },
                      { id: 2, name: "Kost B",  deskripsi: " deskripsi 2", gambar: "Edit", location: "Location B" },
                      { id: 3, name: "Kost C",  deskripsi: " deskripsi 3", gambar: "Edit", location: "Location C" },
                      { id: 4, name: "Kost D",  deskripsi: " deskripsi 4", gambar: "Edit", location: "Location D" }
                    ].map(item => (
                      <tr key={item.id} onClick={handleDetailClick} className="hover:bg-grey-lighter ">
                        <td className="py-4 px-6 border-b border-grey-light">{item.id}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{item.name}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{item.deskripsi}</td>
                        <td className="py-4 px-6 border-b border-grey-light"><img src={gambarKost} alt="" /></td>
                        <td className="py-4 px-6 border-b border-grey-light"><button onClick={(e) => { e.stopPropagation(); handleLocationClick(item.id); }} className="bg-[#F39200] w-28 p-0">Detail Lokasi</button></td>
                        <td className="py-4 px-6 border-b border-grey-light">
                        <button onClick={(e) => { e.stopPropagation(); handleEditClick(item.id); }} className="bg-[#F39200] w-20 mr-2 font-bold">Edit</button>
                        <button className="bg-[#F39200] w-24 font-bold">Hapus</button>
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

export default DashboardPenyewa;
