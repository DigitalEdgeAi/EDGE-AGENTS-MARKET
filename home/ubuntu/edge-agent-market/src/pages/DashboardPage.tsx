import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Mock data - replace with actual data fetching
const mockUser = {
  name: 'Demo User',
  email: 'user@example.com',
  profilePicture: 'https://via.placeholder.com/150/0EA5E9/FFFFFF?text=DU' // Placeholder image
};

const mockPurchasedAgents = [
  { id: '1', title: 'SEO Blog Generator', purchaseDate: '2024-05-01', price: 9.99 },
  { id: '3', title: 'Academic Citation Bot', purchaseDate: '2024-04-15', price: 0 },
];

const mockCreatedAgents = [
  { id: '7', title: 'My Custom Agent 1', status: 'Published', sales: 10, earnings: 79.90 },
  { id: '8', title: 'My Draft Agent 2', status: 'Draft', sales: 0, earnings: 0 },
];

const DashboardPage: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname.split('/')[2] || 'overview');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'my-agents':
        return <MyAgentsTab />;
      case 'created-agents':
        return <CreatedAgentsTab />;
      case 'earnings':
        return <EarningsTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-brand-accent mb-8">User Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 bg-white p-6 rounded-lg shadow-lg h-fit">
          <div className="flex flex-col items-center mb-6">
            <img src={mockUser.profilePicture} alt={mockUser.name} className="w-24 h-24 rounded-full mb-3 border-4 border-brand-primary"/>
            <h2 className="text-xl font-semibold text-brand-black">{mockUser.name}</h2>
            <p className="text-sm text-brand-gray">{mockUser.email}</p>
          </div>
          <nav className="space-y-2">
            <DashboardNavLink to="overview" currentTab={activeTab} onClick={handleTabChange}>Overview</DashboardNavLink>
            <DashboardNavLink to="my-agents" currentTab={activeTab} onClick={handleTabChange}>My Purchased Agents</DashboardNavLink>
            <DashboardNavLink to="created-agents" currentTab={activeTab} onClick={handleTabChange}>My Created Agents</DashboardNavLink>
            <DashboardNavLink to="earnings" currentTab={activeTab} onClick={handleTabChange}>Earnings</DashboardNavLink>
            <DashboardNavLink to="settings" currentTab={activeTab} onClick={handleTabChange}>Settings</DashboardNavLink>
            <Link to="/" className="block w-full text-center mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Sign Out (Stub)
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="md:w-3/4 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

interface DashboardNavLinkProps {
  to: string;
  currentTab: string;
  onClick: (tab: string) => void;
  children: React.ReactNode;
}

const DashboardNavLink: React.FC<DashboardNavLinkProps> = ({ to, currentTab, onClick, children }) => {
  const isActive = to === currentTab;
  return (
    <button
      onClick={() => onClick(to)}
      className={`block w-full text-left px-4 py-2.5 rounded-md font-medium transition-colors 
        ${isActive ? 'bg-brand-primary text-white shadow-sm' : 'text-brand-gray-dark hover:bg-brand-gray-light hover:text-brand-accent'}`}
    >
      {children}
    </button>
  );
};

// Placeholder components for each tab
const DashboardOverview: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold text-brand-black mb-6">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand-gray-light p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-brand-accent mb-2">Purchased Agents</h3>
            <p className="text-3xl font-bold text-brand-black">{mockPurchasedAgents.length}</p>
        </div>
        <div className="bg-brand-gray-light p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-brand-accent mb-2">Created Agents</h3>
            <p className="text-3xl font-bold text-brand-black">{mockCreatedAgents.length}</p>
        </div>
        <div className="bg-brand-gray-light p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-brand-accent mb-2">Total Earnings (Stub)</h3>
            <p className="text-3xl font-bold text-brand-black">$79.90</p>
        </div>
    </div>
    <p className="mt-6 text-brand-gray">Welcome to your dashboard! Here you can manage your agents, track earnings, and update your settings.</p>
  </div>
);

