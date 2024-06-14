import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import App from './App.jsx'
import "./main.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import DashboardPenyewa from "./pages/penyewa/DashboardPenyewa";
import Navbar from "./components/Navbar";
import Kamar from "./pages/penyewa/Kamar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/penyewa/dashboard" element={<DashboardPenyewa />} />
      <Route path="/penyewa/kamar" element={<Kamar />} />
    </Routes>
  </Router>
);
