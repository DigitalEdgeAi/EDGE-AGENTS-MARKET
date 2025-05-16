import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Netlify Forms: Add a hidden form with the same name attribute as the form in your HTML.
    // The form name here is "contact"
    const netlifyFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      netlifyFormData.append(key, value as string);
    });
    netlifyFormData.append('form-name', 'contact'); // This is crucial for Netlify Forms

    try {
      // In a real scenario, you might not need to fetch if Netlify handles it automatically
      // by detecting the form submission with the 'form-name' attribute.
      // However, for SPA, explicit submission is often needed.
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString(),
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (fetchError) {
      setError('There was an error submitting your message. Please try again later.');
      console.error('Form submission error:', fetchError);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-brand-accent mb-8 text-center">Contact Us</h1>
        <p className="text-brand-gray-dark text-center mb-8">
          Have questions, feedback, or need support? We'd love to hear from you! Fill out the form below, and our team will get back to you as soon as possible.
        </p>
        
        {/* Netlify hidden form for detection */}
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="subject" />
          <textarea name="message"></textarea>
        </form>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-gray-dark mb-1">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-gray-dark mb-1">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-brand-gray-dark mb-1">Subject</label>
            <input 
              type="text" 
              name="subject" 
              id="subject" 
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-gray-dark mb-1">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-brand-gray-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              placeholder="Your message..."
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {isSubmitted && <p className="text-green-600 text-sm">Thank you for your message! We'll get back to you soon.</p>}
          <div>
            <button 
              type="submit" 
              className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-accent transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

