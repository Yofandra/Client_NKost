import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../axios/api"; 

const EditKamar = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({
        noKamar: '',
        harga: '',
        deskripsi: '',
        idkos: '',
        uploadFoto: null
    });
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get(`/room/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
    
                setRoom({
                    noKamar: response.data.num_room, 
                    harga: response.data.price,
                    deskripsi: response.data.description,
                    idkos: response.data.id_kost,
                    uploadFoto: response.data.image,
                });
            } catch (error) {
                console.error('Error fetching room data:', error);
            }
        };
    
        fetchRoom();
    }, [id]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoom((prevRoom) => ({ 
            ...prevRoom, 
            [name]: value 
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('num_room', room.noKamar);
        formData.append('price', room.harga);
        formData.append('description_room', room.deskripsi);
        formData.append('file', file);

        try {
            const token = localStorage.getItem('token');
            await api.put(`/room/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigate(`/pemilik/edit-kamar/${id}`);
        } catch (error) {
            console.error('Error updating room:', error);
        }
    };

    return (
        <div className="bg-gray-100 font-family-karla flex text-black">
            <SidebarPemilik />
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <NavbarPemilik />
                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <Link style={{ color: 'black' }} to={`/pemilik/kelola-kamar/${room.idkos}`}>
                            <i className="fa-solid fa-arrow-left fa-2x mb-4 "></i>
                        </Link>
                        <h1 className="text-3xl text-black pb-6 font-bold text-center">Edit Kamar</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="noKamar" className="font-bold mb-2">No. Kamar:</label>
                                <input type="text" id="noKamar" name="noKamar" className="border-2 rounded-lg p-2 bg-white" placeholder="Masukkan Nomor Kamar" value={room.noKamar} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="harga" className="font-bold mb-2">Harga:</label>
                                <input type="number" id="harga" name="harga" className="border-2 rounded-lg p-2 bg-white" placeholder="Masukkan Harga" value={room.harga} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="deskripsi" className="font-bold mb-2">Deskripsi:</label>
                                <textarea id="deskripsi" name="deskripsi" rows="4" className="border-2 rounded-lg p-2 bg-white" placeholder="Masukkan Deskripsi Kamar" value={room.deskripsi} onChange={handleChange}></textarea>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="uploadFoto" className="font-bold mb-2">Upload Foto:</label>
                                <input type="file" id="uploadFoto" name="uploadFoto" className="border-2 rounded-lg p-2 file:bg-[#F39200] file:text-white file:font-bold file:py-2 file:px-4 file:rounded-lg file:border-none" onChange={handleFileChange} />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#F39200] text-white font-bold py-2 px-4 rounded-lg">Update Kamar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default EditKamar;
