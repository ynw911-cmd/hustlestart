import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { HomeDashboard } from './components/HomeDashboard';
import { IdeaFinder } from './components/IdeaFinder';
import { IdeaCatalog } from './components/IdeaCatalog';
import { StarterPlanView } from './components/StarterPlanView';
import { MarketingToolkit } from './components/MarketingToolkit';
import { ProgressDashboard } from './components/ProgressDashboard';
import { FeedbackModal } from './components/FeedbackModal';
import { SitemapModal } from './components/SitemapModal';
import { HUSTLE_IDEAS } from './data/hustles';
import { HustleIdea, StarterPlan } from './types';
import { Heart, Compass, ShieldCheck, Map } from 'lucide-react';
import { trackPageView, trackEvent } from './utils/analytics';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedIdea, setSelectedIdea] = useState<HustleIdea>(HUSTLE_IDEAS[0]);
  const [selectedPlan, setSelectedPlan] = useState<StarterPlan | null>(null);
  const [activeIdeaForModal, setActiveIdeaForModal] = useState<HustleIdea | null>(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [savedPlansCount, setSavedPlansCount] = useState(0);
  const [filterBudgetTier, setFilterBudgetTier] = useState<string>('all');

  // Load saved plans count & check URL parameters for deep-linking
  const refreshPlansCount = () => {
    try {
      const stored = localStorage.getItem('hustlestart_saved_plans');
      if (stored) {
        const parsed = JSON.parse(stored);
        setSavedPlansCount(parsed.length);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    refreshPlansCount();

    // Handle deep links from sitemap or shared URLs
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const tabParam = searchParams.get('tab');
      const ideaParam = searchParams.get('idea');

      if (ideaParam) {
        const found = HUSTLE_IDEAS.find(h => h.id === ideaParam);
        if (found) {
          setSelectedIdea(found);
          setActiveTab('plan_view');
          return;
        }
      }

      const validTabs = ['home', 'finder', 'catalog', 'plan_view', 'plans', 'marketing'];
      if (tabParam && validTabs.includes(tabParam)) {
        setActiveTab(tabParam);
      } else if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        if (validTabs.includes(hash)) {
          setActiveTab(hash);
        }
      }
    } catch (e) {
      console.error('Error reading URL params:', e);
    }
  }, []);

  // Track virtual pageviews in GA4 on tab switch
  useEffect(() => {
    const tabTitles: Record<string, string> = {
      home: 'Home — HustleStart',
      finder: 'Hustle Finder — HustleStart',
      catalog: '22+ Business Ideas — HustleStart',
      plan_view: `Starter Plan: ${selectedIdea?.title || 'Custom'} — HustleStart`,
      plans: 'My Saved Plans — HustleStart',
      marketing: 'Marketing Toolkit — HustleStart',
    };
    const title = tabTitles[activeTab] || 'HustleStart';
    trackPageView(title, `/#${activeTab}`);
  }, [activeTab, selectedIdea]);

  // Handlers for switching views
  const handleSelectIdeaForPlan = (idea: HustleIdea) => {
    trackEvent('select_hustle_idea', {
      idea_id: idea.id,
      idea_title: idea.title,
      budget_kes: idea.typicalStartupCost.minKES,
    });
    setSelectedIdea(idea);
    setSelectedPlan(null);
    setActiveTab('plan_view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenIdeaModal = (idea: HustleIdea) => {
    trackEvent('view_idea_details', {
      idea_id: idea.id,
      idea_title: idea.title,
    });
    setActiveIdeaForModal(idea);
  };

  const handleFilterByBudgetFromHome = (tier: string) => {
    trackEvent('filter_budget_tier', { tier });
    setFilterBudgetTier(tier);
    setActiveTab('finder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPlanFromDashboard = (plan: StarterPlan) => {
    trackEvent('view_saved_plan', {
      hustle_id: plan.hustleId,
      business_name: plan.businessName,
    });
    const matchedIdea = HUSTLE_IDEAS.find(h => h.id === plan.hustleId) || HUSTLE_IDEAS[0];
    setSelectedIdea(matchedIdea);
    setSelectedPlan(plan);
    setActiveTab('plan_view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMarketingForPlan = (plan: StarterPlan) => {
    trackEvent('open_marketing_toolkit', {
      hustle_id: plan.hustleId,
    });
    const matchedIdea = HUSTLE_IDEAS.find(h => h.id === plan.hustleId) || HUSTLE_IDEAS[0];
    setSelectedIdea(matchedIdea);
    setSelectedPlan(plan);
    setActiveTab('marketing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* 1. Transparent Mandatory Disclaimers Banner */}
      <DisclaimerBanner />

      {/* 2. Top Bar Navigation (Forest Green / White / Dark Charcoal) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
        savedPlansCount={savedPlansCount}
      />

      {/* 3. Main Viewport Content */}
      <main className="flex-1">
        
        {/* Tab: Home Dashboard */}
        {activeTab === 'home' && (
          <HomeDashboard
            onFindHustle={() => {
              setFilterBudgetTier('all');
              setActiveTab('finder');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreCatalogue={() => {
              setActiveTab('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectIdea={handleSelectIdeaForPlan}
            onFilterByBudget={handleFilterByBudgetFromHome}
          />
        )}

        {/* Tab: Idea Finder */}
        {activeTab === 'finder' && (
          <IdeaFinder
            initialBudgetTier={filterBudgetTier}
            onSelectIdea={handleSelectIdeaForPlan}
            onViewIdeaDetails={handleOpenIdeaModal}
          />
        )}

        {/* Tab: 22+ Idea Catalogue */}
        {activeTab === 'catalog' && (
          <IdeaCatalog
            onSelectIdea={handleSelectIdeaForPlan}
            activeIdeaModal={activeIdeaForModal}
            onCloseModal={() => setActiveIdeaForModal(null)}
          />
        )}

        {/* Tab: Active Starter Plan Generator & Checklist */}
        {activeTab === 'plan_view' && (
          <StarterPlanView
            idea={selectedIdea}
            onOpenMarketingToolkit={(plan) => {
              setSelectedPlan(plan);
              setActiveTab('marketing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSavePlanSuccess={refreshPlansCount}
          />
        )}

        {/* Tab: Progress Dashboard (Saved Plans) */}
        {activeTab === 'plans' && (
          <ProgressDashboard
            onOpenPlan={handleOpenPlanFromDashboard}
            onGoToFinder={() => {
              setActiveTab('finder');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenMarketingForPlan={handleOpenMarketingForPlan}
          />
        )}

        {/* Tab: WhatsApp Marketing & Rate Card Toolkit */}
        {activeTab === 'marketing' && (
          <MarketingToolkit
            currentPlan={selectedPlan}
            currentIdea={selectedIdea}
            onSelectHustleToLoad={(idea) => {
              setSelectedIdea(idea);
              setSelectedPlan(null);
            }}
          />
        )}

      </main>

      {/* 4. Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

      {/* 5. SEO Sitemap & Directory Modal */}
      <SitemapModal
        isOpen={isSitemapOpen}
        onClose={() => setIsSitemapOpen(false)}
        onNavigateToTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectIdea={handleSelectIdeaForPlan}
      />

      {/* 6. Minimal, Clean Footer */}
      <footer className="border-t border-stone-200 bg-white py-8 text-stone-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-neutral-900">HustleStart</span>
            <span aria-hidden="true">·</span>
            <span>Your skills. Your hustle. Your future.</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-medium">
            <button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-900 cursor-pointer">
              Home
            </button>
            <button onClick={() => { setActiveTab('finder'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-900 cursor-pointer">
              Hustle Finder
            </button>
            <button onClick={() => { setActiveTab('catalog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-900 cursor-pointer">
              22+ Ideas Catalogue
            </button>
            <button onClick={() => { setActiveTab('plans'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-900 cursor-pointer">
              My Plans
            </button>
            <button onClick={() => setIsFeedbackOpen(true)} className="hover:text-emerald-900 cursor-pointer">
              Feedback & Suggestions
            </button>
            <button 
              onClick={() => {
                trackEvent('open_sitemap_modal');
                setIsSitemapOpen(true);
              }} 
              className="hover:text-emerald-900 cursor-pointer flex items-center gap-1 text-emerald-800 font-semibold"
            >
              <Map className="w-3.5 h-3.5" />
              Sitemap & SEO
            </button>
          </div>

          <div className="text-[11px] text-stone-400">
            All KSh figures are planning estimates · No debt required
          </div>
        </div>
      </footer>

    </div>
  );
}
