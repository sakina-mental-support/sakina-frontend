import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
   <div className="w-full">
      {/* Upper Navbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white shadow">
        <div>
          <a href="#">
            <img src={logo} alt="logo" className="w-[60px] h-[60px] object-contain" />
          </a>
        </div>
           {/* Search bar */}
        <div className="group">
          <input
            type="text"
            placeholder="Search..."
            className="w-[200px] group-hover:w-[300px] border border-gray-300 rounded-full px-4 py-2 outline-none transition-all duration-300"
          />
        </div>
      </div>
  {/* Lower Navbar */}
      <div className="bg-gray-100 px-6 py-2">
        {/* add nav links here */}
      </div>
    </div>
  );
};

export default Navbar;