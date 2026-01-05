
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import HistoryTable from './components/HistoryTable';
import BillingPanel from './components/BillingPanel';
import ApiPanel from './components/ApiPanel';
import MobileNav from './components/MobileNav';
import AuthPage from './components/AuthPage';
import { ViewType, User } from './types';

const MOCK_USER: User = {
  username: 'tg_user_8492',
  role: 'Premium Client',
  avatar: 'https://picsum.photos/id/64/100/100',
  balance: 145.20
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.SEARCH);
  const [user] = useState<User>(MOCK_USER);

  if (!isLoggedIn) {
    return <AuthPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case ViewType.SEARCH:
        return <SearchPanel />;
      case ViewType.HISTORY:
        return <HistoryTable />;
      case ViewType.BILLING:
        return <BillingPanel />;
      case ViewType.API:
        return <ApiPanel apiKey="crv_live_84920kLp823m9Xq_p91z" />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] opacity-30 text-center px-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">{currentView}</h2>
            <p className="text-gray-400 mt-2">Accessing secure module...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#0D0D0E] overflow-hidden">
      <div className="hidden md:block">
        <Sidebar currentView={currentView} setView={setCurrentView} />
      </div>
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header 
          user={user} 
          onOpenWallet={() => setCurrentView(ViewType.BILLING)}
          onLogout={() => setIsLoggedIn(false)}
        />
        
        <div className="flex-1 overflow-y-auto scroll-smooth pb-24 md:pb-6">
          <div className="animate-in fade-in duration-500">
            {renderContent()}
          </div>
        </div>

        <MobileNav currentView={currentView} setView={setCurrentView} />

        <div className="hidden md:flex h-8 glass-panel border-t border-white/5 px-6 items-center justify-between text-[10px] text-gray-600 font-mono">
           <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-500" /> SECURE SESSION: ACTIVE</span>
              <span>AES-256-GCM</span>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-[#B794F4]">CRYVEN CLIENT v2.4</span>
           </div>
        </div>
      </main>
    </div>
  );
};

export default App;
