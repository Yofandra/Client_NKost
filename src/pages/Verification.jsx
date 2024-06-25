import React, { useState, useEffect } from "react";
import profileImage from "../assets/images/logo.png";
import api from "../axios/api";
import Swal from "../utils/sweetAlert";

const Verification = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('user/verify-account', {email},{
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Registrasi gagal");
      }
      Swal.fire({
        title: "Verifikasi Akun Berhasil",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: "Verifikasi Akun Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-orange-400 min-h-screen w-full p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-2xl text-center text-orange-400 font-bold mb-6">
          Verifikasi Akun
        </h2>
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Alamat email anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg mb-4"
          >
            Kirim Email
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          Kembali ke{" "}
          <a href="/login" className="text-orange-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Verification;
