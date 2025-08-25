import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 border">
        <div className="flex justify-between items-center h-16">
          
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-white"
          >
            JobSeek
          </Link>

          
          <div className="flex items-center ">
            <Link
              to="/login"
              className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-800 transition ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  text-center ml-2 me-2 mb-0.5"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white bg-blue-600 hover:bg-blue-700  focus:outline-none transition ease-in-out duration-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-0.5"
            >
              Register
            </Link>           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
