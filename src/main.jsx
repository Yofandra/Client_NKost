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
import PageDaftarKost from './pages/penyewa/PageDaftarKost';
import PageSewaKamar from './pages/penyewa/PageSewaKamar';
import DashboardPemilik from './pages/pemilik/DashboardPemilik';
import KelolaKamar from './pages/pemilik/KelolaKamar';
import DaftarKostKamar from './pages/pemilik/DaftarKostKamar';
import DetailKamar from './pages/pemilik/DetailKamar';
import EditKamar from './pages/pemilik/EditKamar';
import DetailKost from './pages/pemilik/DetailKost';
import EditKost from './pages/pemilik/EditKost';
import TambahKost from './pages/pemilik/TambahKost';
import DetailLokasi from './pages/pemilik/DetailLokasi';
import Laporan from './pages/pemilik/Laporan';
import DaftarKostPenilaian from './pages/pemilik/DaftarKostPenilaian';
import Penilaian from './pages/pemilik/Penilaian';
import PermintaanKamar from './pages/pemilik/PermintaanKamar';

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
        <Route path="/pemilik/dashboard" element={<DashboardPemilik />} />
        <Route path="/pemilik/detail-kost" element={<DetailKost />} />
        <Route path="/pemilik/edit-kost" element={<EditKost />} />
        <Route path="/pemilik/tambah-kost" element={<TambahKost />} />
        <Route path="/pemilik/detail-lokasi" element={<DetailLokasi />} />
        <Route path="/pemilik/kelola-kamar" element={<KelolaKamar />} />
        <Route path="/pemilik/daftar-kost-kamar" element={<DaftarKostKamar />} />
        <Route path="/pemilik/detail-kamar" element={<DetailKamar />} />
        <Route path="/pemilik/edit-kamar" element={<EditKamar />} />
        <Route path="/pemilik/laporan" element={<Laporan />} />
        <Route path="/pemilik/daftar-kost-penilaian" element={<DaftarKostPenilaian />} />
        <Route path="/pemilik/penilaian" element={<Penilaian />} />
        <Route path="/pemilik/permintaan-kamar" element={<PermintaanKamar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
