import React from "react";
import NetworkBG from "../assets/NetworkBG.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center"
      style={{
        height: "calc(100vh - 12vh)",
        backgroundImage: `url(${NetworkBG})`,
      }}
    >
      <div className="relative z-10 text-center ">
        <h1 className="text-5xl font-bold mb-4">
          Protect Your Network with NetworkScout
        </h1>
        <p className="text-xl mb-8">
          Harnessing Machine Learning to Identify and Mitigate Network Threats
          in Real-Time.
        </p>
        <NavLink to="/scan-network">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Start Scanning Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
