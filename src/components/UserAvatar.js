"use client";
import { useEffect, useState } from "react";

export default function UserAvatar({ UserImage }) {
  const [imageError, setImageError] = useState(false);
  useEffect(() => {
    if (UserImage) {
      const img = new Image();
      img.src = UserImage;
      img.onload = () => setImageError(false);
      img.onerror = () => setImageError(true);
    }
  }, [UserImage]);

  return (
    <>
      {imageError ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            fill="#5e81ac"
            d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"
          />
          <circle cx="10" cy="5.5" r="4.5" fill="#5e81ac" />
        </svg>
      ) : (
        <img
          src={UserImage}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      )}
    </>
  );
}
