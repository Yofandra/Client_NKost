import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/images/left-arrow.png";
import Navbar from "../../components/Navbar";
import FormLaporan from "../../components/FormLaporan";

const PageLaporan = () => {
  return (
    <>
      <Navbar />
      <div className="px-32 py-0 bg-[#F7F7F7] w-screen h-screen">
        <div className="flex my-6">
          <a href="">
            <img src={leftArrow} alt="" />
          </a>
          <p className="text-[#444F06] ml-5">Laporan Saya</p>
        </div>
        <FormLaporan />
        <form className="flex flex-col bg-[#D9D9D9] bg-opacity-30 w-full p-3 my-10">
            <label className="bg-transparent font-bold mb-2">Buat Laporan</label>
            <input className=" bg-[#D9D9D9] rounded-md py-3 px-1">
            </input>
            <div className="flex justify-end my-6 bg-transparent">
                <button className="bg-[#F39200] hover:hover:bg-[#d37f00] w-32">Tambah</button>
            </div>
        </form>
      </div>
    </>
  );
};

export default PageLaporan;
