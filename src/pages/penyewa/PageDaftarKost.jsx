import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "../../utils/sweetAlert";
import { getKost } from "../../axios/kost-service";
import { getLocationByIdKost } from "../../axios/location-service";
import { getRatingByIdKost } from "../../axios/rating-service";
import Navbar from "../../components/NavbarPenyewa";

const PageDaftarKost = () => {
  const [dataKost, setDataKost] = useState([]);
  const [dataLocation, setDataLocation] = useState({});
  const [dataRating, setDataRating] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const kostResponse = await getKost();
      setDataKost(kostResponse);

      const locationPromises = kostResponse.map((kost) =>
        getLocationByIdKost(kost.id)
      );
      const ratingPromises = kostResponse.map((kost) =>
        getRatingByIdKost(kost.id)
      );

      const locationResponses = await Promise.all(locationPromises);
      const ratingResponses = await Promise.all(ratingPromises);

      const locationMap = {};
      locationResponses.forEach((location, index) => {
        locationMap[kostResponse[index].id] = location;
      });
      setDataLocation(locationMap);

      const ratingMap = {};
      ratingResponses.forEach((rating, index) => {
        ratingMap[kostResponse[index].id] = rating;
      });
      setDataRating(ratingMap);
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

  const calculateAverageRating = (ratings) => {
    if (!Array.isArray(ratings) || ratings.length === 0) return 0;
    const totalScore = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return (totalScore / ratings.length).toFixed(1);
  };

  const handleSewaKamar = (id) => {
    navigate(`/penyewa/sewa-kamar/${id}`);
  }

  return (
    <>
      <Navbar />
      <div className="w-full relative bg-whitesmoke h-auto overflow-hidden p-8">
        <div className="flex justify-start mb-4 mx-40">
          <Link to={"/penyewa/dashboard"}>
            <i className="fa-solid fa-chevron-left fa-xl my-4 text-black"></i>
          </Link>
          <p className="text-black mx-6 text-xl">Daftar Kost</p>
        </div>
        {dataKost.map((kost, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start my-14 mx-40 bg-gray-200 rounded-xl p-4 h-[300px]"
          >
            <button className="[border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[20px]">
              <img
                className="w-[400px] h-[260px] object-cover rounded-xl"
                alt=""
                src={kost.image}
              />
              <div className="w-full">
                <div className="flex flex-col items-start">
                  <b className="text-16xl font-font text-black">
                    {kost.name_kost}
                  </b>
                  <div className="text-mini font-light font-inria-sans text-black mt-2">
                    {dataLocation[kost.id] && dataLocation[kost.id][0] && (
                      <>
                        {dataLocation[kost.id][0].detail}{" "}
                        {dataLocation[kost.id][0].village}{" "}
                        {dataLocation[kost.id][0].subdistrict}{" "}
                        {dataLocation[kost.id][0].regency}
                      </>
                    )}
                  </div>
                  {dataLocation[kost.id] && dataLocation[kost.id][0] && (
                    <a href={dataLocation[kost.id][0].point_gmap}>
                      Link Google Map
                    </a>
                  )}
                <div className="rounded-3xs bg-gainsboro flex items-center justify-center py-3">
                  <div className="font-medium text-black">
                    {kost.description_kost}
                  </div>
                </div>
                <div className="rounded-3xs bg-gainsboro flex items-center justify-center py-3 gap-2">
                  <img
                    className="w-[27px] h-[25px] object-cover"
                    alt=""
                    src="/image-32@2x.png"
                  />
                  <div className="text-xl font-medium font-font text-black">
                    {calculateAverageRating(dataRating[kost.id])}
                  </div>
                </div>
                <div className="w-full rounded-3xs flex items-center py-3">
                  <p onClick={() => handleSewaKamar(kost.id)} className="text-black mr-2">Lihat daftar kamar</p>
                  <i className="fa-solid fa-chevron-right my-4 text-black"></i>
                </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageDaftarKost;
