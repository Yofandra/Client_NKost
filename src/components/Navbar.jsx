import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="NgeKos Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-gray-800">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Pusat Bantuan
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Notifikasi
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
