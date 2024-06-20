import React, { useState } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import bintang from "../../assets/images/bintang.png";
import { useNavigate } from "react-router-dom";

const Penilaian = () => {
  let navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/pemilik/daftar-kost-penilaian');
    }
  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
    <SidebarPemilik />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavbarPemilik/>
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
          <i onClick={handleBackClick} className="fa-solid fa-arrow-left fa-2x mb-4"></i>
            <h1 className="text-3xl text-black pb-6">Penilaian</h1>
            <div className="bg-[#D9D9D9] bg-opacity-30 w-full p-3 my-8 text-black">
              <p className="p-0 m-0 bg-transparent">Yofandra</p>
              <div className="flex items-center my-2">
                <img src={bintang} alt="bintang" className="w-5 mr-2"/>
                <p className="p-0 m-0 bg-transparent">5</p>
              </div>
              <div className="bg-[#D9D9D9] rounded-md py-3 px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est fugiat aut dolores inventore, repudiandae autem veniam similique nisi natus. Nisi quas qui possimus odio quibusdam ea ipsum, veniam blanditiis.</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Penilaian;
