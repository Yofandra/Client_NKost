import React, { useEffect, useState } from "react";
import api from "../axios/api";
import Swal from "../utils/sweetAlert";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/profile/user", { headers });
        if (response.status === 200) {
          setUserData(response.data.data);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        Swal.fire({
          title: "Failed to fetch user data",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await api.put("/profile/update", userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to update profile");
      }

      setUserData(response.data);
      setIsEditing(false);

      Swal.fire({
        title: "Profile Updated Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: "Failed to update profile",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleBackClick = () => {
    if(userData.role === "admin") {
      navigate("/admin/data-user");
    } else if(userData.role === "pemilik") {
      navigate("/pemilik/dashboard");
    } else {
      navigate("/penyewa/dashboard");
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-orange-400 min-h-screen w-full p-4 md:p-8 text-black">
      <button onClick={(handleBackClick)} className="absolute top-[20px] left-[20px] flex items-center bg-transparent">
        <i className="fa-solid fa-chevron-left my-4 text-black"></i>
        <p className="text-black mx-3 ">Kembali</p>
      </button>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 md:mx-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Profile
        </h2>
        {userData ? (
          <div className="flex flex-col ">
            <p className="text-gray-600">Name: {userData.name}</p>
            <p className="text-gray-600">Email: {userData.email}</p>
            <p className="text-gray-600">Password: *******</p>
            <p className="text-gray-600">Role: {userData.role}</p>
          </div>
        ) : (
          <p className="text-gray-600">Loading...</p>
        )}
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 md:mx-8 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          {isEditing ? "Edit Profile" : "Profile"}
        </h2>
        {isEditing ? (
          <form onSubmit={handleSave}>
            <label className="text-black font-bold">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              value={userData?.name || ""}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <label className="text-black font-bold">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData?.email || ""}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <label className="text-black font-bold">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData?.password || ""}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <label className="text-black font-bold">Role:</label>
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={userData?.role || ""}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg"
            >
              Simpan
            </button>
          </form>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full bg-orange-500 text-white py-3 rounded-lg"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
