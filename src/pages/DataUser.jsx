import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DataUser() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleDetailClick = (id) => {
    navigate(`/detail-user/${id}`);
  };

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl mb-4">Data User</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border" style={{ width: "100%" }}>
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
                <td className="py-2 px-4 border">{user.nama}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.password}</td>
                <td className="py-2 px-4 border">{user.role}</td>
                <td className="py-2 px-4 border">{user.status}</td>
                <td className="py-2 px-4 border">{user.lastLogin}</td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-blue-500 text-white py-1 px-2 rounded"
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
  );
}

export default DataUser;
