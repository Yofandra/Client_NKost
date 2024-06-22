import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataUser from "./pages/DataUser";
import DataKos from "./pages/DataKos";
import UploadAvatar from "./pages/UploadAvatar";
import DetailKos from "./pages/DetailKos";
import DetailUser from "./pages/DetailUser";
import Sidebar from "./components/Sidebar";

function App() {
  const [avatarUrl, setAvatarUrl] = useState(null);

  const handleAvatarUpload = (newAvatarUrl) => {
    setAvatarUrl(newAvatarUrl);
  };

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar avatarUrl={avatarUrl} />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/data-user" element={<DataUser />} />
            <Route path="/data-kos" element={<DataKos />} />
            <Route path="/detail-kos/:id" element={<DetailKos />} />
            <Route path="/detail-user/:id" element={<DetailUser />} />
            <Route
              path="/upload-avatar"
              element={<UploadAvatar onAvatarUpload={handleAvatarUpload} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
