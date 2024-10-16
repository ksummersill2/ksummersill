import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Kevin Summersill. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition duration-300"><Github /></a>
            <a href="#" className="hover:text-blue-400 transition duration-300"><Linkedin /></a>
            <a href="#" className="hover:text-blue-400 transition duration-300"><Twitter /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>Empowering organizations through innovative IT solutions and DevSecOps excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;