import React, { useState, useEffect } from "react";
import SidebarPemilik from "../../components/SidebarPemilik";
import NavbarPemilik from "../../components/NavbarPemilik";
import bintang from "../../assets/images/bintang.png";
import { Link, useParams } from "react-router-dom";
import api from '../../axios/api';

const Penilaian = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get(`/rating/kost/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setReviews(response.data || []);
      } catch (error) {
        console.error('Error fetching reviews:', error.response ? error.response.data : error.message);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
      <SidebarPemilik />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavbarPemilik />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <Link style={{ color: 'black' }} to={"/pemilik/daftar-kost-penilaian"}>
              <i className="fa-solid fa-arrow-left fa-2x mb-4 "></i>
            </Link>
            <h1 className="text-3xl text-black pb-6">Penilaian</h1>
            {Array.isArray(reviews) && reviews.map(review => (
              <div key={review.id} className="bg-[#D9D9D9] bg-opacity-30 w-full p-3 my-8 text-black">
                <p className="p-0 m-0 bg-transparent">{review.penyewa.name}</p>
                <div className="flex items-center my-2">
                  <img src={bintang} alt="bintang" className="w-5 mr-2"/>
                  <p className="p-0 m-0 bg-transparent">{review.ratings}</p>
                </div>
                <div className="bg-[#D9D9D9] rounded-md py-3 px-1">{review.comment}</div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Penilaian;
