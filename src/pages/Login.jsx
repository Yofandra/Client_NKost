import React, { useState } from "react";
import illustration from "../assets/images/2.png";
import api from "../axios/api";
import Swal from "../utils/sweetAlert";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      Swal.fire({
        title: "Login Berhasil",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      const {token} = response.data
      localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/Login");
      }, 36000000);

      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role;

      setTimeout(() => {
        if (userRole === "penyewa"){
          navigate("/penyewa/dashboard");
        } else if (userRole === "pemilik"){
          navigate("/pemilik/dashboard");
        }else{
          navigate("/admin/data-user");
        }
      }, 1500);
    } catch (error) {
      Swal.fire({
        title: "Login Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-orange-400 min-h-screen w-full p-4 md:p-0">
      <div className="hidden md:block md:w-1/2">
        <img
          src={illustration}
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 max-w-md mx-auto md:mx-0 md:ml-8">
        <h2 className="text-2xl text-center text-orange-400 font-bold mb-9">
          LOGIN
        </h2>
        <form onSubmit={onFinish}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4"
            required
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4"
            required
          />
          <Link to="/verification" className="text-orange-500 block mb-4">
            Verifikasi Akun
          </Link>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          Belum punya akun?{" "}
          <Link to="/register" className="text-orange-500">
            Registrasi
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
