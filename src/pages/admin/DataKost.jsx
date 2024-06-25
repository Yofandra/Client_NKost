import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getKost } from "../../axios/kost-service";
import SidebarAdmin from "../../components/SidebarAdmin";
import Navbar from "../../components/NavbarPemilik";

function DataKos() {
  const [kos, setKos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getKost();
      setKos(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (id) => {
    const updatedKos = kos.filter((kosItem) => kosItem.id !== id);
    setKos(updatedKos);

    axios
      .delete(`http://localhost:5000/kos/${id}`)
      .then((response) => {
        console.log("Deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleDetailClick = (id) => {
    navigate(`/admin/detail-kost/${id}`);
  };

  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
      <SidebarAdmin />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <Navbar />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <div className="p-4 w-full">
              <h1 className="text-2xl mb-4">Data Kos</h1>
              <div className="overflow-x-auto">
                <table
                  className="min-w-full bg-white border"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border">Id</th>
                      <th className="py-2 px-4 border">Id User</th>
                      <th className="py-2 px-4 border">Nama Kos</th>
                      <th className="py-2 px-4 border">Deskripsi Kos</th>
                      <th className="py-2 px-4 border">Gambar</th>
                      <th className="py-2 px-4 border">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kos.map((kosItem) => (
                      <React.Fragment key={kosItem.id}>
                        <tr className="align-top">
                          <td className="py-2 px-4 border">{kosItem.id}</td>
                          <td className="py-2 px-4 border">
                            {kosItem.id_user}
                          </td>
                          <td className="py-2 px-4 border">
                            {kosItem.name_kost}
                          </td>
                          <td
                            className="py-2 px-4 border"
                            style={{
                              maxWidth: "150px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {kosItem.description_kost}
                          </td>
                          <td className="py-2 px-4 border">
                            <img
                              src={kosItem.image}
                              alt={kosItem.nama_kost}
                              className="w-full h-[150px] object-cover"
                            />
                          </td>
                          <td className="py-2 px-2 border">
                            <button
                              className="bg-blue-500 text-white py-1 px-2 rounded w-full"
                              onClick={() => handleDetailClick(kosItem.id)}
                            >
                              Detail
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DataKos;
