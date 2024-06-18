import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import DashboardPenyewa from "./pages/penyewa/DashboardPenyewa";
import PageKamar from "./pages/penyewa/PageKamar";
import PageLaporan from './pages/penyewa/PageLaporan';
import PageDaftarKost from './pages/penyewa/PageDaftarKost';
import PageSewaKamar from './pages/penyewa/PageSewaKamar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/penyewa/dashboard" element={<DashboardPenyewa />} />
        <Route path="/penyewa/kamar" element={<PageKamar />} />
        <Route path="/penyewa/laporan" element={<PageLaporan />} />
        <Route path="/penyewa/daftar/kost" element={<PageDaftarKost />} />
        <Route path="/penyewa/sewa/kamar" element={<PageSewaKamar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
