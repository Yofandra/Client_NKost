import Navbar from "../../components/NavbarPenyewa";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRoomByIdKost, getRoomByIdUser } from "../../axios/room-service";
import { createRoomRequest } from "../../axios/room-request-service";
import Swal from "../../utils/sweetAlert";

const PageSewaKamar = () => {
  const { id } = useParams();
  const [dataRoom, setDataRoom] = useState([]);
  const [dataRoomUser, setDataRoomUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const roomResponse = await getRoomByIdKost(id);
      setDataRoom(roomResponse);

      const roomUserResponse = await getRoomByIdUser();
      if (!roomUserResponse.id){
        setDataRoomUser(null);
        return
      }
      setDataRoomUser(roomUserResponse);
      
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

  const handleCreateRoomRequest = async (roomId) => {
    try {
      await createRoomRequest({ id_room : roomId});
      Swal.fire({
        title: "Success",
        text: "Room request created successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Gagal Mengajukan Sewa Kamar",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  }

  return (
    <>
      <Navbar />
      <div className="w-full px-40 relative bg-whitesmoke h-auto overflow-hidden text-left text-11xl text-black font-inter p-8">
        <div className="flex justify-start mb-4">
          <Link to={"/penyewa/daftar-kost"}>
            <i className="fa-solid fa-chevron-left fa-xl my-4 text-black"></i>
          </Link>
          <p className="text-black mx-6 text-xl">Daftar Kamar</p>
        </div>
        {dataRoom.length > 0 ? (
          dataRoom.map((room, index) => (
            <div key={index} className="flex flex-col items-start my-4 p-4 bg-gray-200 rounded-xl w-full">
              <img
                className="w-full max-w-[400px] rounded-xl h-[250px] object-cover"
                alt={`Room ${room.num_room}`}
                src={room.image}
              />
              <div className="mt-4">
                <b className="text-xl">No Kamar: {room.num_room}</b>
              </div>
              <div className="my-4">
                <b className="text-xl">Status: {room.status}</b>
              </div>
              <div className="mb-4">
                <b className="text-xl">Rp. {room.price.toLocaleString()}/Bulan</b>
              </div>
              <p className="mb-4 text-xl">
                {room.description_room}
              </p>
              {room.status === "available" && !dataRoomUser === null ? (
              <button onClick={() => (handleCreateRoomRequest(room.id))} className="cursor-pointer [border:none] py-4 px-10 bg-[#F39200] rounded-xl text-xl text-black font-inter">
                Ajukan Sewa
              </button>
              ):(
                <button className="cursor-not-allowed [border:none] py-4 px-10 bg-gray-400 rounded-xl text-xl text-black font-inter">
                Kamar Tidak Tersedia
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="text-center w-full">
            <p className="text-xl">Tidak ada data kamar tersedia</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PageSewaKamar;
