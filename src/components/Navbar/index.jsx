import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-full bg-emerald-600/95 text-white mr-12 mb-30 py-2 fixed top-0 left-0 z-50">
        <div className="flex justify-center">
          
          <h1 className="ml-10 bg-emerald-500 shadow-md rounded-full font-bold w-16 h-16 flex items-center justify-center p-3">
            MI
          </h1>

          <ul className="flex text-2xl justify-center items-center italic gap-10 ml-160 ">
            <li><a href="#about" className="hover:text-red-500 duration-400">About</a></li>
            <li><a href="#skills" className="hover:text-red-500 duration-400 ">Skills</a></li>
            <li><a href="#services" className="hover:text-red-500 duration-400">Services</a></li>
            <li><a href="#opensource" className="hover:text-red-500 duration-400">Opensource</a></li>
            <li><a href="#contact" className="hover:text-red-500 duration-400">Contact</a></li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
