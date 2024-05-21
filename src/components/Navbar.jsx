import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/800px-CyberPeace_Logo_2023.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Load active link from localStorage on component mount
  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink !== null) {
      setActiveLink(parseInt(storedActiveLink));
    }
  }, []);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    // Store active link in localStorage
    localStorage.setItem('activeLink', index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        <button className="text-black focus:outline-none" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute right-0 top-16 bg-white shadow-md rounded-md z-10">
          <div className="flex flex-col">
            <Link to="/" className="text-black py-1 px-4 hover:bg-gray-200" onClick={() => handleNavLinkClick(0)}>
              Dashboard 
            </Link>
            <span className={`inline-block w-10 h-1 rounded-full ml-8 ${activeLink === 0 ? 'bg-green-500' : ''}`}></span>
            <Link to="/induction" className="text-black py-2 px-4 hover:bg-gray-200" onClick={() => handleNavLinkClick(1)}>
              Induction
            </Link>
            <Link to="/approve" className="text-black py-2 px-4 hover:bg-gray-200" onClick={() => handleNavLinkClick(2)}>
              Approve
            </Link>
            <span className={`inline-block w-10 h-1 rounded-full ml-8 ${activeLink === 2 ? 'bg-green-500' : ''}`}></span>
            <Link to="/manage" className="text-black py-2 px-4 hover:bg-gray-200" onClick={() => handleNavLinkClick(3)}>
              Manage 
            </Link>
            <Link to="/community" className="text-black py-2 px-4 hover:bg-gray-200" onClick={() => handleNavLinkClick(4)}>
              Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
