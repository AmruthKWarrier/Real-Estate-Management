import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        RealEstate Pro
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">
          Home
        </Link>
        <Link to="/properties" className="text-gray-600 hover:text-blue-600">
          Properties
        </Link>
        <Link to="/agents" className="text-gray-600 hover:text-blue-600">
          Agents
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-blue-600">
          Contact
        </Link>
      </nav>
      <Button className="md:hidden">
        <Menu />
      </Button>
    </div>
  </header>
);

export default Header;
