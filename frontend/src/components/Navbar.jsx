import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white h-18 flex items-center shadow-lg border-b-2 border-gray-200 fixed w-full z-100">
      {/* Expanded but centered container */}
      <div className="max-w-screen-2xl w-full mx-auto px-6 flex justify-between items-center h-full">
        {/*Logo And Name */}
        <div>
          <h2 className="text-xl font-bold">JobSeek</h2>
        </div>

        {/*NavLinks */}
        <div className="hidden md:flex justify-between gap-8">
          <a href="#">Home</a>
          <a href="#">Jobs</a>
          <a href="#">Dashboard</a>
          <a href="#">Contact</a>
        </div>

        {/*Navbuttons*/}
        <div>
          <div className="flex justify-between gap-4 items-center">
            <i className="fa-regular fa-bell text-lg"></i>
            <button className="bg-blue-500 py-2 px-4 rounded-lg text-white">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

