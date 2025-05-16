import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-brand-accent mb-6">About Edge Agent Market</h1>
      <div className="space-y-6 text-brand-gray-dark leading-relaxed">
        <p>
          Welcome to Edge Agent Market, your premier destination for discovering, building, and deploying cutting-edge AI agents.
          Our mission is to democratize access to powerful AI tools, enabling individuals and businesses alike to automate tasks,
          unlock new efficiencies, and drive innovation.
        </p>
        <p>
          At Edge Agent Market, we believe in the transformative power of artificial intelligence. We provide a platform where developers
          and creators can showcase their AI-powered workflows, and users can easily find and utilize these agents to solve real-world problems.
          Whether you're looking to optimize your content creation, streamline legal processes, enhance your academic research, or boost your marketing efforts,
          our marketplace offers a diverse range of agents tailored to your needs.
        </p>
        <h2 className="text-2xl font-bold text-brand-black pt-4">Our Vision</h2>
        <p>
          We envision a future where AI is seamlessly integrated into everyday tasks, making complex processes simple and accessible to everyone.
          Edge Agent Market aims to be at the forefront of this revolution, fostering a vibrant community of AI creators and users who collaborate
          to push the boundaries of what's possible.
        </p>
        <h2 className="text-2xl font-bold text-brand-black pt-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">Curated Selection:</span> Access a wide variety of high-quality AI agents, carefully reviewed for performance and reliability.</li>
          <li><span className="font-semibold">No-Code/Low-Code Focus:</span> Many of our agents are designed for ease of use, requiring minimal to no coding knowledge.</li>
          <li><span className="font-semibold">Empowering Creators:</span> We provide tools and a platform for developers to monetize their AI creations and reach a global audience.</li>
          <li><span className="font-semibold">Community Driven:</span> Join a growing community of AI enthusiasts, share your feedback, and contribute to the evolution of AI tools.</li>
        </ul>
        <p>
          Thank you for being a part of the Edge Agent Market journey. We are excited to help you automate everything and sell your genius!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

