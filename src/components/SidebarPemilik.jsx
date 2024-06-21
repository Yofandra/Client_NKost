import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const SidebarPemilik = () => {
  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <Link
          to={"/pemilik/dashboard"}
          className="text-white text-3xl font-semibold hover:text-gray-300"
        >
          <a className="flex justify-center">
            <img className="w-20" src={logo} alt="" />
          </a>
        </Link>
      </div>
      <nav className="text-white text-base font-semibold">
      <Link to={"/pemilik/dashboard"}>
        <a className="flex items-center text-white py-4 pl-6 nav-item ">
          <i className="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
      </Link>
      <Link to={"/pemilik/daftar-kost-kamar"}>
        <a
          className="flex items-center text-white py-4 pl-6 nav-item "
        >
          <i className="fas fa-sticky-note mr-3"></i>
          Kelola Kamar
        </a>
      </Link>
      <Link to={"/pemilik/laporan"}>
        <a
          className="flex items-center text-white py-4 pl-6 nav-item "
        >
          <i className="fas fa-table mr-3"></i>
          Laporan
        </a>
      </Link>
      <Link to={"/pemilik/daftar-kost-penilaian"}>
        <a
          className="flex items-center text-white py-4 pl-6 nav-item "
        >
          <i className="fas fa-align-left mr-3"></i>
          Penilaian
        </a>
      </Link>
      <Link to={"/pemilik/permintaan-kamar"}>
        <a
          className="flex items-center text-white py-4 pl-6 nav-item "
        >
          <i className="fas fa-check mr-3"></i>
          Permintaan Kamar
        </a>
      </Link>
      </nav>
    </aside>
  );
};

export default SidebarPemilik;
