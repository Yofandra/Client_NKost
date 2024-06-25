import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
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
import TambahKamar from './pages/pemilik/TambahKamar';
import DataUser from './pages/admin/DataUser';
import DataKost from './pages/admin/DataKost';
import DetailKostAdmin from './pages/admin/DetailKost';
import DetailUserAdmin from './pages/admin/DetailUser';
import PagePenilaian from './pages/penyewa/PagePenilaian';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/penyewa/dashboard" element={<DashboardPenyewa />} />
        <Route path="/penyewa/kamar-saya" element={<PageKamar />} />
        <Route path="/penyewa/laporan" element={<PageLaporan />} />
        <Route path="/penyewa/daftar-kost" element={<PageDaftarKost />} />
        <Route path="/penyewa/sewa-kamar/:id" element={<PageSewaKamar />} />
        <Route path="/penyewa/penilaian/:id" element={<PagePenilaian />} />
        <Route path="/pemilik/dashboard" element={<DashboardPemilik />} />
        <Route path="/pemilik/detail-kost/:id" element={<DetailKost />} />
        <Route path="/pemilik/edit-kost/:id" element={<EditKost />} />
        <Route path="/pemilik/tambah-kost" element={<TambahKost />} />
        <Route path="/pemilik/detail-lokasi/:id" element={<DetailLokasi />} />
        <Route path="/pemilik/kelola-kamar/:id" element={<KelolaKamar />} />
        <Route path="/pemilik/daftar-kost-kamar" element={<DaftarKostKamar />} />
        <Route path="/pemilik/tambah-kamar" element={<TambahKamar />} />
        <Route path="/pemilik/detail-kamar/:id" element={<DetailKamar />} />
        <Route path="/pemilik/edit-kamar/:id" element={<EditKamar />} />
        <Route path="/pemilik/laporan" element={<Laporan />} />
        <Route path="/pemilik/daftar-kost-penilaian" element={<DaftarKostPenilaian />} />
        <Route path="/pemilik/penilaian" element={<Penilaian />} />
        <Route path="/pemilik/permintaan-kamar" element={<PermintaanKamar />} />
        <Route path="/admin/data-user" element={<DataUser />} />
        <Route path="/admin/data-kost" element={<DataKost />} />
        <Route path="/admin/detail-kost/:id" element={<DetailKostAdmin />} />
        <Route path="/admin/detail-user/:id" element={<DetailUserAdmin />} />
      </Routes>
  );
}

export default App;