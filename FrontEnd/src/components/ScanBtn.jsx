import React from "react";

const ScanBtn = ({ state, onClick }) => {
  const boundaryColor = {
    idle: "border-gray-300",
    scanning: "border-blue-500",
    safe: "border-green-500",
    error: "border-red-500",
  };

  const btnText = {
    idle: "Scan",
    scanning: "Scanning...",
    safe: "Safe",
    error: "Error",
  };

  const textColor = {
    idle: "text-gray-300",
    scanning: "text-blue-500",
    safe: "text-green-500",
    error: "text-red-500",
  };

  return (
    <>
      <button
        className={`border-4 h-80 w-80 rounded-full text-3xl font-bold uppercase m-5 flex justify-center items-center ${boundaryColor[state]} ${textColor[state]}`}
        onClick={onClick}
      >
        {btnText[state]}
      </button>
    </>
  );
};

export default ScanBtn;
