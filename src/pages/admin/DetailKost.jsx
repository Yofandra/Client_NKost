import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailKos() {
  const { id } = useParams();
  const [kos, setKos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/kos/${id}`)
      .then((response) => {
        setKos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!kos) {
    return <div>No data found for ID: {id}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Detail Kos {kos.nama_kost}</h1>
      <div className="border p-4">
        <p>
          <strong>ID:</strong> {kos.id}
        </p>
        <p>
          <strong>ID User:</strong> {kos.id_user}
        </p>
        <p>
          <strong>Nama Kost:</strong> {kos.nama_kost}
        </p>
        <p>
          <strong>Deskripsi:</strong> {kos.description_kost}
        </p>
        <p>
          <strong>Last Active:</strong> {kos.last_active}
        </p>
        <img
          src={kos.image}
          alt={kos.nama_kost}
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </div>
  );
}

export default DetailKos;
