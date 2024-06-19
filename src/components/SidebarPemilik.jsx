import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

import '../main.css';

const SidebarPemilik = () => {
    return(
      <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a className='flex justify-center'
            href="dashboard.html"
          >
            <img className='w-20' src={logo} alt="" />
          </a>
        </div>
        <nav className="text-white text-base font-semibold">
          <a
            href="dashboard.html"
            className="flex items-center active-nav-link text-white py-4 pl-6 nav-item "
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a
            href="kamar.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item "
          >
            <i className="fas fa-sticky-note mr-3"></i>
            Kelola Kamar
          </a>
          <a
            href="laporan.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item "
          >
            <i className="fas fa-table mr-3"></i>
            Laporan
          </a>
          <a
            href="penilaian.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item "
          >
            <i className="fas fa-align-left mr-3"></i>
            Penilaian
          </a>
        </nav>
      </aside>
    )
}

export default SidebarPemilik;