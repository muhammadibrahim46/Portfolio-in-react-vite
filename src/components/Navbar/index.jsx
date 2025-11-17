
import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-full bg-emerald-600/95 text-white mr-12  mb-30 py-3">
       <div className="  flex justify-center   ">
          <h1 className="ml-10  bg-emerald-500 shadow-md rounded-full  font-bold w-14 h-14 flex items-center  justify-center p-3">MI</h1>
           <ul className="flex text-lg  justify-center items-center  italic gap-10  ml-160">
            <li><a href="#" className="hover:text-red-500">About</a></li>
              <li><a href="#" className="hover:text-red-500">Skills</a></li>
               <li><a href="#" className="hover:text-red-500">Services</a></li>
                <li><a href="#" className="hover:text-red-500">Opensource</a></li>
                 <li><a href="#" className="hover:text-red-500">Contact</a></li>
           </ul>
       </div>
     </nav>
    </>
  );
}

export default Navbar;
