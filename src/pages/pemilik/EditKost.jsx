import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../axios/api";

const EditKost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [kost, setKost] = useState({
        name_kost: "",
        description_kost: "",
        image: null,
    });
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchKost = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get(`/kost/id/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setKost({
                    name_kost: response.data.name_kost,
                    description_kost: response.data.description_kost,
                    image: response.data.image,
                });
            } catch (error) {
                console.error("Error fetching kost data:", error);
            }
        };

        fetchKost();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setKost((prevKost) => ({
            ...prevKost,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name_kost", kost.name_kost);
        formData.append("description_kost", kost.description_kost);
        formData.append("file", file);

        try {
            const token = localStorage.getItem('token');
            await api.put(`/kost/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': `Bearer ${token}`
                },
            });
            navigate("/pemilik/dashboard");
        } catch (error) {
            console.error("Error updating kost:", error);
        }
    };

    return (
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik />
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <Link style={{ color: "black" }} to={"/pemilik/dashboard"}>
                            <i className="fa-solid fa-arrow-left fa-2x mb-4 "></i>
                        </Link>
                        <h1 className="text-3xl text-black pb-6 font-bold text-center">Edit Kost</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="name_kost" className="font-bold mb-2">
                                    Nama Kost:
                                </label>
                                <input
                                    type="text"
                                    id="name_kost"
                                    name="name_kost"
                                    className="border-2 rounded-lg p-2 bg-white"
                                    value={kost.name_kost}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="description_kost" className="font-bold mb-2">
                                    Deskripsi:
                                </label>
                                <textarea
                                    id="description_kost"
                                    name="description_kost"
                                    rows="4"
                                    className="border-2 rounded-lg p-2 bg-white"
                                    value={kost.description_kost}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="image" className="font-bold mb-2">
                                    Upload Foto:
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    className="border-2 rounded-lg p-2 file:bg-[#F39200] file:text-white file:font-bold file:py-2 file:px-4 file:rounded-lg file:border-none"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#F39200] text-white font-bold py-2 px-4 rounded-lg">
                                    Update Kost
                                </button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default EditKost;
