import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
  });
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:4000/profile");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError("Failed to fetch user data");
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
    if (userData.password !== userData.confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok");
      return;
    }

    try {
      const response = await fetch("http://localhost:5173/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      setUserData(data);
      setIsEditing(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-orange-400 min-h-screen w-full p-4 md:p-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 md:mx-8">
        <div className="flex flex-col items-center">
          <img
            src={userData.profilePicture || "/src/assets/images/default.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{userData.fullName}</h2>
          <p className="text-gray-600">{userData.email}</p>
          <p className="text-gray-600">{userData.phoneNumber}</p>
          <p className="text-gray-600">{userData.address}</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 md:mx-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          {isEditing ? "Edit Profile" : "Profile"}
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {isEditing ? (
          <form onSubmit={handleSave}>
            <input
              type="text"
              name="fullName"
              placeholder="Nama Lengkap"
              value={userData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Nomor Handphone"
              value={userData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <input
              type="text"
              name="address"
              placeholder="Alamat"
              value={userData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Konfirmasi Password"
              value={userData.confirmPassword}
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
