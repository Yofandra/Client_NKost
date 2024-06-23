import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/images/left-arrow.png";
import Navbar from "../../components/NavbarPenyewa";
import { getRoomByIdUser } from "../../axios/room-service";
import Swal from "../../utils/sweetAlert";

const PageKamar = () => {
  const [dataKamar, setDataKamar] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const kamarResponse = await getRoomByIdUser();
      if (kamarResponse.data && kamarResponse.data.length > 0) {
        setDataKamar(kamarResponse.data[0]);
      }
      console.log(dataKamar);
      console.log(kamarResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire({
        title: "Gagal Mengambil Data",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };
  return (
    <>
      <Navbar />
      {dataKamar ? (
        <div className="px-32 bg-[#F7F7F7] w-screen h-screen my-0">
          <div className="flex my-6">
            <Link to={"/penyewa/dashboard"}>
              <img src={leftArrow} alt="" />
            </Link>
            <p className="text-[#444F06] ml-5">Kamar Saya</p>
          </div>
          <div className="flex justify-center">
            <img
              className="w-1/2 h-fit"
              src={dataKamar.image}
              alt={dataKamar.url_image}
            />
          </div>
          <p className="font-bold my-5 text-black">Nomor Kamar : {dataKamar.num_room}</p>
          <p className="font-bold text-black">Deskripsi Kamar : </p>
          <div className="w-full bg-[#D9D9D9] text-black rounded-md p-2 my-2">
            {dataKamar.description_room}
          </div>
          <Link to={"/penyewa/laporan"}>
            <div className="flex justify-end my-6">
              <button className="bg-[#F39200] w-32 text-black my-10">Laporan</button>
            </div>
          </Link>
        </div>
      ) : (
        <p className="text-center mt-10 text-black">Tidak ada data kamar tersedia.</p>
      )}
    </>
  );
};

export default PageKamar;
