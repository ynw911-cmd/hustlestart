import React, { useState, useMemo } from 'react';
import { HUSTLE_IDEAS } from '../data/hustles';
import { HustleIdea, HustleCategory, BudgetTier, LocationType, TimeCommitment } from '../types';
import { Compass, Filter, Sparkles, ArrowRight, RotateCcw, Check, DollarSign, Clock, MapPin } from 'lucide-react';

interface IdeaFinderProps {
  initialBudgetTier?: string;
  onSelectIdea: (idea: HustleIdea) => void;
  onViewIdeaDetails: (idea: HustleIdea) => void;
}

export const IdeaFinder: React.FC<IdeaFinderProps> = ({
  initialBudgetTier = 'all',
  onSelectIdea,
  onViewIdeaDetails
}) => {
  const [selectedBudget, setSelectedBudget] = useState<string>(initialBudgetTier);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedTime, setSelectedTime] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Filter computation
  const filteredHustles = useMemo(() => {
    return HUSTLE_IDEAS.filter((hustle) => {
      // Budget filter
      if (selectedBudget !== 'all' && hustle.budgetTier !== selectedBudget) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && hustle.category !== selectedCategory) {
        return false;
      }
      // Location filter
      if (selectedLocation !== 'all' && !hustle.locationTypes.includes(selectedLocation as LocationType)) {
        return false;
      }
      // Time filter
      if (selectedTime !== 'all' && hustle.timeCommitment !== selectedTime) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'all' && hustle.difficulty !== selectedDifficulty) {
        return false;
      }
      return true;
    });
  }, [selectedBudget, selectedCategory, selectedLocation, selectedTime, selectedDifficulty]);

  const resetFilters = () => {
    setSelectedBudget('all');
    setSelectedCategory('all');
    setSelectedLocation('all');
    setSelectedTime('all');
    setSelectedDifficulty('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Hustle Finder</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          Find Your Ideal Beginner Hustle
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
          Filter by your real budget in KSh, your available hours, and your location to discover small businesses you can realistically start this month.
        </p>
      </div>

      {/* Filter Control Box */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-sm mb-8 space-y-5">
        
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-700" />
            <span>Customize Your Criteria</span>
          </span>

          <button
            onClick={resetFilters}
            className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 font-medium cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* 1. Startup Budget Filter */}
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-2">
            1. What is your available startup budget? (KSh)
          </label>
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {[
              { id: 'all', label: 'Any Budget' },
              { id: 'under_2k', label: 'Under KSh 2,000' },
              { id: '2k_5k', label: 'KSh 2,000 – 5,000' },
              { id: '5k_15k', label: 'KSh 5,000 – 15,000' },
              { id: '15k_30k', label: 'KSh 15,000 – 30,000+' }
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBudget(b.id)}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedBudget === b.id
                    ? 'bg-emerald-900 text-white border-emerald-900 font-bold shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Location & Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-stone-100">
          
          {/* Location */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              2. Where will you operate?
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700 cursor-pointer"
            >
              <option value="all">Any Location</option>
              <option value="home_online">From Home / Online / WhatsApp</option>
              <option value="campus">Campus / Student Hostels</option>
              <option value="neighborhood">Neighborhood / Local Estate</option>
              <option value="market_center">Market Center / Street / Bus Stage</option>
            </select>
          </div>

          {/* Time Commitment */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              3. Available Time
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700 cursor-pointer"
            >
              <option value="all">Any Schedule</option>
              <option value="part_time">Part-Time (1–3 hours/day)</option>
              <option value="weekends">Weekends Only</option>
              <option value="full_time">Full-Time Commitment</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              4. Industry / Interest
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700 cursor-pointer"
            >
              <option value="all">All Industries</option>
              <option value="food_beverage">Food & Beverage (Fast Cash)</option>
              <option value="digital_tech">Digital, Design & Tech</option>
              <option value="home_lifestyle">Home Services, Laundry & Grooming</option>
              <option value="retail_fashion">Fashion & Retail Thrift</option>
              <option value="education_skills">Education & Tuition</option>
              <option value="agri_farming">Micro-Farming & Poultry</option>
              <option value="events_logistics">Events, Errands & Logistics</option>
            </select>
          </div>

        </div>

      </div>

      {/* Result Status Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm font-bold text-neutral-900">
          <span>Found {filteredHustles.length} {filteredHustles.length === 1 ? 'Hustle' : 'Hustles'} matching your criteria</span>
        </div>
        <div className="text-xs text-stone-500 font-mono">
          All expenses in KSh (Kenya Shillings)
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHustles.map((hustle) => (
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
                  Known locally as: {hustle.swahiliOrLocalAlias}
                </div>
              )}

              {/* Short Summary */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">
                {hustle.shortSummary}
              </p>

              {/* Required Resources snippet */}
              <div className="mb-4">
                <span className="text-[11px] font-bold text-stone-700 uppercase block mb-1">
                  Essential Resources Needed:
                </span>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {hustle.requiredResources.join(' · ')}
                </p>
              </div>

              {/* Potential Customers */}
              <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100 text-xs mb-4">
                <span className="text-[11px] font-bold text-stone-700 uppercase block mb-0.5">
                  Who Pays For This:
                </span>
                <p className="text-stone-600 text-[11px] line-clamp-2">
                  {hustle.potentialCustomerTypes[0]}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
              <button
                onClick={() => onSelectIdea(hustle)}
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <span>Create Starter Plan</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
              </button>

              <button
                onClick={() => onViewIdeaDetails(hustle)}
                className="py-2 px-3 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
                title="View itemized expenses, first steps & risks"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredHustles.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
          <p className="text-stone-700 text-sm font-semibold">No hustles matched this exact combination.</p>
          <p className="text-stone-500 text-xs mt-1">Try expanding your budget filter or switching location.</p>
          <button
            onClick={resetFilters}
            className="mt-4 px-4 py-2 bg-emerald-800 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 cursor-pointer"
          >
            Show All 22+ Hustles
          </button>
        </div>
      )}

    </div>
  );
};
