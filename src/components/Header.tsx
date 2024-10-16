import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code size={32} className="mr-2 text-blue-400" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Kevin Summersill</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          {['About', 'Experience', 'Services', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition duration-300">{item}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          {['About', 'Experience', 'Services', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 px-4 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>{item}</a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;