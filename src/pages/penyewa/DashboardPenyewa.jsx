import Size24pxIcon from "../../components/Size24pxIcon";
import Navbar from "../../components/NavbarPenyewa";
import yellowStar from "../../assets/images/yellow-star.png";
import logoUser from "../../assets/images/logo-user.png";
import blackStar from "../../assets/images/black-star.png";
import { Link } from "react-router-dom";
import Swal from "../../utils/sweetAlert";
import { useEffect, useState } from "react";
import { getKostByRoom } from "../../axios/kost-service";
import { getLocationByIdKost } from "../../axios/location-service";
import { getRatingByIdKost } from "../../axios/rating-service";
import { getUserById } from "../../axios/user-service"; // Tambahkan ini

const DashboardPenyewa = () => {
  const [dataKost, setDataKost] = useState(null);
  const [dataLocation, setDataLocation] = useState(null);
  const [dataRating, setDataRating] = useState(null);
  const [userDetails, setUserDetails] = useState({}); // Untuk menyimpan detail pengguna

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const kostResponse = await getKostByRoom();
      setDataKost(kostResponse);

      const locationResponse = await getLocationByIdKost(kostResponse.id);
      setDataLocation(locationResponse);

      const ratingResponse = await getRatingByIdKost(kostResponse.id);
      setDataRating(ratingResponse);

      const userResult = await Promise.all(
        ratingResponse.map(async (rating) => {
          const userResponse = await getUserById(rating.id_user);
          return { id_user: rating.id_user, user: userResponse.data };
        })
      );

      const userDetailsMap = userResult.reduce((acc, { id_user, user }) => {
        acc[id_user] = user;
        return acc;
      }, {});

      setUserDetails(userDetailsMap);

      console.log("Data Location:", dataLocation);
      console.log("Data Kost:", dataKost);
      console.log("Data Rating:", dataRating);
      console.log("User Details:", userDetails);
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
      {dataKost ? (
        <>
          <div className="w-full">
            <div className="flex justify-end mr-28">
              <Link
                to={"/penyewa/kamar-saya"}
                className="flex justify-center my-4 mx-12"
              >
                <p className="text-black mx-3 text-xl">Kamar Saya</p>
                <i className="fa-solid fa-chevron-right fa-xl my-4 text-black"></i>
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                className="w-1/2"
                src={dataKost.image}
                alt={dataKost.url_image}
              />
            </div>
            {dataKost && dataLocation && (
              <div className="mx-28 text-black my-8">
                <b className="text-xl">{dataKost.name_kost}</b>
                <p>
                  {dataLocation.length > 0 && (
                    <>
                      {dataLocation[0].detail} {dataLocation[0].village}{" "}
                      {dataLocation[0].subdistrict} {dataLocation[0].regency}
                    </>
                  )}
                </p>
                {dataLocation.length > 0 && (
                  <a
                    href={dataLocation[0].point_gmap}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link Google Map
                  </a>
                )}
              </div>
            )}
            <div className="mx-28 text-black">
              <b className="text-xl">Deskripsi Kost:</b>
              <p>{dataKost.description_kost}</p>
            </div>
            <div className="flex justify-between mt-24">
              <div className="flex justify-center mx-28">
                <img className="w-8 h-8" src={yellowStar} alt="" />
                <b className="text-black mx-4 text-xl">
                  {dataRating ? dataRating.length : 0} reviews
                </b>
              </div>
              <div className="flex mr-28">
                <Link className="flex justify-center my-4 mx-12">
                  <p className="text-black mx-3 text-xl">Nilai</p>
                  <i className="fa-solid fa-chevron-right fa-xl my-4 text-black"></i>
                </Link>
              </div>
            </div>
            {dataRating && dataRating.length > 0 && (
              <div className="mx-28">
                {dataRating.map((rating, index) => (
                  <div key={index} className="flex my-4">
                    <img className="w-10 h-fit" src={logoUser} alt="" />
                    <div className="mx-8 my-2 text-black">
                      <b className="text-xl">
                        {userDetails[rating.id_user]?.name || "User"}
                      </b>
                      <div className="flex mt-2">
                        <img className="w-5 h-fit" src={blackStar} alt="" />
                        <p className="mx-2">{rating.score}</p>
                      </div>
                      <p>{rating.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-end mr-28 mt-28">
              <Link className="flex justify-center my-4 mx-12">
                <p className="text-black mx-3 text-xl">Lihat Daftar Kost</p>
                <i className="fa-solid fa-chevron-right fa-xl my-4 text-black"></i>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            className="absolute h-[2.54%] w-[3.47%] top-[4.95%] right-[6.6%] bottom-[92.51%] left-[89.93%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-2552.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[40px] right-[107px] w-[214px] h-[67px]">
            <div className="absolute top-[0px] right-[0px] w-[214px] h-[67px]">
              <div className="absolute top-[22px] right-[53px] text-[20px] font-medium font-inter text-darkolivegreen text-left">
                Lihat Daftar Kost
              </div>
              <Size24pxIcon
                size24pxIconSize24px="/chevronright.svg"
                size24pxIconWidth="54px"
                size24pxIconHeight="67px"
                size24pxIconPosition="absolute"
                size24pxIconTop="0px"
                size24pxIconLeft="160px"
              />
            </div>
          </button>
          <div className="absolute top-[1064px] left-[93px] w-6 h-6">
            <div className="absolute top-[0px] left-[0px] w-6 h-6" />
          </div>
          <b className="absolute top-[46px] left-[118px]">
            Anda Belum Menyewa Kost
          </b>
        </>
      )}
    </>
  );
};

export default DashboardPenyewa;
