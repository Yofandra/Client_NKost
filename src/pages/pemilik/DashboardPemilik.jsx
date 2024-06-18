import React, { useState } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";

const DashboardPenyewa = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
    <SidebarPemilik />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavbarPemilik/>
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Dashboard</h1>

            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
              <i className="fas fa-plus mr-3"></i> New Kost
            </button>

            <div className="w-full mt-12">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-list mr-3"></i> My Kost
              </p>
              <div className="bg-white overflow-auto">
                <table className="text-left w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                        ID Kost
                      </th>
                      <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                        Nama Kost
                      </th>
                      <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                        Kategori
                      </th>
                      <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                        Aksi
                      </th>
                      <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                        Lokasi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, name: "Kost A", category: "Category 1", action: "Edit", location: "Location A" },
                      { id: 2, name: "Kost B", category: "Category 2", action: "Edit", location: "Location B" },
                      { id: 3, name: "Kost C", category: "Category 3", action: "Edit", location: "Location C" },
                      { id: 4, name: "Kost D", category: "Category 4", action: "Edit", location: "Location D" }
                    ].map(item => (
                      <tr key={item.id} className="hover:bg-grey-lighter">
                        <td className="py-4 px-6 border-b border-grey-light">{item.id}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{item.name}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{item.category}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{item.action}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{item.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPenyewa;
