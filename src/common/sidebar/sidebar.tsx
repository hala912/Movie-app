import { useState } from 'react';
import { Home, Flame, PlaySquare, Bookmark, Settings } from 'lucide-react';
import './sidebar.css';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home },
    { id: 'trending', icon: Flame },
    { id: 'media', icon: PlaySquare },
    { id: 'saved', icon: Bookmark },
  ];

  return (
    <nav className="navbar">
      <div className="nav-group">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon size={24} color={activeTab === item.id ? '#e2b3a8' : '#d1b3ac'} />
          </div>
        ))}
      </div>

      <div className="nav-group">
        <div className="nav-item">
          <Settings size={24} color="#d1b3ac" />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;