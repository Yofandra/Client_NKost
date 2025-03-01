import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate, Link } from "react-router-dom";
import Swal from "../utils/sweetAlert";
import {jwtDecode} from "jwt-decode"; 

const NavbarPenyewa = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState(null); 

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.name) {
          setUserName(decodedToken.name); 
        }
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Logout Berhasil",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });

    localStorage.removeItem("token");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="w-full items-center bg-white px-6 py-6 hidden sm:flex relative z-20">
      <div className="flex items-center">
        <img src={logo} alt="NgeKos Logo" className="h-12" />
      </div>
      <div className="w-1/2"></div>
      <div className="relative w-1/2 flex justify-end">
        <button
          onClick={toggleDropdown}
          className="flex justify-center relative z-30 w-12 h-12 bg-black rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        >
          <i className="fa-solid fa-user fa-2x"></i>
        </button>
        {isDropdownOpen && (
          <div
            onClick={toggleDropdown}
            className="h-full w-full fixed inset-0 cursor-default z-10"
          ></div>
        )}
        {isDropdownOpen && (
          <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 z-20">
            <p className="flex justify-center py-8 bg-slate-300 rounded-lg">{userName}</p>
            <Link
              to={"/profile"}
              className="block px-4 py-2 account-link text-black hover:text-white"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="flex justify-start px-4 py-2 account-link bg-white w-full text-black hover:text-white"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarPenyewa;
