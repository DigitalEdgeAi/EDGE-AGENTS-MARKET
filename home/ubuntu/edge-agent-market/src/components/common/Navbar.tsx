import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-brand-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Edge Agent Market Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-white">Edge Agent Market</span>
        </Link>
        <div className="space-x-4">
          <Link to="/marketplace" className="text-white hover:text-brand-gray-light transition-colors">Marketplace</Link>
          <Link to="/builder" className="text-white hover:text-brand-gray-light transition-colors">Build Agent</Link>
          <Link to="/pricing" className="text-white hover:text-brand-gray-light transition-colors">Pricing</Link>
          <Link to="/dashboard" className="text-white hover:text-brand-gray-light transition-colors">Dashboard</Link>
          <Link to="/signin" className="bg-brand-accent hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

