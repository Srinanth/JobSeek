import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      
      <section className="text-center py-16 px-4 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Jobs That Match Your Skills
        </h1>
        <p className="text-lg mb-8">
          Tailored job suggestions based on YOU
        </p>

        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Keyword"
            className="px-4 py-2 rounded w-full md:w-1/3 border bg-white border-gray-300 text-black"
          />
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-2 rounded w-full md:w-1/3 border bg-white border-gray-300 text-black"
          />
          <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 w-full md:w-auto cursor-pointer">
            Search 🔍
          </button>
        </div>
      </section>

      
      <section className="py-16 bg-white dark:bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Resume Upload</h3>
            <p>Upload your resume and let employers find you easily.</p>
          </div>

          
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Skill Matching</h3>
            <p>We find jobs based on the skills you add to your profile.</p>
          </div>

          
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Smart Suggestions</h3>
            <p>AI-powered recommendations tailored to your goals.</p>
          </div>
        </div>
      </section>

      
      <footer className="bg-white mt-10  w-full">
        <div className=" max-w-6xl mx-auto p-4 text-center md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">JobSeek</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-blue-600 sm:mb-0 ">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
          </div>
          <hr className="my-6 border-gray-200 w-full sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-black sm:text-center ">© 2025 <a href="#" className="hover:underline text-blue-600">JobSeek™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
