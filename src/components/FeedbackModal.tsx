import React, { useState } from 'react';
import { UserFeedback } from '../types';
import { X, MessageSquare, Star, Send, Check } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState<UserFeedback['category']>('idea_suggestion');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const feedbackEntry: UserFeedback = {
      id: `fb-${Date.now()}`,
      timestamp: new Date().toISOString(),
      category,
      name: name.trim() || 'Anonymous Entrepreneur',
      message: message.trim(),
      rating
    };

    try {
      const stored = localStorage.getItem('hustlestart_feedback');
      const list = stored ? JSON.parse(stored) : [];
      localStorage.setItem('hustlestart_feedback', JSON.stringify([feedbackEntry, ...list]));
    } catch (err) {
      console.error(err);
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-stone-200 max-w-lg w-full p-6 sm:p-7 shadow-2xl animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-900">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Help Us Improve HustleStart
              </h3>
              <p className="text-[11px] text-stone-500">
                Suggest a business idea, report outdated prices, or share feedback.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <h4 className="text-base font-bold text-neutral-900">Asante Sana!</h4>
            <p className="text-xs text-stone-600">
              Your suggestion has been logged. We review every community idea to keep prices accurate for Kenyan youth!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Category */}
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Feedback Topic
              </label>
              <select
                value={category}
                onChange={(e: any) => setCategory(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-800 cursor-pointer"
              >
                <option value="idea_suggestion">Suggest a New Beginner Business Idea</option>
                <option value="cost_accuracy">Report Cost or Price Inaccuracy</option>
                <option value="feature_request">Request a New Feature / Tool</option>
                <option value="user_experience">General App Experience</option>
              </select>
            </div>

            {/* Rating Stars */}
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                How helpful is HustleStart to you?
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 cursor-pointer focus:outline-none"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= rating
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-stone-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-stone-500 ml-2 font-mono">
                  {rating} of 5 Stars
                </span>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Your Name / Location (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Kelvin from Kasarani / Campus student"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-800"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Your Thoughts / Suggestion
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us what business idea we should add, what supplier prices changed in your town, or how we can make this more useful..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-800"
              />
            </div>

            {/* Action */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 border border-stone-300 hover:bg-stone-50 text-stone-700 rounded-lg font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Feedback</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
