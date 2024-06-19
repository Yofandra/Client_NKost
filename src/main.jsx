import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import DashboardPenyewa from "./pages/penyewa/DashboardPenyewa";
import PageKamar from "./pages/penyewa/PageKamar";
import PageLaporan from './pages/penyewa/PageLaporan';
import DashboardPemilik from './pages/pemilik/DashboardPemilik';
import KelolaKamar from './pages/pemilik/KelolaKamar';
import DaftarKost from './pages/pemilik/DaftarKost';
import DetailKamar from './pages/pemilik/DetailKamar';
import EditKamar from './pages/pemilik/EditKamar';

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
        <Route path="/pemilik/dashboard" element={<DashboardPemilik />} />
        <Route path="/pemilik/kelola-kamar" element={<KelolaKamar />} />
        <Route path="/pemilik/daftar-kost" element={<DaftarKost />} />
        <Route path="/pemilik/detail-kamar" element={<DetailKamar />} />
        <Route path="/pemilik/edit-kamar" element={<EditKamar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
