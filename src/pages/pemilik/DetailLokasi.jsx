import React, { useState } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { useNavigate } from "react-router-dom";

const DetailLokasi = () => {
    let navigate = useNavigate();

    const [lokasi, setLokasi] = useState({
        id: "1",
        detail: "Jln SoekarnoHatta No.4",
        desa: "Pagerwojo",
        kecamatan: "Kesamben",
        kabupaten: "Blitar",
        link: "link"
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLokasi(prevLokasi => ({
            ...prevLokasi,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (lokasi.id && lokasi.detail && lokasi.desa && lokasi.kecamatan && lokasi.kabupaten && lokasi.link) {
            updateLokasi(lokasi);
        } else {
            createLokasi(lokasi);
        }
    };

    const handleBackClick = () => {
        navigate('/pemilik/dashboard');
    };

    return (
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik />
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <i onClick={handleBackClick} className="fa-solid fa-arrow-left fa-2x mb-4"></i>
                        <h1 className="text-3xl text-black pb-6 font-bold text-center">Detail Lokasi</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="id" className="font-bold mb-2">Id Kost:</label>
                                <div type="text" id="id" name="id" className="border-2 rounded-lg p-2 bg-white">{lokasi.id}</div>
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
