import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <p>&copy; 2024 RealEstate Pro. All rights reserved.</p>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <Link to="/about" className="mr-4 hover:text-blue-400">
            About
          </Link>
          <Link to="/contact" className="mr-4 hover:text-blue-400">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-blue-400">
            Privacy Policy
          </Link>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
