import React, { useState } from "react";
import api from "../axios/api";
import Swal from "../utils/sweetAlert";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Registrasi gagal");
      }
      Swal.fire({
        title: "Registrasi Berhasil",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-orange-400 min-h-screen w-full p-4 md:p-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 md:mx-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          REGISTRASI
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="role"
            name="role"
            placeholder="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg"
          >
            Registrasi
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          Sudah punya akun?{" "}
          <a href="/login" className="text-orange-500">
            Login
          </a>
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 w-full max-w-md mx-4 md:mx-8">
        <img
          src="/src/assets/images/1.png"
          alt="Gambar 1"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
