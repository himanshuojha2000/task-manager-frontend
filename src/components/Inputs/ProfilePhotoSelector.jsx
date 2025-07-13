import React, { useRef, useState, useEffect } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

// Pass defaultImage as a prop OR hardcode it below
const defaultProfileImage = "/default-user.png"; // put your default image in public folder

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Update preview when image prop changes
  useEffect(() => {
    if (image && typeof image !== "string") {
      const preview = URL.createObjectURL(image);
      setPreviewUrl(preview);
      return () => URL.revokeObjectURL(preview);
    } else if (typeof image === "string") {
      setPreviewUrl(image);
    } else {
      setPreviewUrl(defaultProfileImage);
    }
  }, [image]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(defaultProfileImage);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      <div className="relative group">
        <img
          src={previewUrl || defaultProfileImage}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover ring-2 ring-primary"
        />

        {/* Upload (always shown) */}
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer"
          onClick={onChooseFile}
        >
          <LuUpload />
        </button>

        {/* Remove (only if custom image selected) */}
        {image && (
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -left-1 cursor-pointer"
            onClick={handleRemoveImage}
          >
            <LuTrash />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoSelector;
