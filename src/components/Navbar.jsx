import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Base64 encoded placeholder logo (you can replace this with your actual logo)
  const logoBase64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyMDAgNTAiPjx0ZXh0IHg9IjEwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMjU2M2ViIj5HRyBUZWNobm9sb2d5PC90ZXh0Pjwvc3ZnPg==";

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logoBase64} alt="GG Technology" className="h-12" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Serviços
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-blue-600 font-medium">
              Soluções
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              Sobre Nós
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contato
            </Link>
          </div>

          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 font-medium">
              Serviços
            </Link>
            <Link to="/solutions" className="block text-gray-700 hover:text-blue-600 font-medium">
              Soluções
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium">
              Sobre Nós
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium">
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;