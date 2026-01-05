
import React from 'react';
import { ViewType } from '../types';
import { NAV_ITEMS, COLORS } from '../constants';
import Logo from './Logo';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  return (
    <div className="w-20 md:w-64 h-screen glass-panel border-r flex flex-col items-center md:items-stretch transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center text-[#0D0D0E] shadow-lg shadow-[#B794F4]/20"
          style={{ background: `linear-gradient(135deg, ${COLORS.lavender}, ${COLORS.electricPurple})` }}
        >
          <Logo size={20} />
        </div>
        <span className="hidden md:block font-bold text-xl tracking-tighter text-white">CRYVEN</span>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group ${
              currentView === item.id 
                ? 'bg-opacity-20 text-white' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
            }`}
            style={currentView === item.id ? { backgroundColor: `${COLORS.lavender}22`, border: `1px solid ${COLORS.lavender}44` } : {}}
          >
            <div className={`transition-transform group-hover:scale-110 ${currentView === item.id ? 'text-[#B794F4]' : ''}`}>
              {item.icon}
            </div>
            <span className="hidden md:block font-medium">{item.label}</span>
            {currentView === item.id && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.lavender }} />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="hidden md:block p-4 rounded-xl border border-white/5 bg-[#B794F4]/5 text-center">
          <p className="text-[10px] text-[#B794F4] font-bold uppercase tracking-widest">Support</p>
          <p className="text-[9px] text-gray-500 mt-1">@CryvenSupportBot</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
