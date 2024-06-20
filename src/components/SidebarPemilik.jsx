import React from 'react';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const SidebarPemilik = () => {
  let navigate = useNavigate();

  const handleDashboardClick = () => {
      navigate('/pemilik/dashboard');
  }
  const handleKamarClick = () => {
      navigate('/pemilik/daftar-kost-kamar');
  }
  const handleLaporanClick = () => {
      navigate('/pemilik/laporan');
  }
  const handlePenilaianClick = () => {
      navigate('/pemilik/daftar-kost-penilaian');
  }
  const handlePermintaanClick = () => {
      navigate('/pemilik/permintaan-kamar');
  }
    return(
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a className='flex justify-center' onClick={handleDashboardClick}>
            <img className='w-20' src={logo} alt="" />
          </a>
        </div>
        <nav className="text-white text-base font-semibold">
          <a
            className="flex items-center text-white py-4 pl-6 nav-item " onClick={handleDashboardClick}
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item " onClick={handleKamarClick}
          >
            <i className="fas fa-sticky-note mr-3"></i>
            Kelola Kamar
          </a>
          <a
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item " onClick={handleLaporanClick}
          >
            <i className="fas fa-table mr-3"></i>
            Laporan
          </a>
          <a
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item " onClick={handlePenilaianClick}
          >
            <i className="fas fa-align-left mr-3"></i>
            Penilaian
          </a>
          <a
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item " onClick={handlePermintaanClick}
          >
            <i className="fas fa-check mr-3"></i>
            Permintaan Kamar
          </a>
        </nav>
      </aside>
    )
}

export default SidebarPemilik;