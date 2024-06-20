import React, { useState } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";

const PermintaanKamar = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
      <SidebarPemilik />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavbarPemilik />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Permintaan Kamar</h1>
            <table className="text-center w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    ID 
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Nama Kost
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Nomor Kamar
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Nama Penyewa
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                //   key={item.id}
                  className="hover:bg-grey-lighter "
                >
                  <td className="py-4 px-6 border-b border-grey-light">
                    1
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    Kost Rejeki
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    1
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    Yofandra
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    <button className="bg-green-600 w-14 h-8 mr-2 font-bold text-sm p-0">
                      Accept
                    </button>
                    <button className="bg-red-600 w-14 h-8 mr-2 font-bold text-sm p-0">
                      Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PermintaanKamar;
