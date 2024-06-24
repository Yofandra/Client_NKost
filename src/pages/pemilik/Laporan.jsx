import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import api from "../../axios/api";

const Laporan = () => {
  const [laporan, setLaporan] = useState([]);

  useEffect(() => {
    const fetchLaporan = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/report/allReport', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setLaporan(response.data);
      } catch (error) {
        console.error("Error fetching laporan data:", error);
      }
    };

    fetchLaporan();
  }, []);

  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
      <SidebarPemilik />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavbarPemilik />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Laporan</h1>
            {laporan.length > 0 ? (
              laporan.map((laporanItem) => (
                <div key={laporanItem.id} className="bg-[#D9D9D9] bg-opacity-30 w-full p-3 my-8 text-black">
                  <p className="p-0 m-0 bg-transparent">{laporanItem.date}</p>
                  <p className="p-0 m-0 bg-transparent">Nama Kost  : {laporanItem.name_kost}</p>
                  <p className="p-0 m-0 bg-transparent">Nomor Kamar: {laporanItem.num_room}</p>
                  <div className="bg-[#D9D9D9] rounded-md py-3 px-1">{laporanItem.description_report}</div>
                </div>
              ))
            ) : (
              <p className="text-black">Tidak ada laporan untuk ditampilkan.</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Laporan;
