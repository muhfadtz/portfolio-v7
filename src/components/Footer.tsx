import React from 'react';
import { Github as GitHub, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com/muhfadtz" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
              <GitHub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/fadhlan-tanjung-a94b7929a/" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/narwha1_/" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
              <Instagram size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=onenarwhal1@gmail.com" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            ©{new Date().getFullYear()} Narwhal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;