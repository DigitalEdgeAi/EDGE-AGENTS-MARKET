import React, { useState } from 'react';

const BuilderPage: React.FC = () => {
  const [agentData, setAgentData] = useState({
    name: '',
    description: '',
    category: 'Other',
    price: '0',
    promptTemplate: '',
    // Add more fields as needed, e.g., for input/output definitions
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAgentData({ ...agentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    if (!agentData.name || !agentData.description || !agentData.promptTemplate) {
      setError('Agent Name, Description, and Prompt Template are required.');
      return;
    }

    console.log('Submitting agent data:', agentData);
    // Here you would typically send data to a backend or Netlify Function
    // For this stub, we'll just simulate a successful submission.
    
    // Netlify Forms: If using Netlify forms for submission
    const netlifyFormData = new FormData();
    Object.entries(agentData).forEach(([key, value]) => {
        netlifyFormData.append(key, value as string);
    });
    netlifyFormData.append('form-name', 'agent-builder'); // Ensure this matches a hidden form if used

    try {
        // Example of how you might post to Netlify if not using automatic detection
        // await fetch('/', {
        // method: 'POST',
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // body: new URLSearchParams(netlifyFormData as any).toString(),
        // });
        setIsSubmitted(true);
        alert('Agent submitted successfully (stub)! Check console for data.');
        setAgentData({ name: '', description: '', category: 'Other', price: '0', promptTemplate: '' });
    } catch (fetchError) {
        setError('There was an error submitting your agent. Please try again.');
        console.error('Agent submission error:', fetchError);
    }
  };

  const categories = ['Writing', 'Legal', 'Academic', 'Marketing', 'Business', 'Productivity', 'Utilities', 'Fun', 'Other'];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-brand-accent mb-8 text-center">Build Your AI Agent</h1>
        <p className="text-brand-gray-dark text-center mb-8">
          Unleash your creativity and share your AI-powered workflows with the world. Fill out the form below to define and submit your agent to the marketplace.
        </p>

        {/* Hidden Netlify form for detection if you choose to use Netlify Forms for this */}
        <form name="agent-builder" data-netlify="true" netlify-honeypot="bot-field-builder" hidden>
          <input type="hidden" name="form-name" value="agent-builder" />
          <p className="hidden"><label>Don’t fill this out: <input name="bot-field-builder" /></label></p>
          <input type="text" name="name" />
          <textarea name="description"></textarea>
          <select name="category"><option>Other</option></select>
          <input type="number" name="price" />
          <textarea name="promptTemplate"></textarea>
        </form>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-gray-dark mb-1">Agent Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={agentData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="e.g., Quick Summary Generator"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-brand-gray-dark mb-1">Short Description</label>
            <textarea 
              name="description" 
              id="description" 
              rows={3} 
              value={agentData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="A brief explanation of what your agent does."
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-brand-gray-dark mb-1">Category</label>
            <select 
              name="category" 
              id="category" 
              value={agentData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors bg-white"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-semibold text-brand-gray-dark mb-1">Price (USD)</label>
            <input 
              type="number" 
              name="price" 
              id="price" 
              value={agentData.price}
              onChange={handleChange}
              min="0" 
              step="0.01"
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="0.00 for free, e.g., 9.99"
            />
          </div>

          <div>
            <label htmlFor="promptTemplate" className="block text-sm font-semibold text-brand-gray-dark mb-1">Prompt Template / Core Logic</label>
            <textarea 
              name="promptTemplate" 
              id="promptTemplate" 
              rows={8} 
              value={agentData.promptTemplate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors font-mono text-sm"
              placeholder="Define the core prompt or logic for your agent. Use {variable_name} for user inputs. E.g., Summarize the following text: {text_to_summarize}"
              required
            ></textarea>
            <p className="text-xs text-brand-gray mt-1">Describe how your agent works. If it uses a prompt, provide the template. You can specify input fields like `{{input_name}}` which will be presented to the user.</p>
          </div>
          
          {/* Placeholder for defining input/output fields more explicitly */}
          {/* <div className="border-t border-brand-gray-light pt-6 mt-6">
            <h3 className="text-lg font-semibold text-brand-black mb-3">Define Inputs & Outputs (Advanced - Stub)</h3>
            <p className="text-sm text-brand-gray">Future: Add UI to define expected input fields (name, type, description) and output format.</p>
          </div> */}

          {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
          {isSubmitted && <p className="text-green-600 text-sm font-semibold">Agent submitted for review! Thank you.</p>}
          
          <div>
            <button 
              type="submit" 
              className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-accent transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Submit Agent for Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuilderPage;

