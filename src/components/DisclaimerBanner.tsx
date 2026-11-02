import React, { useState } from 'react';
import { AlertTriangle, ChevronRight, X, ShieldAlert } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (isDismissed) return null;

  return (
    <aside aria-label="Financial and regulatory disclaimer" className="bg-amber-50 border-b border-amber-200/90 text-amber-950 text-xs px-4 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-snug">
            <span className="font-bold uppercase tracking-wider text-[11px] text-amber-900 mr-1.5">
              Important Starter Notice:
            </span>
            <span>
              All financial figures, startup costs in KSh, and earnings shown on HustleStart are realistic <strong>planning estimates, not guaranteed income</strong>.
            </span>
            {isExpanded && (
              <span className="block mt-1 text-amber-900 text-[11px] leading-relaxed">
                Prices fluctuate based on suppliers, location, and season. Always verify local county government requirements (such as Single Business Permits or Food Handling Certificates), inspect stock in person, and pre-sell to 2–3 customers before committing capital. Never invest money you cannot afford to lose.
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto shrink-0 text-[11px]">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-semibold underline text-amber-900 hover:text-amber-950 cursor-pointer"
          >
            {isExpanded ? 'Show Less' : 'Read Full Guidance'}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-amber-700 hover:text-amber-950 p-1"
            title="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
