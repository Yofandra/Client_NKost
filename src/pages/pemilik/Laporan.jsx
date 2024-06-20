import React, { useState } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";

const Laporan = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
    <SidebarPemilik />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavbarPemilik/>
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Laporan</h1>
            <div className="bg-[#D9D9D9] bg-opacity-30 w-full p-3 my-8 text-black">
            <p className="p-0 m-0 bg-transparent">15/06/2024</p>
            <p className="p-0 m-0 bg-transparent">Nama Kost  : Kost Rejeki</p>
            <p className="p-0 m-0 bg-transparent">Nomor Kamar: 1</p>
            <div className="bg-[#D9D9D9] rounded-md py-3 px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est fugiat aut dolores inventore, repudiandae autem veniam similique nisi natus. Nisi quas qui possimus odio quibusdam ea ipsum, veniam blanditiis.</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Laporan;
