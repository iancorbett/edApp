import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
    >
      ← Back
    </button>
  );
};
