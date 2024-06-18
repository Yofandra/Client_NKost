// src/components/EditableComponent.jsx
import React, { useState } from "react";

const FormLaporan = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, qui recusandae? Expedita nulla voluptatibus sequi, placeat voluptatum accusamus impedit eaque cupiditate corporis minus eligendi, accusantium exercitationem. Assumenda sunt nostrum autem."
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="bg-[#D9D9D9] bg-opacity-30 w-full p-3 my-8 text-black">
      <p className="p-0 m-0 bg-transparent">15/06/2024</p>
      {isEditing ? (
        <>
          <div className="bg-[#D9D9D9] rounded-md py-3 px-1">
            <textarea
              className="w-full p-2 border rounded-md  "
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <div className="flex justify-end bg-transparent my-2">
            <button
              className="bg-[#F39200] hover:bg-[#d37f00] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#D9D9D9] rounded-md py-3 px-1">{content}</div>
          <div className="flex justify-end bg-transparent my-2">
            <button
              className="bg-[#D9D9D9] w-20 mx-2"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button className="bg-[#D9D9D9] w-20 mx-2">Hapus</button>
          </div>
        </>
      )}
    </div>
  );
};

export default FormLaporan;
