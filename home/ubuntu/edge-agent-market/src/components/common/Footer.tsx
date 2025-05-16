import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-gray-light py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="/about" className="text-brand-gray hover:text-white mx-2 transition-colors">About Us</a>
          <a href="/faq" className="text-brand-gray hover:text-white mx-2 transition-colors">FAQ</a>
          <a href="/contact" className="text-brand-gray hover:text-white mx-2 transition-colors">Contact</a>
          <a href="/terms" className="text-brand-gray hover:text-white mx-2 transition-colors">Terms of Service</a>
          <a href="/privacy" className="text-brand-gray hover:text-white mx-2 transition-colors">Privacy Policy</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Edge Agent Market. All rights reserved.</p>
        <p className="text-sm">Powered by AI, Built for You.</p>
      </div>
    </footer>
  );
};

export default Footer;

