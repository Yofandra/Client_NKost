import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../axios/user-service";
import Navbar from "../../components/NavbarPemilik";
import SidebarAdmin from "../../components/SidebarAdmin";

function DataUser() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getAllUser();
      setUserData(response.data);
      console.log("User data:", response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDetailClick = (userId) => {
    navigate(`/admin/detail-user/${userId}`);
  };

  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
      <SidebarAdmin />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <Navbar />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <div className="p-4 w-full text-black">
              <h1 className="text-2xl mb-4">Data User</h1>
              <div className="overflow-x-auto">
                <table
                  className="min-w-full bg-white border"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border">Id</th>
                      <th className="py-2 px-4 border">Nama</th>
                      <th className="py-2 px-4 border">Email</th>
                      <th className="py-2 px-4 border">Password</th>
                      <th className="py-2 px-4 border">Role</th>
                      <th className="py-2 px-4 border">Status</th>
                      <th className="py-2 px-4 border">Last Login</th>
                      <th className="py-2 px-4 border">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((user) => (
                      <tr key={user.id}>
                        <td className="py-2 px-4 border">{user.id}</td>
                        <td className="py-2 px-4 border">{user.name}</td>
                        <td className="py-2 px-4 border">{user.email}</td>
                        <td className="py-2 px-4 border">{user.password}</td>
                        <td className="py-2 px-4 border">{user.role}</td>
                        <td className="py-2 px-4 border">{user.status}</td>
                        <td className="py-2 px-4 border">{user.last_login}</td>
                        <td className="py-2 px-4 border">
                          <button
                            className="bg-blue-500 text-white py-1 px-2 rounded w-full"
                            onClick={() => handleDetailClick(user.id)}
                          >
                            Detail
                          </button>
                        </td>
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
}

export default DataUser;
