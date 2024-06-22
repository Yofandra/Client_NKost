import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user detail:", error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl mb-4">Detail User</h1>
      <div className="bg-white p-4 border">
        <p>
          <strong>Id:</strong> {user.id}
        </p>
        <p>
          <strong>Nama:</strong> {user.nama}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Password:</strong> {user.password}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Status:</strong> {user.status}
        </p>
        <p>
          <strong>Last Login:</strong> {user.lastLogin}
        </p>
      </div>
    </div>
  );
}

export default DetailUser;