const MyAgentsTab: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold text-brand-black mb-6">My Purchased Agents</h2>
    {mockPurchasedAgents.length > 0 ? (
      <div className="space-y-4">
        {mockPurchasedAgents.map(agent => (
          <div key={agent.id} className="bg-brand-gray-light p-4 rounded-lg shadow flex justify-between items-center">
            <div>
                <h3 className="text-lg font-semibold text-brand-accent">{agent.title}</h3>
                <p className="text-sm text-brand-gray">Purchased on: {agent.purchaseDate} - Price: ${agent.price.toFixed(2)}</p>
            </div>
            <Link to={`/agent/${agent.id}`} className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-accent text-sm font-medium">
                View Agent
            </Link>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-brand-gray">You haven't purchased any agents yet. <Link to="/marketplace" className="text-brand-primary hover:underline">Explore the marketplace!</Link></p>
    )}
  </div>
);

const CreatedAgentsTab: React.FC = () => (
    <div>
      <h2 className="text-2xl font-semibold text-brand-black mb-6">My Created Agents</h2>
      <div className="mb-6">
        <Link to="/builder" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            + Create New Agent
        </Link>
      </div>
      {mockCreatedAgents.length > 0 ? (
        <div className="space-y-4">
          {mockCreatedAgents.map(agent => (
            <div key={agent.id} className="bg-brand-gray-light p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold text-brand-accent">{agent.title}</h3>
                    <p className={`text-sm font-medium ${agent.status === 'Published' ? 'text-green-600' : 'text-yellow-600'}`}>{agent.status}</p>
                    <p className="text-sm text-brand-gray">Sales: {agent.sales} - Earnings: ${agent.earnings.toFixed(2)}</p>
                </div>
                <div className="space-x-2">
                    <button className="text-sm bg-brand-primary text-white px-3 py-1 rounded-md hover:bg-brand-accent">Edit</button>
                    <button className="text-sm bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600">View Stats</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-brand-gray">You haven't created any agents yet. <Link to="/builder" className="text-brand-primary hover:underline">Start building one now!</Link></p>
      )}
    </div>
  );

const EarningsTab: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold text-brand-black mb-6">Earnings</h2>
    <p className="text-brand-gray mb-4">This section will show your detailed earnings, payout history, and commission statements. (Stub for now)</p>
    <div className="bg-brand-gray-light p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-brand-accent mb-2">Total Earned</h3>
        <p className="text-3xl font-bold text-brand-black">$79.90</p>
        <p className="text-sm text-brand-gray mt-1">Next payout: June 1, 2025 (Stub)</p>
        <button className="mt-4 bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-accent text-sm font-medium">
            Request Payout (Stub)
        </button>
    </div>
  </div>
);

const SettingsTab: React.FC = () => {
    const [userSettings, setUserSettings] = useState({
        name: mockUser.name,
        email: mockUser.email,
        bio: 'AI enthusiast and agent creator.',
        receiveNotifications: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        // @ts-ignore
        const checked = e.target.checked;
        setUserSettings(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Settings saved:', userSettings);
        alert('Settings saved (stub)!');
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-brand-black mb-6">Account Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-gray-dark">Full Name</label>
                    <input type="text" name="name" id="name" value={userSettings.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-gray-dark">Email Address</label>
                    <input type="email" name="email" id="email" value={userSettings.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-brand-gray-dark">Short Bio</label>
                    <textarea name="bio" id="bio" value={userSettings.bio} onChange={handleChange} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"></textarea>
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="receiveNotifications" name="receiveNotifications" type="checkbox" checked={userSettings.receiveNotifications} onChange={handleChange} className="focus:ring-brand-primary h-4 w-4 text-brand-primary border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="receiveNotifications" className="font-medium text-brand-gray-dark">Receive email notifications</label>
                        <p className="text-brand-gray">Get notified about new agents, sales, and platform updates.</p>
                    </div>
                </div>
                <div>
                    <button type="submit" className="px-6 py-2.5 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DashboardPage;

