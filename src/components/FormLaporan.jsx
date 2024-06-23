import React, { useState, useEffect } from "react";
import Swal from "../utils/sweetAlert";
import { getReportByIdUser, updateReport, deleteReport } from "../axios/report-service";

const FormLaporan = () => {
  const [isEditing, setIsEditing] = useState(null);  // Ini untuk menyimpan index dari laporan yang sedang diedit
  const [dataLaporan, setDataLaporan] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const laporanResponse = await getReportByIdUser();
      setDataLaporan(laporanResponse);
    } catch (error) {
      Swal.fire({
        title: "Gagal Mengambil Data",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };

  const handleEditClick = (index) => {
    setIsEditing(index);  
  };

  const handleSaveClick = async (index) => {
    try {
      const laporan = dataLaporan[index];  // Ambil laporan yang sedang diedit
      console.log(laporan.id);
      await updateReport(laporan.id, { description: laporan.description_report });
      setIsEditing(null);  // Reset editing index
      Swal.fire({
        title: "Success",
        text: "Report updated successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Gagal Mengupdate Data",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };

  const handleContentChange = (index, value) => {
    setDataLaporan((prevDataLaporan) =>
      prevDataLaporan.map((laporan, i) =>
        i === index ? { ...laporan, description_report: value } : laporan
      )
    );
  };

  const handleDeleteClick = async (id, index) => {
    try {
      await deleteReport(id);
      setDataLaporan((prevDataLaporan) => prevDataLaporan.filter((_, i) => i !== index));
      Swal.fire({
        title: "Success",
        text: "Report deleted successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Gagal Menghapus Data",
        text: error.response?.data?.message || "Terjadi kesalahan",
        icon: "error",
        confirmButtonText: "Coba Lagi",
      });
    }
  };

  return (
    <>
      {dataLaporan.length > 0 ? (
        dataLaporan.map((laporan, index) => (
          <div key={index} className="bg-[#D9D9D9] bg-opacity-30 w-full p-3 my-8 text-black">
            <p className="p-0 m-0 bg-transparent">{laporan.report_date}</p>
            {isEditing === index ? (
              <>
                <div className="bg-[#D9D9D9] rounded-md py-3 px-1">
                  <textarea
                    className="w-full p-2 border rounded-md bg-[#D9D9D9]"
                    value={laporan.description_report}
                    onChange={(e) => handleContentChange(index, e.target.value)}
                  />
                </div>
                <div className="flex justify-end bg-transparent my-2">
                  <button
                    className="bg-[#F39200] hover:bg-[#d37f00] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleSaveClick(index)}
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="bg-[#D9D9D9] rounded-md py-3 px-1">{laporan.description_report}</div>
                <div className="flex justify-end bg-transparent my-2">
                  <button
                    className="bg-[#D9D9D9] w-20 mx-2"
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#D9D9D9] w-20 mx-2"
                    onClick={() => handleDeleteClick(laporan.id, index)}
                  >
                    Hapus
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-black">Belum ada laporan</p>
      )}
    </>
  );
};

export default FormLaporan;
