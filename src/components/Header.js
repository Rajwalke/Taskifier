import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">MyApp</div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu for tablet and desktop */}
        <div className="hidden md:flex space-x-4">
          <ul className="flex">
          <li > <Link to="/" className="text-white hover:text-gray-700 mx-3" >Home</Link></li>
          <li  className="text-white hover:text-gray-700 mx-3">Feedback</li>
          <li>  <Link to="/About" className="text-white hover:text-gray-700 mx-3" > About</Link></li>
          <li  className="text-white hover:text-gray-700 mx-3">Contact</li>
          </ul>
        
        </div>
      </div>

      {/* Mobile Dropdown Menu - Displays under navbar */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700 space-y-2 mt-2 p-2 text-center mb-3`}>
        <ul className="list-none">

        <li className=""><Link to="/" className="block text-white hover:text-gray-700" >Home</Link></li>
        <li className="block text-white hover:text-gray-700">Feedback</li>
        <li><Link to="/About" className="block text-white hover:text-gray-700" > About</Link></li> 
        <li className="block text-white hover:text-gray-700">Contact</li>
        
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
