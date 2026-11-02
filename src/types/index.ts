export type HustleCategory = 
  | 'food_beverage'
  | 'digital_tech'
  | 'home_lifestyle'
  | 'retail_fashion'
  | 'education_skills'
  | 'agri_farming'
  | 'events_logistics';

export type BudgetTier = 'under_2k' | '2k_5k' | '5k_15k' | '15k_30k' | '30k_plus';

export type LocationType = 'home_online' | 'campus' | 'neighborhood' | 'market_center';

export type TimeCommitment = 'part_time' | 'weekends' | 'full_time';

export interface StartupExpenseItem {
  item: string;
  costKSh: number;
  optional?: boolean;
  notes?: string;
}

export interface PriceTierItem {
  tierName: string;
  offering: string;
  priceKSh: number;
  description: string;
}

export interface WhatsAppTemplates {
  launchOffer: string;
  statusUpdate: string;
  referralAsk: string;
  customerFollowUp: string;
}

export interface HustleIdea {
  id: string;
  title: string;
  swahiliOrLocalAlias?: string;
  category: HustleCategory;
  shortSummary: string;
  difficulty: 'Very Easy' | 'Easy' | 'Moderate';
  budgetTier: BudgetTier;
  estimatedBudgetMinKSh: number;
  estimatedBudgetMaxKSh: number;
  estimatedStartupExpenses: StartupExpenseItem[];
  estimatedMonthlyProfitKSh: string;
  requiredResources: string[];
  skills: string[];
  interests: string[];
  locationTypes: LocationType[];
  timeCommitment: TimeCommitment;
  practicalFirstSteps: string[];
  risksAndPitfalls: string[];
  potentialCustomerTypes: string[];
  suggestedNames: string[];
  elevatorPitch: string;
  priceListSample: PriceTierItem[];
  whatsAppTemplates: WhatsAppTemplates;
}

export interface PlanTask {
  id: string;
  text: string;
  detail: string;
  completed: boolean;
  targetDay?: number;
}

export interface PlanPhase {
  phaseNumber: number;
  phaseTitle: string;
  tasks: PlanTask[];
}

export interface StarterPlan {
  id: string;
  hustleId: string;
  hustleTitle: string;
  businessName: string;
  customDescription?: string;
  targetBudgetKSh: number;
  createdAt: string;
  targetLaunchDate: string;
  notes: string;
  phases: PlanPhase[];
  customPriceList?: PriceTierItem[];
}

export interface UserFeedback {
  id: string;
  timestamp: string;
  category: 'idea_suggestion' | 'feature_request' | 'cost_accuracy' | 'user_experience';
  name?: string;
  message: string;
  rating: number;
}
