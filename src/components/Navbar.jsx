import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/800px-CyberPeace_Logo_2023.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    
  };

  return (
    <nav className="p-4 pl-2 flex items-center justify-between w-screen bg-slate-200"> {/* Adjusted left padding */}
      <Link to="https://www.cyberpeace.org/">
      <div className="flex items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-28 h-18 mr-4 rounded-full" />
        <span className="text-black font-semibold text-lg"></span>
      </div>
      </Link>
      <div className="hidden md:flex flex-grow justify-center">
        {/* Navbar Links */}
        <Link
          to="/"
          onClick={() => handleNavLinkClick(0)}
          className={`text-black px-4 py-2 rounded-md `}
        >
          <span className={`inline-block h-3 w-3 rounded-full mr-2 ${activeLink === 0 ? 'bg-green-500' : 'bg-gray-400'}`}></span>
          Dashboard
        </Link>
        <Link
          to="/induction"
          onClick={() => handleNavLinkClick(1)}
          className={`text-black px-4 py-2 rounded-md `}
        >
          <span className={`inline-block h-3 w-3 rounded-full mr-2 ${activeLink === 1 ? 'bg-green-500' : 'bg-gray-400'}`}></span>
          Induction
        </Link>
        <Link
          to="/approve"
          onClick={() => handleNavLinkClick(2)}
          className={`text-black px-4 py-2 rounded-md `}
        >
          <span className={`inline-block h-3 w-3 rounded-full mr-2 ${activeLink === 2 ? 'bg-green-500' : 'bg-gray-400'}`}></span>
          Approve
        </Link>
        <Link
          to="/manage"
          onClick={() => handleNavLinkClick(3)}
          className={`text-black px-4 py-2 rounded-md`}
        >
          <span className={`inline-block h-3 w-3 rounded-full mr-2 ${activeLink === 3 ? 'bg-green-500' : 'bg-gray-400'}`}></span>
          Manage 
        </Link>
        <Link
          to="/community"
          onClick={() => handleNavLinkClick(4)}
          className={`text-black px-4 py-2 rounded-md`}
        >
          <span className={`inline-block h-3 w-3 rounded-full mr-2 ${activeLink === 4 ? 'bg-green-500' : 'bg-gray-400'}`}></span>
          Community
        </Link>
      </div>
      <div className="md:hidden flex">
        {/* Mobile Menu */}
        <button className="text-black focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;