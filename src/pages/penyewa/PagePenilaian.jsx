import React, { useState, useEffect } from "react";
import NavbarPemilik from "../../components/NavbarPemilik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRatingByUserId } from "../../axios/rating-service";
import api from "../../axios/api";
import Swal from "../../utils/sweetAlert";

const PagePenilaian = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [isEditMode, setIsEditMode] = useState(false);
    const [penilaian, setPenilaian] = useState({
        id_kost: "", 
        rating: "",
        comment: ""
    });

    useEffect(() => {
        const fetchPenilaian = async () => {
            try {
                const ratingResponse = await getRatingByUserId();
                console.log('API response:', ratingResponse);
                if (ratingResponse.id) {
                    setIsEditMode(true);
                    setPenilaian({
                        id_kost: ratingResponse.id_kost,
                        rating: ratingResponse.rating,
                        comment: ratingResponse.comment
                    });
                    console.log(ratingResponse)
                } else {
                    console.log("Belum melakukan penilaian");
                }
            } catch (error) {
                console.error("Error fetching penilaian data:", error);
            }
        };

        fetchPenilaian();
    }, [id]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPenilaian(prevPenilaian => ({
            ...prevPenilaian,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id_kost", id);
        formData.append("rating", penilaian.rating);
        formData.append("comment", penilaian.comment);
        try {
            const token = localStorage.getItem('token');
            if (isEditMode) {
                await api.put(`/rating/user`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        'Authorization': `Bearer ${token}`
                    },
                });
            } else {
                await api.post(`/rating`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        'Authorization': `Bearer ${token}`
                    },
                });
            }

            Swal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: `Penilaian ${isEditMode ? "diperbarui" : "ditambahkan"} dengan sukses!`,
            }).then(() => {
                navigate(`/penyewa/penilaian/${id}`);  
            });

        } catch (error) {
            console.error(`Error ${isEditMode ? "updating" : "creating"} penilaian:`, error);
            Swal.fire({
                title: "Gagal",
                text: error.response?.data?.message || "Terjadi kesalahan",
                icon: "error",
                confirmButtonText: "Coba Lagi",
            });
        }
    };

    return (
        <div className="bg-gray-100 font-family-karla flex text-black min-h-screen">
            <div className="w-full flex flex-col">
                <NavbarPemilik />
                <div className="w-full flex flex-col overflow-y-hidden border-t">
                    <main className="w-full flex-grow p-6">
                        <Link style={{ color: 'black' }} to={"/penyewa/dashboard"}>
                            <i className="fa-solid fa-arrow-left fa-2x mb-4 "></i>
                        </Link>
                        <h1 className="text-3xl text-black pb-6 font-bold text-center">Detail Penilaian</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="id_kost" className="font-bold mb-2">Id Kost:</label>
                                <div id="id_kost" name="id_kost" className="border-2 rounded-lg p-2 bg-white">{id}</div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="rating" className="font-bold mb-2">Rating:</label>
                                <input type="number" id="rating" name="rating" value={penilaian.rating} onChange={handleChange} className="border-2 rounded-lg p-2 bg-white" min="1" max="5" step="0.1" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="review" className="font-bold mb-2">Review:</label>
                                <textarea id="comment" name="comment" value={penilaian.comment} onChange={handleChange} className="border-2 rounded-lg p-2 bg-white" rows="4"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-[#F39200] text-white font-bold py-2 px-4 rounded-lg">Save Changes</button>
                            </div>
                        </form>
                    </main>
                </div> 
            </div>
        </div> 
    );
};

export default PagePenilaian;
