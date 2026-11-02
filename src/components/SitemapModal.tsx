import React, { useState } from 'react';
import { HUSTLE_IDEAS } from '../data/hustles';
import { HustleIdea } from '../types';
import { 
  X, 
  Map, 
  ExternalLink, 
  Search, 
  FileCode, 
  CheckCircle, 
  Copy, 
  Check, 
  Globe, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tab: string) => void;
  onSelectIdea: (idea: HustleIdea) => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTab,
  onSelectIdea,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://hustlestart.app';
  const sitemapUrl = `${currentOrigin}/sitemap.xml`;
  const robotsUrl = `${currentOrigin}/robots.txt`;

  const filteredIdeas = HUSTLE_IDEAS.filter(idea => 
    idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    idea.swahiliOrLocalAlias.toLowerCase().includes(searchQuery.toLowerCase()) ||
    idea.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopySitemapUrl = () => {
    navigator.clipboard.writeText(sitemapUrl);
    setCopiedLink(true);
    trackEvent('copy_sitemap_url', { url: sitemapUrl });
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleIdeaClick = (idea: HustleIdea) => {
    trackEvent('sitemap_click_idea', { idea_id: idea.id });
    onSelectIdea(idea);
    onClose();
  };

  const handleTabClick = (tab: string) => {
    trackEvent('sitemap_click_tab', { tab });
    onNavigateToTab(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sitemap-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900 text-emerald-200 flex items-center justify-center font-bold">
              <Map className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 id="sitemap-modal-title" className="text-xl font-extrabold text-neutral-900 tracking-tight">
                SEO Sitemap & Website Directory
              </h2>
              <p className="text-xs text-stone-500">
                Index of all crawlable pages, tools, and 21+ Kenyan micro-business launch guides
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-stone-700">
          
          {/* SEO Crawler Badges & Direct XML Links */}
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                  XML Sitemap Active
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-900">
                  Google Bot Ready
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-stone-200 text-stone-800">
                  Schema.org JSON-LD
                </span>
              </div>
              <p className="text-xs text-stone-600 font-mono pt-1 break-all">
                {sitemapUrl}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopySitemapUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-50 border border-stone-200 rounded-lg text-xs font-semibold text-stone-700 shadow-2xs transition-colors cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                {copiedLink ? 'Copied' : 'Copy URL'}
              </button>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-900 hover:bg-emerald-950 text-emerald-100 rounded-lg text-xs font-semibold shadow-2xs transition-colors"
              >
                <FileCode className="w-3.5 h-3.5" />
                Raw XML
                <ExternalLink className="w-3 h-3 text-emerald-300" />
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-semibold transition-colors"
              >
                robots.txt
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Section 1: Core Applet Routes */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-3">
              1. Core Indexable Routes (Priority 1.0 – 0.8)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Home Landing & Calculator', path: '/', tab: 'home', priority: '1.0', freq: 'daily', desc: 'Hero section, budget filters & step-by-step launch framework' },
                { name: 'Hustle Finder Matchmaker', path: '/?tab=finder', tab: 'finder', priority: '0.9', freq: 'weekly', desc: 'Filter by budget tier, location & skills' },
                { name: '22+ Business Ideas Catalogue', path: '/?tab=catalog', tab: 'catalog', priority: '0.9', freq: 'weekly', desc: 'Complete library of validated Kenyan micro-businesses' },
                { name: 'Starter Plan & Checklist Generator', path: '/?tab=plan_view', tab: 'plan_view', priority: '0.8', freq: 'weekly', desc: '7-day zero-debt launch roadmap with KSh expense calculator' },
                { name: 'WhatsApp Marketing & Rate Cards', path: '/?tab=marketing', tab: 'marketing', priority: '0.8', freq: 'weekly', desc: 'Ready-to-copy client acquisition message templates' },
                { name: 'Saved Plans Dashboard', path: '/?tab=plans', tab: 'plans', priority: '0.7', freq: 'weekly', desc: 'Personal offline-ready launch progress tracker' },
              ].map(route => (
                <button
                  key={route.path}
                  onClick={() => handleTabClick(route.tab)}
                  className="text-left p-3 rounded-xl border border-stone-200 hover:border-emerald-700 hover:bg-emerald-50/40 transition-all group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-stone-900 group-hover:text-emerald-950 flex items-center gap-1.5 text-xs">
                        <Globe className="w-3.5 h-3.5 text-emerald-800" />
                        {route.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">
                        {route.priority}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 line-clamp-1">{route.desc}</p>
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-emerald-800 flex items-center justify-between">
                    <span>{route.path}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: 21+ Individual Business Guides */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                2. Indexed Business Guides ({filteredIdeas.length} Ideas)
              </h3>
              <div className="relative w-full sm:w-60">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Filter sitemap ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-emerald-800"
                />
              </div>
            </div>

            <div className="border border-stone-200 rounded-xl divide-y divide-stone-100 max-h-64 overflow-y-auto">
              {filteredIdeas.map((idea) => (
                <div
                  key={idea.id}
                  onClick={() => handleIdeaClick(idea)}
                  className="p-3 hover:bg-emerald-50/50 flex items-center justify-between gap-3 cursor-pointer transition-colors group"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900 group-hover:text-emerald-950 truncate text-xs">
                        {idea.title}
                      </span>
                      <span className="text-[10px] text-stone-400 italic shrink-0">
                        ({idea.swahiliOrLocalAlias})
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 truncate mt-0.5">
                      Budget: KSh {idea.estimatedBudgetMinKSh.toLocaleString()} – {idea.estimatedBudgetMaxKSh.toLocaleString()} · {idea.category.replace('_', ' ')}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-stone-400">
                      /?idea={idea.id}
                    </span>
                    <span className="text-xs text-emerald-800 font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Open <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>
            Complies with the official standard <a href="https://www.sitemaps.org" target="_blank" rel="noreferrer" className="underline hover:text-stone-800">Sitemaps 0.9 protocol</a>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>

      </div>
    </div>
  );
};
