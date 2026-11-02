import React, { useState, useEffect } from 'react';
import { StarterPlan } from '../types';
import { HUSTLE_IDEAS } from '../data/hustles';
import { CheckSquare, ArrowRight, Trash2, Calendar, DollarSign, Bookmark, Compass, MessageSquare } from 'lucide-react';

interface ProgressDashboardProps {
  onOpenPlan: (plan: StarterPlan) => void;
  onGoToFinder: () => void;
  onOpenMarketingForPlan: (plan: StarterPlan) => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  onOpenPlan,
  onGoToFinder,
  onOpenMarketingForPlan
}) => {
  const [savedPlans, setSavedPlans] = useState<StarterPlan[]>([]);

  const loadSavedPlans = () => {
    try {
      const stored = localStorage.getItem('hustlestart_saved_plans');
      if (stored) {
        setSavedPlans(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadSavedPlans();
  }, []);

  const handleDeletePlan = (hustleId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to remove this plan from your saved workspace?')) {
      const updated = savedPlans.filter(p => p.hustleId !== hustleId);
      setSavedPlans(updated);
      localStorage.setItem('hustlestart_saved_plans', JSON.stringify(updated));
      localStorage.removeItem(`hustlestart_plan_${hustleId}`);
    }
  };

  const totalTasksOverall = savedPlans.reduce((sum, p) => sum + p.phases.flatMap(ph => ph.tasks).length, 0);
  const completedTasksOverall = savedPlans.reduce((sum, p) => sum + p.phases.flatMap(ph => ph.tasks).filter(t => t.completed).length, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      
      {/* Header & Metrics Strip */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1">
            Personal Workspace
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            My Starter Plans & Launch Progress
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Track your checklists, saved business models, and upcoming launch milestones saved in your browser storage.
          </p>
        </div>

        <button
          onClick={onGoToFinder}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg cursor-pointer shadow-xs self-start sm:self-auto"
        >
          <Compass className="w-4 h-4 text-emerald-300" />
          <span>Start Another Hustle</span>
        </button>
      </div>

      {/* Metric Cards Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
          <span className="text-xs font-medium text-stone-500 block mb-1">Active Starter Plans</span>
          <div className="text-2xl font-bold font-mono text-neutral-900">
            {savedPlans.length} {savedPlans.length === 1 ? 'Hustle' : 'Hustles'}
          </div>
          <span className="text-[11px] text-stone-400 mt-1 block">Saved in browser storage</span>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
          <span className="text-xs font-medium text-stone-500 block mb-1">Total Checklist Tasks Done</span>
          <div className="text-2xl font-bold font-mono text-emerald-800 tabular-nums">
            {completedTasksOverall} / {totalTasksOverall}
          </div>
          <span className="text-[11px] text-stone-400 mt-1 block">
            {totalTasksOverall > 0 ? `${Math.round((completedTasksOverall / totalTasksOverall) * 100)}% overall completion` : 'Check off tasks as you launch'}
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
          <span className="text-xs font-medium text-stone-500 block mb-1">Estimated Capital Budgeted</span>
          <div className="text-2xl font-bold font-mono text-neutral-900 tabular-nums">
            KSh {savedPlans.reduce((sum, p) => sum + (p.targetBudgetKSh || 0), 0).toLocaleString()}
          </div>
          <span className="text-[11px] text-stone-400 mt-1 block">Combined across your plans</span>
        </div>
      </div>

      {/* Plans List */}
      <div className="space-y-4">
        {savedPlans.map((plan) => {
          const allTasks = plan.phases.flatMap(p => p.tasks);
          const done = allTasks.filter(t => t.completed).length;
          const pct = allTasks.length > 0 ? Math.round((done / allTasks.length) * 100) : 0;

          return (
            <div
              key={plan.id}
              onClick={() => onOpenPlan(plan)}
              className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-5 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
                  <span>Created: {plan.createdAt}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-800 font-bold">KSh {plan.targetBudgetKSh?.toLocaleString()} Budget</span>
                  <span aria-hidden="true">·</span>
                  <span>Target: {plan.targetLaunchDate}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-900 transition-colors leading-snug">
                  {plan.businessName}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Business Model: {plan.hustleTitle}
                </p>

                {/* Progress bar */}
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-48 h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-700 transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-semibold text-stone-700">
                    {done} of {allTasks.length} tasks completed ({pct}%)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenMarketingForPlan(plan);
                  }}
                  className="px-3 py-1.5 border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                  title="Open WhatsApp templates"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">WhatsApp Kit</span>
                </button>

                <button
                  onClick={() => onOpenPlan(plan)}
                  className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  <span>Continue Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
                </button>

                <button
                  onClick={(e) => handleDeletePlan(plan.hustleId, e)}
                  className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Remove plan"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}

        {savedPlans.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
            <CheckSquare className="w-10 h-10 text-stone-300 mx-auto" />
            <h3 className="text-base font-bold text-neutral-900">No saved starter plans yet</h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto">
              Find a business idea that matches your skills and budget, and generate your 7-day launch checklist.
            </p>
            <button
              onClick={onGoToFinder}
              className="mt-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl cursor-pointer shadow-sm inline-flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-emerald-300" />
              <span>Explore Hustle Finder</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
