import React from 'react';
import { ArrowRight, Compass, ShieldCheck, DollarSign, Clock, Users, Sparkles, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { HUSTLE_IDEAS } from '../data/hustles';
import { HustleIdea } from '../types';

interface HomeDashboardProps {
  onFindHustle: () => void;
  onExploreCatalogue: () => void;
  onSelectIdea: (idea: HustleIdea) => void;
  onFilterByBudget: (tier: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onFindHustle,
  onExploreCatalogue,
  onSelectIdea,
  onFilterByBudget
}) => {
  // 3 featured beginner hustles
  const featured = [
    HUSTLE_IDEAS.find(h => h.id === 'smokies-pasua-kachumbari')!,
    HUSTLE_IDEAS.find(h => h.id === 'mitumba-clothing-curator')!,
    HUSTLE_IDEAS.find(h => h.id === 'canva-design-local-biz')!,
  ].filter(Boolean);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white border-b border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-900/60 border border-emerald-700/60 rounded-full px-3.5 py-1 mb-5 w-fit">
                <span>Kenya Starter Business Edition</span>
                <span aria-hidden="true">·</span>
                <span>Practical & Zero-Fluff</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 text-balance">
                Your skills. Your hustle. <br className="hidden sm:block" />
                <span className="text-emerald-400">Your future.</span>
              </h1>

              <p className="text-base sm:text-lg text-emerald-100 leading-relaxed mb-8 max-w-xl">
                Tired of waiting for formal jobs? Discover realistic small-business ideas tailored for Kenya, get step-by-step launch plans with transparent KSh expense estimates, and land your first paying customer this week.
              </p>

              {/* Prominent Hero CTA Button */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <button
                  onClick={onFindHustle}
                  className="px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-sm sm:text-base flex items-center gap-2.5 shadow-lg shadow-emerald-950/40 transition-all active:scale-95 cursor-pointer"
                >
                  <Compass className="w-5 h-5 text-emerald-950" />
                  <span>Find My Hustle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onExploreCatalogue}
                  className="px-5 py-3.5 rounded-xl bg-emerald-900/70 hover:bg-emerald-800/80 text-emerald-100 border border-emerald-700 font-semibold text-sm transition-all active:scale-95 cursor-pointer"
                >
                  Browse 22+ Ideas
                </button>
              </div>

              {/* Fast Budget Quick Jump Chips */}
              <div>
                <span className="text-xs font-semibold text-emerald-300/80 uppercase tracking-wider block mb-2.5">
                  Filter by your available startup savings:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Under KSh 2,000', tier: 'under_2k' },
                    { label: 'KSh 2,000 – 5,000', tier: '2k_5k' },
                    { label: 'KSh 5,000 – 15,000', tier: '5k_15k' },
                    { label: 'KSh 15,000+', tier: '15k_30k' },
                  ].map((btn) => (
                    <button
                      key={btn.tier}
                      onClick={() => onFilterByBudget(btn.tier)}
                      className="text-xs font-medium bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-700/60 transition-all hover:border-emerald-400 cursor-pointer"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-emerald-900/40 border border-emerald-700/60 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-sm text-emerald-50">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-800">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    The 7-Day First Customer Sprint
                  </span>
                  <span className="text-[11px] text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded font-mono">
                    M-Pesa Ready
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80">
                    <span className="w-5 h-5 rounded-full bg-emerald-400 text-emerald-950 font-bold flex items-center justify-center text-xs shrink-0">1</span>
                    <div>
                      <span className="font-bold text-white block">Day 1: Pick Idea & Estimate KSh Costs</span>
                      <span className="text-emerald-300/80">Verify ingredient or wholesale prices before spending.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80">
                    <span className="w-5 h-5 rounded-full bg-emerald-400 text-emerald-950 font-bold flex items-center justify-center text-xs shrink-0">2</span>
                    <div>
                      <span className="font-bold text-white block">Day 3: Pre-Sell to 3 People</span>
                      <span className="text-emerald-300/80">Use ready WhatsApp messages to test true demand.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80">
                    <span className="w-5 h-5 rounded-full bg-emerald-400 text-emerald-950 font-bold flex items-center justify-center text-xs shrink-0">3</span>
                    <div>
                      <span className="font-bold text-white block">Day 5: Collect 50% Deposit via M-Pesa</span>
                      <span className="text-emerald-300/80">Fund your supplies using customer deposits, not debt.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80">
                    <span className="w-5 h-5 rounded-full bg-emerald-400 text-emerald-950 font-bold flex items-center justify-center text-xs shrink-0">4</span>
                    <div>
                      <span className="font-bold text-white block">Day 7: Deliver & Ask for 1 Referral</span>
                      <span className="text-emerald-300/80">Deliver on time with clean packaging to spark word-of-mouth.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-emerald-800 flex items-center justify-between text-xs text-emerald-300 font-mono">
                  <span>Realistic Start: KSh 1,500 – 10,000</span>
                  <span className="text-white font-bold">Zero Debt Needed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Hustles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
              Popular Starter Picks
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mt-0.5">
              High-Demand Beginner Hustles in Kenya
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Low barrier to entry, fast cash turnaround, and strong local demand.
            </p>
          </div>

          <button
            onClick={onExploreCatalogue}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>View All 22+ Hustles</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((hustle) => (
            <div
              key={hustle.id}
              className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Unboxed metadata with separators */}
                <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mb-2">
                  <span className="capitalize">{hustle.difficulty}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-bold">
                    KSh {hustle.estimatedBudgetMinKSh.toLocaleString()} – {hustle.estimatedBudgetMaxKSh.toLocaleString()}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Estimate</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug mb-1">
                  {hustle.title}
                </h3>
                {hustle.swahiliOrLocalAlias && (
                  <div className="text-xs text-stone-500 italic mb-2">
                    Known locally as: {hustle.swahiliOrLocalAlias}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">
                  {hustle.shortSummary}
                </p>

                <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-xs mb-4">
                  <span className="text-[11px] font-bold text-stone-700 uppercase block mb-1">
                    First Step:
                  </span>
                  <p className="text-stone-600 line-clamp-2">
                    {hustle.practicalFirstSteps[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-emerald-800 font-semibold">
                  {hustle.timeCommitment === 'part_time' ? 'Part-Time Friendly' : 'Weekends'}
                </span>

                <button
                  onClick={() => onSelectIdea(hustle)}
                  className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Build Starter Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 4 Beginner Hustle Rules (Mindset & Safety) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Zero Fluff Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              The 4 Rules of Beginner Entrepreneurship in Kenya
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2">
              Before you spend 1 single Shilling of your savings, memorize these battle-tested startup rules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            
            <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-xs mb-3">
                01
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Pre-Sell Before You Stock
              </h4>
              <p className="text-stone-300 leading-relaxed">
                Never buy 20 bale dresses or 5 crates of eggs assuming people will buy. Show samples or take orders first so you only spend on committed demand.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-xs mb-3">
                02
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Strict Cash / M-Pesa on Delivery
              </h4>
              <p className="text-stone-300 leading-relaxed">
                Informal credit (&ldquo;Lipa baadaye&rdquo;) kills 80% of small businesses. Kindly insist on M-Pesa confirmation before releasing food, clothes, or graphics.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-xs mb-3">
                03
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Hygiene & Punctuality Win
              </h4>
              <p className="text-stone-300 leading-relaxed">
                You don&apos;t need an expensive shop to look professional. A clean apron, sterile clippers, sanitized containers, and on-time delivery beat fancy branding.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-xs mb-3">
                04
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Verify Local Regulations
              </h4>
              <p className="text-stone-300 leading-relaxed">
                Check county trade licenses (Single Business Permit) and food handling certs for your area so county askaris don&apos;t confiscate your tools.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
