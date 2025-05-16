import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <section className="bg-brand-white py-20 rounded-lg shadow-xl">
        <div className="max-w-4xl mx-auto">
          <img src="/logo.svg" alt="Edge Agent Market Logo" className="mx-auto mb-6 w-24 h-24" />
          <h1 className="text-5xl font-extrabold mb-4 text-brand-accent">Edge | Agents Marketplace</h1>
          <p className="text-xl mb-8 text-brand-gray-dark">
            Automate Everything. Sell Your Genius.<br />
            Buy, build, or sell AI-powered workflows — no code required.
          </p>
          <div className="space-x-4">
            <Link 
              to="/marketplace"
              className="inline-block px-10 py-4 rounded-xl font-bold bg-brand-primary text-white hover:bg-brand-accent transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Browse Agents
            </Link>
            <Link 
              to="/builder"
              className="inline-block px-10 py-4 rounded-xl font-bold bg-brand-gray-light text-brand-accent hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Build an Agent
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-10 text-brand-black">Featured Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for Agent Cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-brand-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">{i}</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-accent">Agent Title {i}</h3>
              <p className="text-brand-gray mb-3">Short description of the agent and its capabilities.</p>
              <p className="font-bold text-brand-primary mb-4">$9.99</p>
              <Link to={`/agent/${i}`} className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-accent transition-colors">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-accent text-white py-20 my-16 rounded-lg shadow-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join our marketplace today and unlock the power of AI automation. Whether you're looking to use powerful agents or build and sell your own, Edge Agent Market is the place for you.
          </p>
          <Link 
            to="/signup"
            className="inline-block px-10 py-4 rounded-xl font-bold bg-white text-brand-accent hover:bg-brand-gray-light transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Placeholder for Pricing Section - to be replaced with PricingTable component */}
      <section className="py-16" id="pricing">
        <h2 className="text-3xl font-bold mb-10 text-brand-black">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
          <div className="rounded-xl bg-sky-50 p-6 shadow text-center border-2 border-transparent hover:border-brand-primary transition-all">
            <h3 className="font-bold text-2xl mb-2 text-brand-accent">Free</h3>
            <p className="text-brand-gray">• Use free agents<br/>• Browse marketplace</p>
            <div className="text-4xl font-extrabold mt-4 text-brand-primary">$0</div>
            <button className="mt-6 w-full bg-brand-primary text-white py-3 rounded-lg font-semibold hover:bg-brand-accent transition-colors">Get Started</button>
          </div>
          <div className="rounded-xl bg-sky-100 p-6 shadow-lg border-2 border-brand-primary text-center scale-105 transform">
            <h3 className="font-bold text-2xl mb-2 text-brand-accent">Pro</h3>
            <p className="text-brand-gray">• Unlimited premium agents<br/>• Agent builder<br/>• Earn commission</p>
            <div className="text-4xl font-extrabold mt-4 text-brand-primary">$29/mo</div>
            <button className="mt-6 w-full bg-brand-primary text-white py-3 rounded-lg font-semibold hover:bg-brand-accent transition-colors">Go Pro</button>
          </div>
          <div className="rounded-xl bg-sky-50 p-6 shadow text-center border-2 border-transparent hover:border-brand-primary transition-all">
            <h3 className="font-bold text-2xl mb-2 text-brand-accent">Team</h3>
            <p className="text-brand-gray">• Teams/white-label<br/>• API integrations<br/>• Priority support</p>
            <div className="text-4xl font-extrabold mt-4 text-brand-primary">$79/mo</div>
            <button className="mt-6 w-full bg-brand-primary text-white py-3 rounded-lg font-semibold hover:bg-brand-accent transition-colors">Contact Us</button>
          </div>
        </div>
        <p className="text-xs text-brand-gray mt-6 text-center">20% commission on agent sales (waived for teams).</p>
      </section>
    </div>
  );
};

export default HomePage;

