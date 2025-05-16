import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data for agents - replace with API call in future
const mockAgents = [
  { id: '1', title: 'SEO Blog Generator', description: 'Writes SEO-optimized blog posts about any topic you provide. Generates engaging content that ranks well on search engines.', price: 9.99, rating: 5, category: 'Writing', tags: ['seo', 'blog', 'content'], creator: 'AI Wizards', longDescription: 'Our SEO Blog Generator leverages advanced NLP models to create high-quality, original blog posts tailored to your keywords. It helps you save time on content creation while boosting your online visibility. Features include keyword optimization, meta description generation, and multiple tone options.', demoInput: [{label: 'Topic', type: 'text', placeholder: 'e.g., Renewable Energy Trends'}], demoOutput: 'Text area with generated blog post...' },
  { id: '2', title: 'Legal Contract Reviewer', description: 'Reviews legal contracts for risks and provides a summary.', price: 29.99, rating: 4, category: 'Legal', tags: ['contract', 'legal', 'review'], creator: 'LegalTech Solutions', longDescription: 'Upload your legal contracts and our AI will analyze them for potential risks, ambiguities, and missing clauses. Get a comprehensive report in minutes. Ideal for small businesses and individuals. Supports various contract types.', demoInput: [{label: 'Upload Contract (PDF/DOCX)', type: 'file'}], demoOutput: 'Summary of risks and suggestions.' },
  { id: '3', title: 'Academic Citation Bot', description: 'Generates APA, MLA, Chicago, and Harvard citations.', price: 0, rating: 4, category: 'Academic', tags: ['citation', 'research', 'apa', 'mla', 'chicago', 'harvard'], creator: 'Study Savers', longDescription: 'Never struggle with citations again! Our Academic Citation Bot supports multiple formatting styles and can generate citations from URLs, DOIs, or manual input. Ensures accuracy and saves you valuable time on your research papers.', demoInput: [{label: 'Source Information (URL, DOI, Title, Author, etc.)', type: 'textarea', placeholder: 'Paste URL or enter details...'}], demoOutput: 'Formatted citations in selected styles.' },
  { id: '4', title: 'Brand Voice Rewriter', description: 'Rewrites text in a specific brand voice or tone.', price: 14.99, rating: 5, category: 'Marketing', tags: ['branding', 'writing', 'voice', 'tone'], creator: 'Marketing Masters', longDescription: 'Maintain a consistent brand voice across all your communications. Input your text and select your desired brand personality (e.g., formal, witty, empathetic), and our AI will rewrite it accordingly. Perfect for marketing copy, social media posts, and customer service scripts.', demoInput: [{label: 'Original Text', type: 'textarea'}, {label: 'Desired Brand Voice', type: 'select', options: ['Formal', 'Witty', 'Empathetic', 'Authoritative']}], demoOutput: 'Rewritten text in the chosen voice.'},
  { id: '5', title: 'Grant Proposal Maker', description: 'Drafts grant proposals for various purposes.', price: 19.99, rating: 4, category: 'Business', tags: ['grant', 'proposal', 'funding', 'nonprofit'], creator: 'Funding Finders Co.', longDescription: 'Struggling to write compelling grant proposals? Our AI assistant helps you structure and draft effective proposals. Just provide the necessary information about your project and funding needs, and get a well-written draft to get you started.', demoInput: [{label: 'Project Purpose', type: 'text'}, {label: 'Organization Info', type: 'textarea'}, {label: 'Funding Amount Requested', type: 'number'}], demoOutput: 'Draft of the grant proposal.'},
  { id: '6', title: 'Meeting Notes Summarizer', description: 'Summarizes meeting notes and creates action items.', price: 5.00, rating: 5, category: 'Productivity', tags: ['summary', 'meeting', 'notes', 'action items'], creator: 'Productivity Pro', longDescription: 'Transform lengthy meeting transcripts or notes into concise summaries with clear action items. Our AI identifies key discussion points, decisions, and tasks, helping you stay organized and ensure follow-through. Supports text input and audio file uploads (future feature).', demoInput: [{label: 'Paste Meeting Notes', type: 'textarea'}], demoOutput: 'Summary and list of action items.'}
];

const AgentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const agent = mockAgents.find(a => a.id === id);

  if (!agent) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-semibold text-brand-gray-dark mb-4">Agent Not Found</h2>
        <p className="text-brand-gray mb-6">We couldn't find the agent you were looking for.</p>
        <Link to="/marketplace" className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-accent transition-colors">
          Back to Marketplace
        </Link>
      </div>
    );
  }

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i <= agent.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Left Column: Image/Placeholder & Basic Info */}
          <div className="md:w-1/3 bg-gradient-to-br from-brand-primary to-brand-accent p-8 text-white flex flex-col items-center justify-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              {/* Placeholder for agent icon/image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-brand-primary opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-center mb-2">{agent.title}</h1>
            <p className="text-sky-200 text-center text-sm mb-4">By {agent.creator}</p>
            <div className="flex items-center mb-4">
              {renderStars()}
              <span className="ml-2 text-sky-100">({agent.rating.toFixed(1)} stars)</span>
            </div>
            <div className="text-4xl font-extrabold mb-6">
              {agent.price === 0 ? 'Free' : `$${agent.price.toFixed(2)}`}
            </div>
            <button className="w-full bg-white text-brand-accent font-bold py-3 px-6 rounded-lg hover:bg-sky-100 transition-colors shadow-md hover:shadow-lg transform hover:scale-105">
              {agent.price === 0 ? 'Use Agent for Free' : 'Buy Agent Now'}
            </button>
            {agent.price > 0 && <button className="mt-3 w-full bg-transparent border-2 border-sky-300 text-sky-100 font-semibold py-3 px-6 rounded-lg hover:bg-sky-100 hover:text-brand-accent transition-colors">
              Try Demo
            </button>}
          </div>

          {/* Right Column: Detailed Info & Interaction */}
          <div className="md:w-2/3 p-8">
            <div className="mb-6">
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-1">{agent.category}</span>
              <h2 className="text-2xl font-semibold text-brand-black mb-3">Agent Overview</h2>
              <p className="text-brand-gray-dark leading-relaxed">{agent.longDescription || agent.description}</p>
            </div>

            {agent.tags && agent.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-brand-black mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map(tag => (
                    <span key={tag} className="bg-brand-gray-light text-brand-accent text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Demo Interaction Area */}
            <div className="bg-brand-gray-light p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold text-brand-black mb-4">Try it Out (Demo)</h3>
                {agent.demoInput && agent.demoInput.map((inputField, index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-sm font-medium text-brand-gray-dark mb-1">{inputField.label}</label>
                        {inputField.type === 'text' && <input type="text" placeholder={inputField.placeholder} className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" />}
                        {inputField.type === 'textarea' && <textarea placeholder={inputField.placeholder} rows={4} className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary"></textarea>}
                        {inputField.type === 'file' && <input type="file" className="w-full text-sm text-brand-gray-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary file:text-white hover:file:bg-brand-accent" />}
                        {inputField.type === 'select' && inputField.options && (
                            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary">
                                {inputField.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        )}
                         {inputField.type === 'number' && <input type="number" placeholder={inputField.placeholder} className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" />}
                    </div>
                ))}
                <button className="bg-brand-accent text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-700 transition-colors">
                    Run Demo
                </button>
                {agent.demoOutput && (
                    <div className="mt-6">
                        <h4 className="text-md font-semibold text-brand-black mb-2">Output:</h4>
                        <div className="bg-white p-4 rounded-md border border-gray-300 min-h-[100px]">
                            <p className="text-sm text-brand-gray-dark italic">{typeof agent.demoOutput === 'string' ? agent.demoOutput : 'Output will appear here...'}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Placeholder for Reviews Section */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-black mb-4">User Reviews</h3>
              <div className="border-t border-brand-gray-light pt-6">
                <p className="text-brand-gray italic">Reviews are not yet available for this agent.</p>
                {/* Example Review Structure (to be dynamic) */}
                {/* <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center mb-1">
                    <p className="font-semibold text-brand-black mr-2">User Name</p>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                  <p className="text-brand-gray-dark text-sm">Great agent, very helpful!</p>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailPage;

