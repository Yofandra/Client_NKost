import React, {useState} from "react";
import logo from "../assets/images/logo.png";

const NavbarPenyewa = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    };
  return (
    <nav className="sticky top-0 bg-white p-4 flex justify-between items-center ml-4">
      <div className="flex items-center">
        <img src={logo} alt="NgeKos Logo" className="h-12" />
      </div>
      <div className="w-full items-center bg-white px-6 hidden sm:flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 flex justify-end">
            <button
              onClick={toggleDropdown}
              className="flex justify-center relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
              <i className="fa-solid fa-user fa-2x"></i>
            </button>
            {isDropdownOpen && (
              <div
                onClick={toggleDropdown}
                className="h-full w-full fixed inset-0 cursor-default"
              ></div>
            )}
            {isDropdownOpen && (
              <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                <a href="#" className="block px-4 py-2 account-link text-black hover:text-white">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 account-link text-black hover:text-white">
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
    </nav>
  );
};

export default NavbarPenyewa;
