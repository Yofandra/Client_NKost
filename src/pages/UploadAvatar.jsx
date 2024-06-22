import React from "react";

function UploadAvatar({ onAvatarUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const newAvatarUrl = e.target.result;

      onAvatarUpload(newAvatarUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl mb-4">Upload Avatar</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default UploadAvatar;
