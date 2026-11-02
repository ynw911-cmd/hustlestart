import React from 'react';
import { Compass, Sparkles, FolderCheck, MessageSquare, BookOpen, Send, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenFeedback: () => void;
  savedPlansCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenFeedback,
  savedPlansCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-emerald-950 text-white border-b border-emerald-900/80 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-3.5">
        
        {/* Zone 1: Wordmark & Tagline */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-sm transition-colors"
              style={{
                color: '#d7c504',
                backgroundColor: '#066b38',
                fontFamily: 'Georgia',
              }}
            >
              HS
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5 leading-none">
                <span
                  style={{
                    fontFamily: 'Georgia',
                    backgroundColor: '#0b0000',
                    borderStyle: 'solid',
                    borderWidth: '3px',
                    borderColor: '#edd810',
                    color: '#c6b308',
                    padding: '2px 6px',
                  }}
                >
                  HustleStart
                </span>
              </div>
              <span
                className="text-[10px] font-medium tracking-wide hidden sm:block"
                style={{
                  color: '#ebf4f1',
                }}
              >
                Your skills. Your hustle. Your future.
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Nav Links (single-line, clean unboxed) */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-emerald-200">
          <button
            onClick={() => setActiveTab('home')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 cursor-pointer ${
              activeTab === 'home'
                ? 'text-white font-bold border-b-2 border-emerald-400'
                : 'hover:text-white'
            }`}
            style={{
              fontStyle: 'italic',
              fontWeight: 'bold',
              textDecorationLine: 'none',
            }}
          >
            Home
          </button>
          
          <button
            onClick={() => setActiveTab('finder')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'finder'
                ? 'text-white font-bold border-b-2 border-emerald-400'
                : 'hover:text-white'
            }`}
          >
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: 'bold',
              }}
            >
              Find My Hustle
            </span>
          </button>

          <button
            onClick={() => setActiveTab('catalog')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 cursor-pointer ${
              activeTab === 'catalog'
                ? 'text-white font-bold border-b-2 border-emerald-400'
                : 'hover:text-white'
            }`}
          >
            Idea Catalogue
          </button>

          <button
            onClick={() => setActiveTab('plans')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'plans'
                ? 'text-white font-bold border-b-2 border-emerald-400'
                : 'hover:text-white'
            }`}
          >
            <span>Starter Plans</span>
            {savedPlansCount > 0 && (
              <span className="bg-emerald-500 text-emerald-950 text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full">
                {savedPlansCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('marketing')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 cursor-pointer ${
              activeTab === 'marketing'
                ? 'text-white font-bold border-b-2 border-emerald-400'
                : 'hover:text-white'
            }`}
          >
            WhatsApp Toolkit
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA Button + Feedback */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenFeedback}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-emerald-200 hover:text-white hover:bg-emerald-900/60 rounded-lg transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Feedback</span>
          </button>

          <button
            onClick={() => setActiveTab('finder')}
            className="px-4 py-2 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
          >
            Find My Hustle
          </button>
        </div>

      </div>

      {/* Mobile Touch Subnavigation Bar */}
      <div className="md:hidden flex items-center overflow-x-auto gap-2 px-3 py-2 bg-emerald-900/90 border-t border-emerald-800 text-xs scrollbar-none">
        {[
          { id: 'home', label: 'Home' },
          { id: 'finder', label: 'Finder' },
          { id: 'catalog', label: '22+ Ideas' },
          { id: 'plans', label: `Plans (${savedPlansCount})` },
          { id: 'marketing', label: 'WhatsApp Kit' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'bg-emerald-400 text-emerald-950 font-bold'
                : 'text-emerald-200 hover:text-white bg-emerald-950/60'
            }`}
          >
            {tab.label}
          </button>
        ))}

        <button
          onClick={onOpenFeedback}
          className="px-2.5 py-1.5 rounded-md font-medium whitespace-nowrap text-emerald-300 hover:text-white bg-emerald-950/60 ml-auto cursor-pointer flex items-center gap-1"
        >
          <MessageSquare className="w-3 h-3" />
          <span>Feedback</span>
        </button>
      </div>
    </header>
  );
};
