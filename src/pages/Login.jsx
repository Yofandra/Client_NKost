import React, { useState } from "react";
import illustration from "../assets/images/2.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login gagal");
      }

      const data = await response.json();
      console.log("Login berhasil:", data);
    } catch (error) {
      setError(error.message);
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
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <a href="/forgot-password" className="text-orange-500 block mb-4">
            Lupa Password?
          </a>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Belum punya akun?{" "}
          <a href="/register" className="text-orange-500">
            Registrasi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
