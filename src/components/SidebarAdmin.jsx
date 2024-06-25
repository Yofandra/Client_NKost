import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <Link
          to={"/admin/data-user"}
          className="text-white text-3xl font-semibold hover:text-gray-300"
        >
          <a className="flex justify-center">
            <img className="w-20" src={logo} alt="" />
          </a>
        </Link>
      </div>
      <nav className="text-white text-base font-semibold">
      <Link to={"/admin/data-user"}>
        <a className="flex items-center text-white py-4 pl-6 nav-item ">
          <i className="fas fa-tachometer-alt mr-3"></i>
          Data User
        </a>
      </Link>
      <Link to={"/admin/data-kost"}>
        <a
          className="flex items-center text-white py-4 pl-6 nav-item "
        >
          <i className="fas fa-sticky-note mr-3"></i>
          Data Kost
        </a>
      </Link>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
