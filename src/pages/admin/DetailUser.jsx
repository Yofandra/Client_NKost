import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../axios/user-service";
import SidebarAdmin from "../../components/SidebarAdmin";
import Navbar from "../../components/NavbarPemilik";
import { Link } from "react-router-dom";

function DetailUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);  

  const fetchData = async () => {
    try {
      const userResponse = await getUserById(id);
      setUser(userResponse.data);
      console.log("User data:", userResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-gray-100 font-family-karla flex text-black">
      <SidebarAdmin />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <Navbar />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
          <Link
                to={"/admin/data-user"}
                className="flex justify-start items-center my-4 "
              >
                <i className="fa-solid fa-chevron-left my-4 text-black"></i>
                <p className="text-black mx-3 ">Data User</p>
              </Link>
            <div className="p-4 w-full">
              <h1 className="text-2xl mb-4">Detail User</h1>
              <div className="bg-white p-4 border text-black">
                {user ? (
                  <>
                    <p>
                      <strong>Id:</strong> {id}
                    </p>
                    <p>
                      <strong>Nama:</strong> {user.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                      <strong>Role:</strong> {user.role}
                    </p>
                    <p>
                      <strong>Status:</strong> {user.status}
                    </p>
                    <p>
                      <strong>Last Login:</strong> {user.last_login}
                    </p>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
