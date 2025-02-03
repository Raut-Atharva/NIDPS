// Attack_Details.jsx
import React from "react";

const Attack_Details = ({ title, details, isOpen, onClick }) => {
  return (
    <div
      className="my-4 p-4 min-w-52 border rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {isOpen && <p className="mt-2 text-gray-600">{details}</p>}
      </div>
    </div>
  );
};

export default Attack_Details;
