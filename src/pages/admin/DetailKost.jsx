import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getKostById } from "../../axios/kost-service";
import Sidebar from "../../components/SidebarAdmin";
import Navbar from "../../components/NavbarPemilik";
import { Link } from "react-router-dom";

function DetailKos() {
  const { id } = useParams();
  const [kost, setKost] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await getKostById(id);
      setKost(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
      <Sidebar />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <Navbar />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
          <Link
                to={"/admin/data-kost"}
                className="flex justify-start items-center my-4 "
              >
                <i className="fa-solid fa-chevron-left my-4 text-black"></i>
                <p className="text-black mx-3 ">Data Kost</p>
              </Link>
            <div className="p-4">
              <h1 className="text-2xl mb-4">Detail Kos</h1>
              <div className="border p-4">
                {kost ? (
                  <>
                    <p>
                      <strong>ID:</strong> {kost.id}
                    </p>
                    <p>
                      <strong>ID User:</strong> {kost.id_user}
                    </p>
                    <p>
                      <strong>Nama Kost:</strong> {kost.name_kost}
                    </p>
                    <p>
                      <strong>Deskripsi:</strong> {kost.description_kost}
                    </p>
                    <img
                      src={kost.image}
                      alt={kost.nama_kost}
                      className="w-[500px] h-fit"
                    />
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DetailKos;
