import React, { useState } from 'react';
import { HustleIdea, StarterPlan, PriceTierItem } from '../types';
import { HUSTLE_IDEAS } from '../data/hustles';
import { Copy, Check, Share2, MessageCircle, DollarSign, Sparkles, Send, Edit3, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface MarketingToolkitProps {
  currentPlan?: StarterPlan | null;
  currentIdea?: HustleIdea | null;
  onSelectHustleToLoad: (idea: HustleIdea) => void;
}

export const MarketingToolkit: React.FC<MarketingToolkitProps> = ({
  currentPlan,
  currentIdea,
  onSelectHustleToLoad
}) => {
  // Fallback to first hustle if none selected
  const activeIdea = currentIdea || HUSTLE_IDEAS.find(h => h.id === currentPlan?.hustleId) || HUSTLE_IDEAS[0];

  const [businessName, setBusinessName] = useState(currentPlan?.businessName || activeIdea.suggestedNames[0]);
  const [elevatorPitch, setElevatorPitch] = useState(activeIdea.elevatorPitch);
  const [priceList, setPriceList] = useState<PriceTierItem[]>(currentPlan?.customPriceList || activeIdea.priceListSample);
  
  // Editable WhatsApp Templates
  const [launchOfferMsg, setLaunchOfferMsg] = useState(activeIdea.whatsAppTemplates.launchOffer);
  const [statusMsg, setStatusMsg] = useState(activeIdea.whatsAppTemplates.statusUpdate);
  const [referralMsg, setReferralMsg] = useState(activeIdea.whatsAppTemplates.referralAsk);
  const [followUpMsg, setFollowUpMsg] = useState(activeIdea.whatsAppTemplates.customerFollowUp);

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
    trackEvent('copy_template_or_text', {
      key,
      hustle_id: activeIdea.id,
    });
  };

  const handleShareWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    trackEvent('open_whatsapp_share', {
      hustle_id: activeIdea.id,
    });
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  const copyFullPriceList = () => {
    const formatted = `*${businessName} — Rate Card / Price Menu* 📋\n${elevatorPitch}\n\n` +
      priceList.map(p => `• *${p.tierName}*: KSh ${p.priceKSh.toLocaleString()}\n  _${p.offering}_\n`).join('\n') +
      `\n📍 Orders & Inquiries: Reply directly to this WhatsApp! M-Pesa accepted. Asante!`;
    handleCopy('pricelist-all', formatted);
    trackEvent('copy_rate_card', {
      hustle_id: activeIdea.id,
      item_count: priceList.length,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1">
            Step 5: Customer Acquisition Engine
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            WhatsApp Marketing & Rate Card Toolkit
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            In Kenya, over 90% of informal commerce happens on WhatsApp. Customize your business name, rate card, and ready-to-share message templates below.
          </p>
        </div>

        {/* Hustle Switcher Dropdown */}
        <div className="text-xs">
          <label className="block text-stone-500 font-semibold mb-1">Active Hustle:</label>
          <select
            value={activeIdea.id}
            onChange={(e) => {
              const selected = HUSTLE_IDEAS.find(h => h.id === e.target.value);
              if (selected) {
                onSelectHustleToLoad(selected);
                setBusinessName(selected.suggestedNames[0]);
                setElevatorPitch(selected.elevatorPitch);
                setPriceList(selected.priceListSample);
                setLaunchOfferMsg(selected.whatsAppTemplates.launchOffer);
                setStatusMsg(selected.whatsAppTemplates.statusUpdate);
                setReferralMsg(selected.whatsAppTemplates.referralAsk);
                setFollowUpMsg(selected.whatsAppTemplates.customerFollowUp);
              }
            }}
            className="bg-white border border-stone-300 rounded-lg px-3 py-1.5 text-xs font-bold text-stone-800 focus:outline-none focus:ring-1 focus:ring-emerald-800 cursor-pointer shadow-xs"
          >
            {HUSTLE_IDEAS.map(h => (
              <option key={h.id} value={h.id}>{h.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Section 1: Business Identity & Elevator Pitch */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
          1. Brand Identity & Elevator Description
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              Your Business Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-900 font-bold focus:outline-none focus:ring-1 focus:ring-emerald-800"
            />
            <div className="flex gap-2 mt-1.5 text-[11px] text-stone-500">
              <span>Suggestions:</span>
              {activeIdea.suggestedNames.map((n, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setBusinessName(n)}
                  className="hover:text-emerald-800 underline cursor-pointer"
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              Short Description (WhatsApp Bio / Elevator Pitch)
            </label>
            <textarea
              rows={2}
              value={elevatorPitch}
              onChange={(e) => setElevatorPitch(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-800"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Basic Price-List Template */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-stone-100">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
              2. Basic Price-List Template (KSh)
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Clear upfront prices build customer trust and prevent endless bargaining.
            </p>
          </div>

          <button
            onClick={copyFullPriceList}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg cursor-pointer shadow-xs self-start sm:self-auto"
          >
            {copiedKey === 'pricelist-all' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied Price List!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Price List for Status</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {priceList.map((tier, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider block">
                  Tier {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-neutral-900 mt-0.5 mb-1">
                  {tier.tierName}
                </h4>
                <div className="text-lg font-mono font-bold text-emerald-900 tabular-nums my-1.5">
                  KSh {tier.priceKSh.toLocaleString()}
                </div>
                <p className="text-xs text-stone-600 mb-2">
                  {tier.offering}
                </p>
              </div>
              <span className="text-[11px] text-stone-400 italic border-t border-stone-200/60 pt-2 block">
                {tier.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Ready-to-Edit WhatsApp Marketing Messages */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
            3. Ready-To-Edit WhatsApp Message Templates
          </h3>
          <span className="text-xs text-stone-500 font-mono">
            Click copy or share directly to WhatsApp
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Template 1: Launch Offer */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
                <span className="text-xs font-bold text-emerald-900 font-mono">
                  A. "Pilot Launch Offer" Message
                </span>
                <span className="text-[10px] text-stone-400 font-medium">Send to 10 friends</span>
              </div>
              <textarea
                rows={5}
                value={launchOfferMsg}
                onChange={(e) => setLaunchOfferMsg(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-800 font-sans leading-relaxed focus:outline-none focus:ring-1 focus:ring-emerald-800"
              />
            </div>
            
            <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleCopy('launch', launchOfferMsg)}
                className="px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copiedKey === 'launch' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'launch' ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={() => handleShareWhatsApp(launchOfferMsg)}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Template 2: WhatsApp Status / Story Update */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
                <span className="text-xs font-bold text-emerald-900 font-mono">
                  B. Daily WhatsApp Status Broadcast
                </span>
                <span className="text-[10px] text-stone-400 font-medium">Post with 1 photo</span>
              </div>
              <textarea
                rows={5}
                value={statusMsg}
                onChange={(e) => setStatusMsg(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-800 font-sans leading-relaxed focus:outline-none focus:ring-1 focus:ring-emerald-800"
              />
            </div>
            
            <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleCopy('status', statusMsg)}
                className="px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copiedKey === 'status' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'status' ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={() => handleShareWhatsApp(statusMsg)}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Post to WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Template 3: Referral Request */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
                <span className="text-xs font-bold text-emerald-900 font-mono">
                  C. Polite Referral Request
                </span>
                <span className="text-[10px] text-stone-400 font-medium">To past satisfied clients</span>
              </div>
              <textarea
                rows={5}
                value={referralMsg}
                onChange={(e) => setReferralMsg(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-800 font-sans leading-relaxed focus:outline-none focus:ring-1 focus:ring-emerald-800"
              />
            </div>
            
            <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleCopy('referral', referralMsg)}
                className="px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copiedKey === 'referral' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'referral' ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={() => handleShareWhatsApp(referralMsg)}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send to WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Template 4: Customer Follow-up & Review */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
                <span className="text-xs font-bold text-emerald-900 font-mono">
                  D. 4-Hour Post-Delivery Follow-Up
                </span>
                <span className="text-[10px] text-stone-400 font-medium">Secures 5-star word-of-mouth</span>
              </div>
              <textarea
                rows={5}
                value={followUpMsg}
                onChange={(e) => setFollowUpMsg(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-800 font-sans leading-relaxed focus:outline-none focus:ring-1 focus:ring-emerald-800"
              />
            </div>
            
            <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleCopy('followup', followUpMsg)}
                className="px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copiedKey === 'followup' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'followup' ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={() => handleShareWhatsApp(followUpMsg)}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send to WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
