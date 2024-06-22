import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DataKos() {
  const [kos, setKos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/kos")
      .then((response) => {
        setKos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
    navigate(`/detail-kos/${id}`);
  };

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl mb-4">Data Kos</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="py-2 px-4 border">Id</th>
              <th className="py-2 px-4 border">Id User</th>
              <th className="py-2 px-4 border">Nama Kos</th>
              <th className="py-2 px-4 border">Deskripsi Kos</th>
              <th className="py-2 px-4 border">Gambar</th>
              <th className="py-2 px-4 border">Last Active</th>
              <th className="py-2 px-4 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kos.map((kosItem) => (
              <React.Fragment key={kosItem.id}>
                <tr className="align-top">
                  <td className="py-2 px-4 border">{kosItem.id}</td>
                  <td className="py-2 px-4 border">{kosItem.id_user}</td>
                  <td className="py-2 px-4 border">{kosItem.nama_kost}</td>
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
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td className="py-2 px-4 border">{kosItem.last_active}</td>
                  <td className="py-2 px-4 border">
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded"
                      onClick={() => handleDetailClick(kosItem.id)}
                    >
                      Detail
                    </button>
                    <button
                      className="ml-2 bg-red-500 text-white py-1 px-2 rounded"
                      onClick={() => handleDelete(kosItem.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataKos;
