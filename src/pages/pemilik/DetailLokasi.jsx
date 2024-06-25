import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../axios/api";

const DetailLokasi = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false);
    const [lokasi, setLokasi] = useState({
        id_kost: id,
        detail: "",
        desa: "",
        kecamatan: "",
        kabupaten: "",
        link: ""
    });

    useEffect(() => {
        const fetchLokasi = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get(`/location/kost/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log('API response:', response.data);
                if (response.data.length > 0) {
                    setIsEditMode(true);
                    setLokasi({
                        id_kost: response.data[0].id_kost,
                        detail: response.data[0].detail,
                        desa: response.data[0].village,
                        kecamatan: response.data[0].subdistrict,
                        kabupaten: response.data[0].regency,
                        link: response.data[0].point_gmap
                    });
                } else {
                    console.error("Data lokasi tidak ditemukan");
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token');
                    navigate('/login');
                } else {
                    console.error('Error fetching data', error);
                }
            }
        };

        fetchLokasi();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLokasi(prevLokasi => ({
            ...prevLokasi,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id_kost", lokasi.id_kost);
        formData.append("detail", lokasi.detail);
        formData.append("village", lokasi.desa);
        formData.append("subdistrict", lokasi.kecamatan);
        formData.append("regency", lokasi.kabupaten);
        formData.append("point_gmap", lokasi.link);
        try {
            if (isEditMode) {
                const token = localStorage.getItem('token');
                await api.put(`/location/${id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        'Authorization': `Bearer ${token}`
                    },
                });
            } else {
                const token = localStorage.getItem('token');
                await api.post(`/location/`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        'Authorization': `Bearer ${token}`
                    },
                });
            }
            navigate("/pemilik/dashboard");
        } catch (error) {
            console.error(`Error ${isEditMode ? "updating" : "creating"} lokasi:`, error);
        }
    };

    return (
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik />
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <Link style={{ color: 'black' }} to={"/pemilik/dashboard"}>
                            <i className="fa-solid fa-arrow-left fa-2x mb-4 "></i>
                        </Link>
                        <h1 className="text-3xl text-black pb-6 font-bold text-center">Detail Lokasi</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="id_kost" className="font-bold mb-2">Id Kost:</label>
                                <div type="text" id="id_kost" name="id_kost" className="border-2 rounded-lg p-2 bg-white">{lokasi.id_kost}</div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="detail" className="font-bold mb-2">Detail Alamat:</label>
                                <input type="text" id="detail" name="detail" value={lokasi.detail} onChange={handleChange} className="border-2 rounded-lg p-2 bg-white" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="desa" className="font-bold mb-2">Desa:</label>
                                <input type="text" id="desa" name="desa" value={lokasi.desa} onChange={handleChange} className="border-2 rounded-lg p-2 bg-white" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="kecamatan" className="font-bold mb-2">Kecamatan:</label>
                                <input type="text" id="kecamatan" name="kecamatan" value={lokasi.kecamatan} onChange={handleChange} className="border-2 rounded-lg p-2 bg-white" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="kabupaten" className="font-bold mb-2">Kabupaten / Kota</label>
                                <input type="text" id="kabupaten" name="kabupaten" value={lokasi.kabupaten} onChange={handleChange} className="border-2 rounded-lg p-2 bg-white" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="link" className="font-bold mb-2">Link Google Map</label>
                                <input type="text" id="link" name="link" value={lokasi.link} onChange={handleChange} className="border-2 rounded-lg p-2 bg-white" />
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

export default DetailLokasi;
