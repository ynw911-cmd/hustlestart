import React, { useState } from 'react';
import { HUSTLE_IDEAS } from '../data/hustles';
import { HustleIdea, HustleCategory } from '../types';
import { Search, ArrowRight, Check, AlertTriangle, ShieldCheck, DollarSign, X, HelpCircle, Sparkles } from 'lucide-react';

interface IdeaCatalogProps {
  onSelectIdea: (idea: HustleIdea) => void;
  activeIdeaModal?: HustleIdea | null;
  onCloseModal?: () => void;
}

export const IdeaCatalog: React.FC<IdeaCatalogProps> = ({
  onSelectIdea,
  activeIdeaModal = null,
  onCloseModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [modalIdea, setModalIdea] = useState<HustleIdea | null>(activeIdeaModal);

  const filteredIdeas = HUSTLE_IDEAS.filter((idea) => {
    const matchesCat = selectedCategory === 'all' || idea.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      idea.title.toLowerCase().includes(q) ||
      (idea.swahiliOrLocalAlias && idea.swahiliOrLocalAlias.toLowerCase().includes(q)) ||
      idea.shortSummary.toLowerCase().includes(q) ||
      idea.skills.some(s => s.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const openDetails = (idea: HustleIdea) => {
    setModalIdea(idea);
  };

  const closeDetails = () => {
    setModalIdea(null);
    if (onCloseModal) onCloseModal();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1">
            Complete Beginner Database
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Curated Small Business Catalogue (22+ Ideas)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Realistic, zero-fluff micro-businesses suitable for beginners in Kenya. Fully itemized startup expenses in KSh, first steps, risks, and target customers.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by name, skill, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs text-neutral-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-800 shadow-xs"
          />
        </div>
      </div>

      {/* Category Pills Bar (Segmented Controls) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-none text-xs">
        {[
          { id: 'all', label: 'All 22+ Hustles' },
          { id: 'food_beverage', label: 'Food & Street Snacks' },
          { id: 'digital_tech', label: 'Digital & Tech' },
          { id: 'home_lifestyle', label: 'Home & Grooming' },
          { id: 'retail_fashion', label: 'Mitumba & Retail' },
          { id: 'education_skills', label: 'Tuition & CVs' },
          { id: 'agri_farming', label: 'Urban Agri & Poultry' },
          { id: 'events_logistics', label: 'Errands & Events' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-emerald-900 text-white font-bold shadow-xs'
                : 'bg-stone-200/80 hover:bg-stone-300/80 text-stone-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((hustle) => (
          <div
            key={hustle.id}
            className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
          >
            <div>
              {/* Unboxed Metadata with separators */}
              <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mb-2">
                <span className="capitalize">{hustle.difficulty}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-800 font-bold">
                  KSh {hustle.estimatedBudgetMinKSh.toLocaleString()} – {hustle.estimatedBudgetMaxKSh.toLocaleString()}
                </span>
                <span aria-hidden="true">·</span>
                <span>Estimate</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-emerald-900 transition-colors leading-snug mb-1">
                {hustle.title}
              </h3>
              {hustle.swahiliOrLocalAlias && (
                <div className="text-xs text-stone-500 italic mb-2">
                  Local name: {hustle.swahiliOrLocalAlias}
                </div>
              )}

              {/* Summary */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">
                {hustle.shortSummary}
              </p>

              {/* Profit potential estimate */}
              <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/60 mb-4 text-xs flex items-center justify-between">
                <span className="text-emerald-900 font-medium">Estimated Monthly Net:</span>
                <span className="font-mono font-bold text-emerald-900 text-[11px]">{hustle.estimatedMonthlyProfitKSh.replace(' / month (estimate)', '')}</span>
              </div>

              {/* Customer Types */}
              <div className="mb-4">
                <span className="text-[11px] font-bold text-stone-700 uppercase block mb-1">
                  Primary Customer:
                </span>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {hustle.potentialCustomerTypes[0]}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
              <button
                onClick={() => onSelectIdea(hustle)}
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <span>Start Starter Plan</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
              </button>

              <button
                onClick={() => openDetails(hustle)}
                className="py-2 px-3 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Full Breakdown
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredIdeas.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
          <p className="text-stone-700 text-sm font-semibold">No small businesses matched your search.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-3 text-xs font-bold text-emerald-800 underline cursor-pointer"
          >
            Clear search and filters
          </button>
        </div>
      )}

      {/* Idea Full Detail Modal */}
      {modalIdea && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-stone-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-150 my-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
                  <span className="capitalize">{modalIdea.difficulty} Difficulty</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{modalIdea.timeCommitment.replace('_', ' ')}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-800 font-bold">Estimates only</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-snug">
                  {modalIdea.title}
                </h3>
                {modalIdea.swahiliOrLocalAlias && (
                  <p className="text-xs text-stone-500 italic mt-0.5">
                    Locally known as: {modalIdea.swahiliOrLocalAlias}
                  </p>
                )}
              </div>

              <button
                onClick={closeDetails}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-stone-700">
              
              {/* Summary */}
              <div>
                <p className="text-stone-700 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200/80">
                  {modalIdea.shortSummary}
                </p>
              </div>

              {/* Itemized Startup Expenses Breakdown (KSh) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Estimated Startup Expenses Breakdown (KSh)
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-800 font-bold">
                    Est. Total: KSh {modalIdea.estimatedBudgetMinKSh.toLocaleString()} – {modalIdea.estimatedBudgetMaxKSh.toLocaleString()}
                  </span>
                </div>

                <div className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100 bg-white">
                  {modalIdea.estimatedStartupExpenses.map((exp, idx) => (
                    <div key={idx} className="p-2.5 sm:p-3 flex items-start justify-between gap-3 text-xs">
                      <div>
                        <span className="font-semibold text-neutral-900 block">{exp.item}</span>
                        {exp.notes && (
                          <span className="text-[11px] text-stone-500 block">{exp.notes}</span>
                        )}
                        {exp.optional && (
                          <span className="text-[10px] text-amber-700 uppercase font-mono font-bold">Optional Buffer</span>
                        )}
                      </div>
                      <span className="font-mono font-bold text-neutral-900 tabular-nums shrink-0">
                        KSh {exp.costKSh.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="block text-[11px] text-stone-500 mt-1.5 italic">
                  *Figures are realistic approximations in Kenya. Always negotiate wholesale and verify local prices.
                </span>
              </div>

              {/* Practical First 3 Steps */}
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-2">
                  Practical First Steps to Take (Before Spending Capital)
                </h4>
                <div className="space-y-2">
                  {modalIdea.practicalFirstSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/40 border border-emerald-200/70 text-xs">
                      <span className="w-5 h-5 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                        {idx + 1}
                      </span>
                      <span className="text-stone-800 leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Realistic Risks & Pitfalls */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950 uppercase mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Risks & Pitfalls to Avoid</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-900 pl-4 list-disc">
                  {modalIdea.risksAndPitfalls.map((risk, idx) => (
                    <li key={idx} className="leading-snug">{risk}</li>
                  ))}
                </ul>
              </div>

              {/* Target Customer Types */}
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-2">
                  Potential Customers (Who pays and why)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {modalIdea.potentialCustomerTypes.map((cust, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-700">
                      • {cust}
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Names */}
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-1.5">
                  Business Name Ideas:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {modalIdea.suggestedNames.map((name, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-stone-100 text-stone-800 border border-stone-200">
                      {name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
              <button
                onClick={closeDetails}
                className="px-4 py-2 border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold rounded-lg cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const idea = modalIdea;
                  closeDetails();
                  onSelectIdea(idea);
                }}
                className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Generate Starter Plan for This Hustle</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
