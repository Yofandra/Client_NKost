import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ avatarUrl }) {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen w-64">
      <div className="mt-10 mb-4">
        <Link to="/upload-avatar">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-24 h-24 rounded-full cursor-pointer"
            />
          ) : (
            <img
              src="/src/assets/avatar.png"
              alt="Default Avatar"
              className="w-24 h-24 rounded-full cursor-pointer"
            />
          )}
        </Link>
      </div>
      <h2 className="text-xl mb-10">ADMIN</h2>
      <nav className="flex flex-col space-y-4 flex-grow">
        <Link
          to="/data-user"
          className={`${
            location.pathname === "/data-user" ? "bg-gray-700" : ""
          } px-4 py-2 rounded`}
        >
          Data User
        </Link>
        <Link
          to="/data-kos"
          className={`${
            location.pathname === "/data-kos" ? "bg-gray-700" : ""
          } px-4 py-2 rounded`}
        >
          Data Kos
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
