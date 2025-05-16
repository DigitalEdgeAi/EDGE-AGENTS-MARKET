import React from 'react';
import { Link } from 'react-router-dom';

interface AgentCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  imageUrl?: string; // Optional image URL for the agent
}

const AgentCard: React.FC<AgentCardProps> = ({ id, title, description, price, rating, category, imageUrl }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col overflow-hidden h-full">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      {!imageUrl && (
         <div className="w-full h-48 bg-brand-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-1">{category}</span>
        <h3 className="text-xl font-bold text-brand-black mb-2 truncate" title={title}>{title}</h3>
        <p className="text-brand-gray text-sm mb-3 flex-grow min-h-[60px]">
          {description.length > 100 ? `${description.substring(0, 97)}...` : description}
        </p>
        <div className="flex items-center mb-3">
          {renderStars()}
          <span className="ml-2 text-sm text-brand-gray">({rating.toFixed(1)})</span>
        </div>
        <div className="text-2xl font-extrabold text-brand-primary mb-4">
          {price === 0 ? 'Free' : `$${price.toFixed(2)}`}
        </div>
        <Link 
          to={`/agent/${id}`}
          className="mt-auto w-full text-center bg-brand-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-brand-accent transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AgentCard;

