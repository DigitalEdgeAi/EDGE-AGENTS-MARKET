import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Search...' }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 text-brand-gray-dark border border-brand-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent shadow-sm transition-colors"
        />
        <button 
          type="submit" 
          className="absolute right-0 top-0 bottom-0 px-4 py-3 bg-brand-primary text-white rounded-r-lg hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

