import React, { useState, useEffect } from 'react';
import AgentCard from '../components/agent/AgentCard'; // Assuming AgentCard component exists
import AgentFilter from '../components/agent/AgentFilter'; // Assuming AgentFilter component exists
import SearchBar from '../components/ui/SearchBar'; // Assuming SearchBar component exists

// Mock data for agents - replace with API call in future
const mockAgents = [
  { id: '1', title: 'SEO Blog Generator', description: 'Writes SEO-optimized blog posts.', price: 9.99, rating: 5, category: 'Writing', tags: ['seo', 'blog', 'content'] },
  { id: '2', title: 'Legal Contract Reviewer', description: 'Reviews legal contracts for risks.', price: 29.99, rating: 4, category: 'Legal', tags: ['contract', 'legal', 'review'] },
  { id: '3', title: 'Academic Citation Bot', description: 'Generates APA and MLA citations.', price: 0, rating: 4, category: 'Academic', tags: ['citation', 'research', 'apa', 'mla'] },
  { id: '4', title: 'Brand Voice Rewriter', description: 'Rewrites text in a specific brand voice.', price: 14.99, rating: 5, category: 'Marketing', tags: ['branding', 'writing', 'voice'] },
  { id: '5', title: 'Grant Proposal Maker', description: 'Drafts grant proposals.', price: 19.99, rating: 4, category: 'Business', tags: ['grant', 'proposal', 'funding'] },
  { id: '6', title: 'Meeting Notes Summarizer', description: 'Summarizes meeting notes and creates action items.', price: 5.00, rating: 5, category: 'Productivity', tags: ['summary', 'meeting', 'notes'] },
];

const MarketplacePage: React.FC = () => {
  const [agents, setAgents] = useState(mockAgents);
  const [filteredAgents, setFilteredAgents] = useState(mockAgents);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: 'all', price: 'all', rating: 'all' });

  useEffect(() => {
    let tempAgents = agents;

    // Filter by search term
    if (searchTerm) {
      tempAgents = tempAgents.filter(agent => 
        agent.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (agent.tags && agent.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    // Filter by category
    if (filters.category !== 'all') {
      tempAgents = tempAgents.filter(agent => agent.category.toLowerCase() === filters.category.toLowerCase());
    }

    // Filter by price (example logic, can be more complex)
    if (filters.price === 'free') {
      tempAgents = tempAgents.filter(agent => agent.price === 0);
    } else if (filters.price === 'paid') {
      tempAgents = tempAgents.filter(agent => agent.price > 0);
    }
    
    // Filter by rating (example logic)
    if (filters.rating !== 'all') {
        const minRating = parseInt(filters.rating, 10);
        tempAgents = tempAgents.filter(agent => agent.rating >= minRating);
    }

    setFilteredAgents(tempAgents);
  }, [searchTerm, filters, agents]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-brand-accent mb-4">Explore the Agent Marketplace</h1>
        <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
          Discover a wide variety of AI-powered agents designed to automate tasks, enhance productivity, and bring your ideas to life. Find the perfect tool for your needs.
        </p>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-grow w-full md:w-auto">
            <SearchBar onSearch={handleSearch} placeholder="Search for agents by name, keyword, or tag..." />
        </div>
        {/* AgentFilter component will be used here */}
        {/* <AgentFilter currentFilters={filters} onFilterChange={handleFilterChange} /> */}
        <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-sm text-brand-gray">Filters (coming soon)</p>
        </div>
      </div>

      {filteredAgents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAgents.map(agent => (
            <AgentCard 
              key={agent.id} 
              id={agent.id}
              title={agent.title} 
              description={agent.description} 
              price={agent.price} 
              rating={agent.rating} 
              category={agent.category}
              // imageUrl={agent.imageUrl} // Add if you have images
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-brand-gray-dark mb-4">No Agents Found</h2>
          <p className="text-brand-gray">Try adjusting your search terms or filters.</p>
        </div>
      )}
    </div>
  );
};

export default MarketplacePage;

