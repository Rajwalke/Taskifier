import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-navy-900 to-blue-800 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold font-serif">MyApp</div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden hover:text-gold-400 transition duration-300"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
        <div className="hidden md:flex space-x-6">
          <ul className="flex">
            <li>
              <Link to="/" className="text-white hover:text-gold-400 transition duration-300 mx-3">
                Home
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-white hover:text-gold-400 transition duration-300 mx-3">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gold-400 transition duration-300 mx-3">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gold-400 transition duration-300 mx-3">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Displays under navbar */}
      <div
  className={`md:hidden ${isOpen ? "block" : "hidden"} from-navy-900 to-blue-800 space-y-2 mt-2 p-2 text-center rounded-lg shadow-md transition-all duration-500 ease-in-out`}
>
  <ul className="list-none">
    <li>
      <Link to="/" className="block text-white hover:text-gold-400 transition duration-300 py-2">
        Home
      </Link>
    </li>
    <li>
      <Link to="/feedback" className="block text-white hover:text-gold-400 transition duration-300 py-2">
        Feedback
      </Link>
    </li>
    <li>
      <Link to="/about" className="block text-white hover:text-gold-400 transition duration-300 py-2">
        About
      </Link>
    </li>
    <li>
      <Link to="/contact" className="block text-white hover:text-gold-400 transition duration-300 py-2">
        Contact
      </Link>
    </li>
  </ul>
</div>
    </nav>
  );
};

export default Navbar;