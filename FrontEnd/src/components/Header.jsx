import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex justify-between p-3 items-center border-b z-50  bg-blur sticky top-0">
      <NavLink to="/">
        <h1 className="text-3xl font-semibold px-10 py-4">NetworkScout</h1>
      </NavLink>
      <ul className="flex gap-10 text-xl font-semibold px-10">
        <NavLink to="/">
          <li className="nav_links">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li className="nav_links">About</li>
        </NavLink>
        <NavLink to="/scan-network">
          <li className="nav_links">Scan</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
