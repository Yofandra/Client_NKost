import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import api from '../../axios/api'; 

const PermintaanKamar = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/roomRequest/request', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error.response ? error.response.data : error.message);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await api.put(`/roomRequest/${id}/accept`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setRequests(requests.filter(request => request.id !== id));
    } catch (error) {
      console.error('Error accepting request:', error.response ? error.response.data : error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await api.put(`/roomRequest/${id}/reject`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setRequests(requests.filter(request => request.id !== id));
    } catch (error) {
      console.error('Error rejecting request:', error.response ? error.response.data : error.message);
    }
  };

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
                {requests.map((item) => (
                  <tr key={item.id} className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">{item.id}</td>
                    <td className="py-4 px-6 border-b border-grey-light">{item.name_kost}</td>
                    <td className="py-4 px-6 border-b border-grey-light">{item.num_room}</td>
                    <td className="py-4 px-6 border-b border-grey-light">{item.penyewa}</td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      <button 
                        className="bg-green-600 w-14 h-8 mr-2 font-bold text-sm p-0"
                        onClick={() => handleAccept(item.id)}
                      >
                        Accept
                      </button>
                      <button 
                        className="bg-red-600 w-14 h-8 mr-2 font-bold text-sm p-0"
                        onClick={() => handleReject(item.id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
                {requests.length === 0 && (
                  <tr>
                    <td colSpan="5" className="py-4 px-6 border-b border-grey-light">Tidak ada permintaan kamar</td>
                  </tr>
                )}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PermintaanKamar;
