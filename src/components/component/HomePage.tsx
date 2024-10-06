import React from "react";
import { useNavigate } from "react-router-dom";
import { Building, DollarSign, Users } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to RealEstate Pro</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/properties")}
        >
          <Building className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Find Your Dream Home</h2>
          <p>
            Explore our extensive listings of properties to find the perfect
            home for you and your family.
          </p>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          <DollarSign className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Sell Your Property</h2>
          <p>
            List your property with us and reach thousands of potential buyers
            in your area.
          </p>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/agents")}
        >
          <Users className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Expert Agents</h2>
          <p>
            Our team of experienced agents is here to guide you through every
            step of your real estate journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
