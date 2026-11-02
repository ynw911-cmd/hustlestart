import React, { useState, useEffect } from 'react';
import { HustleIdea, StarterPlan, PlanPhase, PlanTask } from '../types';
import { Check, Bookmark, Calendar, DollarSign, Clock, ArrowRight, Printer, Share2, Sparkles, CheckCircle2, MessageSquare, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { trackEvent } from '../utils/analytics';

interface StarterPlanViewProps {
  idea: HustleIdea;
  onOpenMarketingToolkit: (plan: StarterPlan) => void;
  onSavePlanSuccess: () => void;
}

export const StarterPlanView: React.FC<StarterPlanViewProps> = ({
  idea,
  onOpenMarketingToolkit,
  onSavePlanSuccess
}) => {
  const [businessName, setBusinessName] = useState(idea.suggestedNames[0] || 'My Hustle');
  const [budget, setBudget] = useState(idea.estimatedBudgetMinKSh);
  const [launchDate, setLaunchDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });
  const [notes, setNotes] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // Generate initial 4-phase checklist tasks
  const generateInitialPhases = (): PlanPhase[] => [
    {
      phaseNumber: 1,
      phaseTitle: 'Phase 1: Zero-Capital Sourcing & Validation (Days 1–2)',
      tasks: [
        {
          id: 'task-1-1',
          text: `Scout your exact sales spot or target community: ${idea.locationTypes.join(', ')}`,
          detail: 'Check foot traffic between peak hours (7:30–9 AM or 4:30–8 PM) or join 2 estate WhatsApp/Facebook groups.',
          completed: false,
          targetDay: 1
        },
        {
          id: 'task-1-2',
          text: `In-person supplier verification for ${idea.estimatedStartupExpenses[0]?.item || 'supplies'}`,
          detail: 'Visit wholesale market or shop in person to verify actual prices and negotiate bulk discounts before committing money.',
          completed: false,
          targetDay: 1
        },
        {
          id: 'task-1-3',
          text: 'Conduct home dry-run & calculate exact unit margin',
          detail: 'Test your product or service on yourself or family to ensure flawless quality and verify profit per unit.',
          completed: false,
          targetDay: 2
        }
      ]
    },
    {
      phaseNumber: 2,
      phaseTitle: 'Phase 2: Packaging, Rate Card & Payment Setup (Days 3–4)',
      tasks: [
        {
          id: 'task-2-1',
          text: 'Set up WhatsApp Business profile & digital catalog',
          detail: 'Add your business name, operating hours, clear product photos, and prices in KSh.',
          completed: false,
          targetDay: 3
        },
        {
          id: 'task-2-2',
          text: 'Prepare clean packaging, apron, or essential tools',
          detail: `Assemble ${idea.requiredResources.slice(0, 3).join(', ')}. Cleanliness and hygiene are your best marketing.`,
          completed: false,
          targetDay: 3
        },
        {
          id: 'task-2-3',
          text: 'Verify M-Pesa payment reception',
          detail: 'Ensure your M-Pesa line or Till number is tested and ready so clients experience zero payment friction.',
          completed: false,
          targetDay: 4
        }
      ]
    },
    {
      phaseNumber: 3,
      phaseTitle: 'Phase 3: Pre-Sell to First 3 Paying Customers (Days 5–6)',
      tasks: [
        {
          id: 'task-3-1',
          text: 'Send the "Launch Offer" WhatsApp message to 10 warm contacts',
          detail: 'Personalize the ready message in the WhatsApp Toolkit and send to past colleagues, classmates, and neighbors.',
          completed: false,
          targetDay: 5
        },
        {
          id: 'task-3-2',
          text: 'Post announcement on WhatsApp Status and Estate group',
          detail: 'Highlight the introductory launch discount and specify exact delivery/service hours.',
          completed: false,
          targetDay: 5
        },
        {
          id: 'task-3-3',
          text: 'Secure initial orders with 50% M-Pesa deposit',
          detail: 'Always request at least 50% deposit before buying ingredients or stock to eliminate cancellation risk.',
          completed: false,
          targetDay: 6
        }
      ]
    },
    {
      phaseNumber: 4,
      phaseTitle: 'Phase 4: Day 7 Launch, Delivery & Referral Loop (Day 7)',
      tasks: [
        {
          id: 'task-4-1',
          text: 'Deliver first customer order on time with an extra courtesy gift',
          detail: 'Add a handwritten thank-you note or extra bonus sample to spark genuine delight.',
          completed: false,
          targetDay: 7
        },
        {
          id: 'task-4-2',
          text: 'Send the WhatsApp Feedback & Referral message',
          detail: 'Follow up within 4 hours asking for honest feedback and if they have 1 friend who would appreciate an intro.',
          completed: false,
          targetDay: 7
        },
        {
          id: 'task-4-3',
          text: 'Reinvest initial revenue into inventory restocking',
          detail: 'Separate your initial capital from your profit. Never spend your working capital on personal expenses.',
          completed: false,
          targetDay: 7
        }
      ]
    }
  ];

  const [phases, setPhases] = useState<PlanPhase[]>(() => {
    // Check if existing plan for this hustle exists in localStorage
    try {
      const stored = localStorage.getItem(`hustlestart_plan_${idea.id}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.phases || generateInitialPhases();
      }
    } catch (e) {
      console.error(e);
    }
    return generateInitialPhases();
  });

  const allTasks = phases.flatMap(p => p.tasks);
  const completedCount = allTasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / allTasks.length) * 100);

  const toggleTask = (taskId: string) => {
    const updated = phases.map(phase => ({
      ...phase,
      tasks: phase.tasks.map(t => {
        if (t.id === taskId) {
          const nextState = !t.completed;
          if (nextState) {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 }
            });
            trackEvent('task_completed', {
              task_id: taskId,
              hustle_id: idea.id,
              task_text: t.text.slice(0, 40),
            });
          }
          return { ...t, completed: nextState };
        }
        return t;
      })
    }));

    setPhases(updated);
    savePlanToStorage(updated);
  };

  const savePlanToStorage = (currentPhases: PlanPhase[] = phases) => {
    const planObject: StarterPlan = {
      id: `plan-${idea.id}`,
      hustleId: idea.id,
      hustleTitle: idea.title,
      businessName,
      targetBudgetKSh: budget,
      createdAt: new Date().toLocaleDateString('en-GB'),
      targetLaunchDate: launchDate,
      notes,
      phases: currentPhases,
      customPriceList: idea.priceListSample
    };

    try {
      localStorage.setItem(`hustlestart_plan_${idea.id}`, JSON.stringify(planObject));
      
      // Update global saved plans list
      const savedListStr = localStorage.getItem('hustlestart_saved_plans');
      const savedList: StarterPlan[] = savedListStr ? JSON.parse(savedListStr) : [];
      const filtered = savedList.filter(p => p.hustleId !== idea.id);
      localStorage.setItem('hustlestart_saved_plans', JSON.stringify([planObject, ...filtered]));

      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2500);
      onSavePlanSuccess();

      trackEvent('save_starter_plan', {
        hustle_id: idea.id,
        hustle_title: idea.title,
        business_name: businessName,
        budget_kes: budget,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 mb-6 border-b border-stone-100">
          <div>
            <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1">
              Active Starter Plan · 7-Day Sprint
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              {idea.title} Launch Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Follow this step-by-step checklist to launch safely, control expenses, and secure your first 3 paying customers in 7 days.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => savePlanToStorage()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs transition-all cursor-pointer"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isSaved ? 'Saved to Plans!' : 'Save Progress'}</span>
            </button>
          </div>
        </div>

        {/* Plan Parameters (Editable) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          
          {/* Business Name */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              Your Hustle Name:
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-neutral-900 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-800"
            />
            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-1 mt-1 text-[10px] text-stone-500">
              <span>Ideas:</span>
              {idea.suggestedNames.map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setBusinessName(n)}
                  className="hover:text-emerald-800 underline cursor-pointer"
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Target Startup Budget */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              Initial Budget Cap (KSh):
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 font-mono text-stone-400">KSh</span>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value) || 0)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg pl-11 pr-3 py-2 text-neutral-900 font-mono font-bold tabular-nums focus:outline-none focus:ring-1 focus:ring-emerald-800"
              />
            </div>
            <span className="text-[11px] text-stone-500 mt-1 block">
              Estimated: KSh {idea.estimatedBudgetMinKSh.toLocaleString()} – {idea.estimatedBudgetMaxKSh.toLocaleString()}
            </span>
          </div>

          {/* Target Launch Date */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              Target 1st Customer Day:
            </label>
            <input
              type="date"
              value={launchDate}
              onChange={(e) => setLaunchDate(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-neutral-900 font-mono focus:outline-none focus:ring-1 focus:ring-emerald-800 cursor-pointer"
            />
            <span className="text-[11px] text-stone-500 mt-1 block">
              Commit to 7 days for initial momentum
            </span>
          </div>

        </div>

        {/* Progress Bar Strip */}
        <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-neutral-900">
              Sprint Completion: {completedCount} of {allTasks.length} Tasks Done ({progressPercent}%)
            </span>
            <div className="w-full sm:w-72 h-2.5 bg-stone-100 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-emerald-700 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => {
              savePlanToStorage();
              onOpenMarketingToolkit({
                id: `plan-${idea.id}`,
                hustleId: idea.id,
                hustleTitle: idea.title,
                businessName,
                targetBudgetKSh: budget,
                createdAt: new Date().toLocaleDateString('en-GB'),
                targetLaunchDate: launchDate,
                notes,
                phases,
                customPriceList: idea.priceListSample
              });
            }}
            className="px-4 py-2 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-xs self-start sm:self-auto"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
            <span>Open WhatsApp Marketing Messages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* 4 Phases Task Checklist */}
      <div className="space-y-6">
        {phases.map((phase) => (
          <div
            key={phase.phaseNumber}
            className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-sm"
          >
            <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-4 pb-2 border-b border-stone-100 flex items-center justify-between">
              <span>{phase.phaseTitle}</span>
              <span className="text-xs font-mono font-normal text-stone-500">
                {phase.tasks.filter(t => t.completed).length} / {phase.tasks.length} done
              </span>
            </h3>

            <div className="space-y-3">
              {phase.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                    task.completed
                      ? 'bg-emerald-50/60 border-emerald-300'
                      : 'bg-stone-50/70 border-stone-200 hover:border-emerald-600'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                      task.completed ? 'bg-emerald-800 text-white' : 'border border-stone-300 bg-white'
                    }`}>
                      {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs sm:text-sm font-bold leading-snug ${
                        task.completed ? 'line-through text-stone-400' : 'text-neutral-900'
                      }`}>
                        {task.text}
                      </span>
                      {task.targetDay && (
                        <span className="text-[10px] font-mono font-semibold text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded shrink-0">
                          Day {task.targetDay}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs mt-1 leading-relaxed ${
                      task.completed ? 'text-stone-400' : 'text-stone-600'
                    }`}>
                      {task.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Realistic Reminders Box */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="font-bold">Starter Rule: </strong>
          Do not mark Phase 3 complete until you have spoken to at least 5 real people. Launching is not about building in secret; it is about conversing with neighbors, friends, and local businesses!
        </div>
      </div>

    </div>
  );
};
