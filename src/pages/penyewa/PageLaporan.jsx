import React, { useState } from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/images/left-arrow.png";
import Navbar from "../../components/NavbarPenyewa";
import FormLaporan from "../../components/FormLaporan";
import { createReport } from "../../axios/report-service";
import Swal from "../../utils/sweetAlert";

const PageLaporan = () => {
  const [newReport, setNewReport] = useState("");

  const handleInputChange = (e) => {
    setNewReport(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReport({ description: newReport });
      setNewReport("");
      Swal.fire({
        title: "Success",
        text: "Report created successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error creating report:", error);
      Swal.fire({
        title: "Gagal Membuat Laporan",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-32 py-0 bg-[#F7F7F7] w-screen h-screen">
        <div className="flex my-6">
          <Link to="/penyewa/kamar-saya">
            <img src={leftArrow} alt="Go back" />
          </Link>
          <p className="text-[#444F06] ml-5">Laporan Saya</p>
        </div>
        <FormLaporan />
        <form
          className="flex flex-col bg-[#D9D9D9] bg-opacity-30 w-full p-3 my-10 text-black"
          onSubmit={handleFormSubmit}
        >
          <label className="bg-transparent font-bold mb-2">Buat Laporan</label>
          <input
            className="bg-[#D9D9D9] rounded-md py-3 px-1"
            value={newReport}
            onChange={handleInputChange}
          />
          <div className="flex justify-end my-6 bg-transparent">
            <button
              type="submit"
              className="bg-[#F39200] hover:bg-[#d37f00] w-32 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PageLaporan;
