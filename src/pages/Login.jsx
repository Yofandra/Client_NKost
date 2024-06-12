import React, { useState, useEffect } from "react";
import profileImage from "../assets/images/profile.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://https://localhost:5173/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Pengiriman tautan reset gagal");
      }

      const data = await response.json();
      console.log("Tautan reset berhasil dikirim:", data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-orange-400 min-h-screen w-full p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl text-center text-orange-400 font-bold mb-6">
          Reset Password
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
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
            Kirim Tautan Reset
          </button>
        </form>
        <p className="mt-4 text-center">
          Kembali ke{" "}
          <a href="/login" className="text-orange-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
