import React from 'react'

const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer