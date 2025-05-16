import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-gray-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 px-2 text-left hover:bg-brand-gray-light transition-colors duration-200 focus:outline-none"
      >
        <span className="text-lg font-semibold text-brand-black">{question}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-6 w-6 text-brand-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-2 pb-5 pt-2 text-brand-gray-dark leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqs = [
  {
    question: 'What is Edge Agent Market?',
    answer: 'Edge Agent Market is a platform where you can discover, buy, and potentially build and sell AI-powered agents or workflows. These agents are designed to automate various tasks and improve productivity across different domains.'
  },
  {
    question: 'How do I use an agent?',
    answer: 'Once you find an agent you like, you can typically try a demo or purchase it. Each agent will have specific instructions on how to use its inputs and interpret its outputs. For free agents, you can usually start using them right away. Paid agents might require a one-time purchase or a subscription.'
  },
  {
    question: 'Can I build and sell my own agents?',
    answer: 'Yes! We aim to provide tools and a platform (Agent Builder) for creators to develop and list their own AI agents on the marketplace. You can set your own pricing and earn a commission on sales, as per our terms.'
  },
  {
    question: 'What kind of AI powers these agents?',
    answer: 'The agents on our marketplace can be powered by various AI technologies and models, including large language models (LLMs) like those from OpenAI, Anthropic (Claude), or other specialized AI services. The specific technology will vary by agent.'
  },
  {
    question: 'What are the pricing plans?',
    answer: 'We offer a range of pricing plans. The \'Free\' plan allows you to use free agents and browse the marketplace. The \'Pro\' plan gives you access to unlimited premium agents, the agent builder, and the ability to earn commission. The \'Team\' plan offers additional features for collaboration and white-labeling. Please see our Pricing page for full details.'
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Yes, we take security very seriously. All payment processing is handled through Stripe, a certified PCI Level 1 Service Provider. We do not store your full credit card details on our servers. (Note: This is a stub implementation, actual payment security will depend on proper Stripe integration).'
  },
  {
    question: 'How do I get support if I have an issue?',
    answer: 'You can visit our Contact page to send us a message. Pro and Team plan members receive priority support. We also plan to have a community forum for users to help each other.'
  }
];

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-brand-accent mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

