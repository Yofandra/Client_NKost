import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/images/left-arrow.png";
import kamar from "../../assets/images/kamar.webp";
import Navbar from "../../components/Navbar";

const PageKamar = () => {
  return (
    <>
      <Navbar />
      <div className="px-32 py-0 bg-[#F7F7F7] w-screen h-screen">
        <div className="flex my-6">
          <a href="">
            <img src={leftArrow} alt="" />
          </a>
          <p className="text-[#444F06] ml-5">Kamar Saya</p>
        </div>
        <div className="flex justify-center">
          <img className="w-1/2" src={kamar} alt="" />
        </div>
        <p className="font-bold my-5">Kamar Single</p>
        <p className="font-bold">Deskripsi Kamar</p>
        <div className="w-full bg-[#D9D9D9] rounded-md py-2 my-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, qui
          recusandae? Expedita nulla voluptatibus sequi, placeat voluptatum
          accusamus impedit eaque cupiditate corporis minus eligendi,
          accusantium exercitationem. Assumenda sunt nostrum autem.
        </div>
        <div className="flex justify-end my-6">
          <button className="bg-[#F39200] w-32">Laporan</button>
        </div>
      </div>
    </>
  );
};

export default PageKamar;
