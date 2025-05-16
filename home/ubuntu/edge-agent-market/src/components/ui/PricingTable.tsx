import React from 'react';

interface PricingTierProps {
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  buttonText: string;
  onButtonClick: () => void;
  commissionNote?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ name, price, features, isFeatured, buttonText, onButtonClick, commissionNote }) => {
  return (
    <div 
      className={`rounded-xl p-8 shadow-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 
        ${isFeatured ? 'bg-sky-100 border-2 border-brand-primary scale-105' : 'bg-white border-2 border-transparent hover:border-brand-primary'}`}
    >
      <h3 className="font-bold text-2xl mb-3 text-brand-accent">{name}</h3>
      <ul className="text-brand-gray mb-6 space-y-2 min-h-[100px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-5xl font-extrabold mt-4 mb-6 text-brand-primary">{price}</div>
      <button 
        onClick={onButtonClick}
        className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 
          ${isFeatured ? 'bg-brand-primary text-white hover:bg-brand-accent' : 'bg-brand-gray-light text-brand-accent hover:bg-gray-200'}`}
      >
        {buttonText}
      </button>
      {commissionNote && <p className="text-xs text-brand-gray mt-4">{commissionNote}</p>}
    </div>
  );
};

const PricingTable: React.FC = () => {
  const tiers: Omit<PricingTierProps, 'onButtonClick'>[] = [
    {
      name: 'Free',
      price: '$0',
      features: ['Use free agents', 'Browse marketplace', 'Limited agent interactions'],
      buttonText: 'Get Started',
    },
    {
      name: 'Pro',
      price: '$29/mo',
      features: ['Unlimited premium agents', 'Agent builder access', 'Earn commission on sales', 'Priority support'],
      isFeatured: true,
      buttonText: 'Go Pro',
    },
    {
      name: 'Team',
      price: '$79/mo',
      features: ['All Pro features', 'Team collaboration tools', 'White-label options', 'API access (soon)'],
      buttonText: 'Contact Us',
    },
  ];

  const handleTierClick = (tierName: string) => {
    // Placeholder for Stripe integration or contact form
    console.log(`${tierName} plan selected`);
    alert(`You selected the ${tierName} plan. Payment integration is a stub for now.`);
  };

  return (
    <section className="py-16 bg-brand-gray-light rounded-lg" id="pricing-table">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-accent mb-4">Flexible Pricing for Everyone</h2>
          <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">
            Choose the plan that best fits your needs. Start for free or unlock powerful features with our Pro and Team plans.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {tiers.map((tier) => (
            <PricingTier
              key={tier.name}
              {...tier}
              onButtonClick={() => handleTierClick(tier.name)}
            />
          ))}
        </div>
        <p className="text-xs text-brand-gray mt-8 text-center">Commission on agent sales for Pro/Team plans: 20% (waived for initial Team plan customers, subject to terms).</p>
      </div>
    </section>
  );
};

export default PricingTable;

