import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import AgentDetailPage from './pages/AgentDetailPage';
import DashboardPage from './pages/DashboardPage';
import BuilderPage from './pages/BuilderPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PricingPage from './pages/PricingPage';
import './index.css'; // Ensure Tailwind styles are imported

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-gray-light">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/agent/:id" element={<AgentDetailPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/builder" element={<BuilderPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

