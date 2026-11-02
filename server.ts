import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header as required
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback generator for realistic blueprints if offline or no key
function getFallbackBlueprint(skill: string, hours: number, goal: number, mode: string) {
  const cleanSkill = skill.trim() || 'Skills Consulting';
  const targetPriceCore = Math.max(150, Math.round(goal / 3));
  const starterPrice = Math.max(75, Math.round(targetPriceCore * 0.45));
  const premiumPrice = Math.round(targetPriceCore * 2.2);

  return {
    businessNameIdeas: [
      { name: `The Practical ${cleanSkill} Studio`, rationale: "Clear, grounded, and establishes craftsmanship immediately." },
      { name: `Primer & Co. (${cleanSkill})`, rationale: "Sophisticated boutique framing that commands higher pricing." },
      { name: `LaunchPad ${cleanSkill}`, rationale: "Outcome-oriented branding that emphasizes fast client results." }
    ],
    positioningStatement: `I help busy clients get tangible results with ${cleanSkill.toLowerCase()} without the overwhelm, delivering reliable turnkey outcomes in under 7 days.`,
    offerPackages: [
      {
        name: "Quick-Start Audit & Strategy",
        price: starterPrice,
        turnaround: "48-72 hours",
        deliverables: [
          `Comprehensive 1-on-1 review of current ${cleanSkill.toLowerCase()} needs`,
          "Actionable written audit report with top 3 high-impact fixes",
          "30-minute implementation debrief call with recorded summary"
        ],
        whoItsFor: "First-time clients who want low-risk, immediate clarity before a bigger project.",
        clientsNeededForGoal: Math.ceil(goal / starterPrice)
      },
      {
        name: "Full Done-For-You Core Sprint",
        price: targetPriceCore,
        turnaround: "5-7 business days",
        deliverables: [
          `End-to-end execution of your signature ${cleanSkill.toLowerCase()} deliverable`,
          "2 rounds of tailored revisions included",
          "Custom handoff guide with best practices and troubleshooting",
          "14 days of direct email / messaging support post-delivery"
        ],
        whoItsFor: "Clients who need the problem solved completely without spending their own time.",
        clientsNeededForGoal: Math.ceil(goal / targetPriceCore)
      },
      {
        name: "Retainer & Ongoing Growth Partner",
        price: premiumPrice,
        turnaround: "Monthly ongoing",
        deliverables: [
          `Bi-weekly priority execution cycles for ongoing ${cleanSkill.toLowerCase()}`,
          "Priority 24-hour turnaround for urgent requests",
          "Monthly progress & ROI review report",
          "Direct asynchronous Slack / WhatsApp communication"
        ],
        whoItsFor: "Established clients looking for a dependable monthly partner on speed-dial.",
        clientsNeededForGoal: Math.ceil(goal / premiumPrice)
      }
    ],
    idealCustomerProfile: {
      targetAudience: `Small business owners, local operators, and professionals who urgently need ${cleanSkill.toLowerCase()} but lack the hours or technical skill to do it themselves.`,
      urgentProblem: `They are losing hours each week or missing revenue opportunities because their existing ${cleanSkill.toLowerCase()} is disorganized, outdated, or neglected.`,
      whereToFindThem: [
        "Local business owner Facebook & community groups (e.g. Chamber of Commerce, neighborhood business networks)",
        "LinkedIn keyword search for founders and department leads in your target niche",
        "Direct referrals through your immediate warm network (family, past colleagues, friends)",
        "Niche communities on Reddit, Discord, or industry message boards"
      ]
    },
    zeroCapitalOutreachPlaybook: {
      channelName: "Warm Network Reconnect (Highest 1st Client Conversion Rate)",
      actionStep: "Reach out to 15 people who already know and respect your work ethic with a zero-pressure referral inquiry.",
      readyToUseScript: `Hey [First Name]! Hope you're having a great week.\n\nQuick note: I've recently started taking on a limited number of clients helping them with ${cleanSkill.toLowerCase()}—specifically solving [urgent common pain point, e.g. getting organized / updating their system / saving 5+ hours weekly].\n\nI'm taking on 2 pilot clients this month at a special introductory rate to build out initial case studies. Do you know anyone who's been struggling with this lately who might appreciate an introduction?\n\nNo worries either way, just wanted to share what I'm up to!`,
      followUpScript: `Hey [First Name], just bumping this quickly in case anyone crossed your mind! If not, all good—hope you have a wonderful upcoming weekend!`
    },
    commonBeginnerObjections: [
      {
        objection: `"You don't have many public portfolio examples or client reviews yet."`,
        howToRespond: `"That's exactly why you're getting my 100% undivided attention. Because I'm selectively building my premier roster of case studies, I provide white-glove communication and an ironclad satisfaction guarantee: if you're not thrilled with the initial preview, we revise it at zero extra charge until you are."`
      },
      {
        objection: `"That price is higher than someone on cheap gig platforms like Fiverr."`,
        howToRespond: `"I completely understand. Cheap gig sites often give you generic templates that require hours of fixing later. With me, you get a custom, business-focused partner who understands your exact context and delivers finished work ready to produce value immediately."`
      },
      {
        objection: `"Can we start next month or sometime down the road?"`,
        howToRespond: `"I'd love to partner with you then! Just note that to protect quality, I only take on 2 new client projects per calendar month. If you'd like to reserve your spot for next month now with a small refundable deposit, I will lock in your introductory rate today."`
      }
    ],
    fourteenDayLaunchSprint: [
      { day: 1, title: "Define Your Signature Offer", task: "Pick ONE skill and write down the exact 3 deliverables included in your core package.", estimatedMinutes: 45, milestone: "Core Offer Defined" },
      { day: 2, title: "Create Your One-Page Proof Sheet", task: "Draft 1 sample before-and-after demonstration or case study snippet showing your skill.", estimatedMinutes: 60, milestone: "Proof Asset Ready" },
      { day: 3, title: "List 25 Target Prospects", task: "Write down 15 warm contacts and 10 local or online business leads who fit your ideal customer profile.", estimatedMinutes: 40, milestone: "Target Lead List Built" },
      { day: 4, title: "Send First 5 Warm Outreach Messages", task: "Personalize and send the warm network script to your closest 5 professional contacts.", estimatedMinutes: 30, milestone: "First Outreach Sent" },
      { day: 5, title: "Send Next 10 Warm Outreach Messages", task: "Complete the remaining warm contacts on your list and log any responses.", estimatedMinutes: 45, milestone: "Warm Pipeline Activated" },
      { day: 6, title: "Engage in 2 Targeted Online / Local Communities", task: "Provide genuine helpful advice on 2 relevant forums, Facebook groups, or LinkedIn threads.", estimatedMinutes: 50, milestone: "Public Authority Stamped" },
      { day: 7, title: "Follow Up with Unopened / Pending Contacts", task: "Send friendly 48-hour follow-up bumps to anyone who hasn't replied yet.", estimatedMinutes: 20, milestone: "First Week Sprint Complete" },
      { day: 8, title: "Conduct First Discovery Chat or Message", task: "Ask probing questions about their current bottleneck and listen 80% of the time.", estimatedMinutes: 30, milestone: "First Discovery Conversation" },
      { day: 9, title: "Send Formal One-Page Proposal", task: "Use the built-in proposal generator to send a crisp, simple scope and payment link.", estimatedMinutes: 25, milestone: "First Proposal Out" },
      { day: 10, title: "Secure First Paying Client Deposit", task: "Collect upfront 50% deposit via Stripe, PayPal, or bank transfer and celebrate!", estimatedMinutes: 15, milestone: "First Paying Client Closed" },
      { day: 11, title: "Client Onboarding & Kickoff", task: "Send intake form or kickoff questionnaire to collect all required assets.", estimatedMinutes: 35, milestone: "Project In Motion" },
      { day: 12, title: "Execute & Deliver Preview Milestone", task: "Complete the initial draft or milestone and send for client feedback.", estimatedMinutes: 90, milestone: "Draft Milestone Delivered" },
      { day: 13, title: "Incorporate Feedback & Final Delivery", task: "Finalize all deliverable assets with polish and present the finished bundle.", estimatedMinutes: 60, milestone: "Final Delivery Completed" },
      { day: 14, title: "Request Testimonial & Ask for 1 Referral", task: "Ask for a 2-sentence written review and ask if they know one other person who needs similar help.", estimatedMinutes: 20, milestone: "Case Study & Referral Engine Activated" }
    ]
  };
}

// 1. Generate Business Blueprint
app.post('/api/blueprint', async (req, res) => {
  try {
    const { skill, experienceLevel, hoursPerWeek, incomeGoal, deliveryMode, businessType } = req.body;

    if (!skill || typeof skill !== 'string') {
      return res.status(400).json({ error: "Skill is required" });
    }

    const hours = parseInt(hoursPerWeek) || 10;
    const goal = parseInt(incomeGoal) || 1000;
    const mode = deliveryMode || 'online';

    if (!ai) {
      console.log("No GEMINI_API_KEY found, serving high-fidelity handcrafted blueprint");
      return res.json(getFallbackBlueprint(skill, hours, goal, mode));
    }

    const prompt = `You are a world-class micro-business startup mentor specializing in helping absolute beginners monetize everyday skills into real, profitable small businesses without starting capital.

User Details:
- Skill / Hobby: "${skill}"
- Experience Level: "${experienceLevel || 'beginner'}"
- Available Hours Per Week: ${hours} hours
- Monthly Income Target: $${goal}
- Delivery Preference: "${mode}" (online, local, or hybrid)
- Preferred Business Model: "${businessType || 'service'}"

Generate a comprehensive, hyper-practical business launch blueprint customized specifically for this user.
Ensure every price and package is realistic for a beginner, and calculates the exact number of clients needed to hit their $${goal}/month goal.
Provide actionable outreach scripts, objection handlers, and a 14-day launch sprint.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are an elite, practical business advisor for beginners. Be concrete, motivating, and specific. Never use generic corporate jargon. Return purely valid JSON matching the requested schema.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            businessNameIdeas: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  rationale: { type: Type.STRING }
                },
                required: ["name", "rationale"]
              }
            },
            positioningStatement: { type: Type.STRING },
            offerPackages: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  price: { type: Type.INTEGER },
                  turnaround: { type: Type.STRING },
                  deliverables: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  whoItsFor: { type: Type.STRING },
                  clientsNeededForGoal: { type: Type.INTEGER }
                },
                required: ["name", "price", "turnaround", "deliverables", "whoItsFor", "clientsNeededForGoal"]
              }
            },
            idealCustomerProfile: {
              type: Type.OBJECT,
              properties: {
                targetAudience: { type: Type.STRING },
                urgentProblem: { type: Type.STRING },
                whereToFindThem: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                }
              },
              required: ["targetAudience", "urgentProblem", "whereToFindThem"]
            },
            zeroCapitalOutreachPlaybook: {
              type: Type.OBJECT,
              properties: {
                channelName: { type: Type.STRING },
                actionStep: { type: Type.STRING },
                readyToUseScript: { type: Type.STRING },
                followUpScript: { type: Type.STRING }
              },
              required: ["channelName", "actionStep", "readyToUseScript", "followUpScript"]
            },
            commonBeginnerObjections: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  objection: { type: Type.STRING },
                  howToRespond: { type: Type.STRING }
                },
                required: ["objection", "howToRespond"]
              }
            },
            fourteenDayLaunchSprint: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.INTEGER },
                  title: { type: Type.STRING },
                  task: { type: Type.STRING },
                  estimatedMinutes: { type: Type.INTEGER },
                  milestone: { type: Type.STRING }
                },
                required: ["day", "title", "task", "estimatedMinutes", "milestone"]
              }
            }
          },
          required: [
            "businessNameIdeas",
            "positioningStatement",
            "offerPackages",
            "idealCustomerProfile",
            "zeroCapitalOutreachPlaybook",
            "commonBeginnerObjections",
            "fourteenDayLaunchSprint"
          ]
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (error: any) {
    console.error("Error generating blueprint with Gemini:", error);
    // Graceful fallback so user always gets an actionable plan
    const { skill, hoursPerWeek, incomeGoal, deliveryMode } = req.body;
    return res.json(getFallbackBlueprint(skill || 'Skills Consulting', parseInt(hoursPerWeek) || 10, parseInt(incomeGoal) || 1000, deliveryMode || 'online'));
  }
});

// 2. Generate Personalized Outreach Script
app.post('/api/outreach-generator', async (req, res) => {
  try {
    const { channel, skill, offer, recipientType, extraNotes } = req.body;

    if (!ai) {
      return res.json({
        subjectLine: `Quick question regarding ${skill || 'your project'}`,
        openingHook: `Hi [Name], came across your work and noticed how much energy you're putting into [specific detail].`,
        bodyText: `I specialize in helping people with ${skill || 'this exact challenge'} so they can save hours and get reliable results without stress. I put together a quick, streamlined package for ${offer || 'custom support'}.`,
        callToAction: `Would you be open to a 5-minute chat or a quick message exchange this Thursday to see if it might be helpful? No pressure either way!`,
        followUp48h: `Hey [Name], just following up quickly in case this got buried! Would love to know if this is on your radar this quarter.`,
        proTips: [
          "Always mention 1 specific detail about the prospect to prove it is not a bot blast.",
          "Keep the initial ask tiny (a yes/no reply or 5-minute chat), not an hour call.",
          "Follow up exactly once after 48-72 hours—over 50% of positive replies happen on the first follow-up."
        ]
      });
    }

    const prompt = `Write a high-converting, non-pushy, authentic outreach message for a beginner starting a small business.
- Communication Channel: ${channel || 'email'}
- Skill / Business Service: ${skill}
- Core Offer: ${offer}
- Recipient Profile: ${recipientType}
- Specific Context / Notes: ${extraNotes || 'None'}

The script must feel human, helpful, and natural—not like spam or high-pressure sales.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert in warm, conversational direct outreach that converts for solo service providers. Return valid JSON.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subjectLine: { type: Type.STRING },
            openingHook: { type: Type.STRING },
            bodyText: { type: Type.STRING },
            callToAction: { type: Type.STRING },
            followUp48h: { type: Type.STRING },
            proTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["subjectLine", "openingHook", "bodyText", "callToAction", "followUp48h", "proTips"]
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (error: any) {
    console.error("Error generating outreach with Gemini:", error);
    return res.status(500).json({ error: error.message || "Failed to generate outreach" });
  }
});

// 3. Generate 1-Page Proposal
app.post('/api/proposal-generator', async (req, res) => {
  try {
    const { clientName, providerName, businessName, serviceName, price, deliverables, turnaround } = req.body;

    const proposalMarkdown = `# Project Agreement & Scope of Work

**Prepared For:** ${clientName || '[Client Name]'}  
**Prepared By:** ${providerName || '[Your Name]'} · ${businessName || '[Your Business Name]'}  
**Date:** ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}  
**Agreement Status:** Ready for Sign-Off

---

### 1. Project Objective & Scope
The objective of this engagement is to deliver high-quality **${serviceName || 'Service Package'}** to eliminate friction and achieve measurable outcomes.

**Deliverables Included:**
${(deliverables && deliverables.length ? deliverables : [
  "Comprehensive initial assessment and alignment kickoff",
  "Execution and production of core project assets",
  "Standard revision cycle (up to 2 rounds)",
  "Final handoff package with documentation & guidance"
]).map((item: string) => `- ${item}`).join('\n')}

---

### 2. Turnaround & Schedule
- **Target Completion Date:** ${turnaround || 'Within 7 business days from deposit'}
- Work commences immediately upon confirmation of initial deposit and intake asset receipt.

---

### 3. Investment & Payment Terms
- **Total Investment:** $${price || 350} (Flat rate, no hidden surprise fees)
- **Payment Structure:** 50% upfront deposit to initiate work ($${Math.round((price || 350) * 0.5)}), and 50% upon final delivery.
- **Payment Method:** Direct electronic transfer / Stripe / PayPal invoicing.

---

### 4. Client Satisfaction Guarantee
We believe in exceptional craftsmanship. If the initial draft requires refinement, we include up to two comprehensive rounds of revisions at no additional charge to ensure complete satisfaction.

---

**Client Acceptance:**  
Signature / Written Approval: ___________________________ Date: ____________
`;

    return res.json({ proposalText: proposalMarkdown });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

// 4. Client Objection Coach
app.post('/api/objection-coach', async (req, res) => {
  try {
    const { objection, userSkill } = req.body;

    if (!ai) {
      return res.json({
        recommendedResponse: `I completely understand where you're coming from! Let me explain how we can make this completely risk-free for you so you get the outcome you need without any hesitations.`,
        diplomaticAngle: "Acknowledge their concern first, then reframe toward outcomes and risk reversal.",
        alternativeCounterOffer: "Offer a smaller, self-contained starter audit before committing to the full package."
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `A client said the following objection to a beginner offering ${userSkill || 'freelance services'}:
"${objection}"

Give an authentic, polite, yet firm response that prevents getting taken advantage of, maintains pricing integrity, and gently guides the prospect forward.`,
      config: {
        systemInstruction: "You are an assertive, polite negotiation mentor. Return valid JSON.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedResponse: { type: Type.STRING },
            diplomaticAngle: { type: Type.STRING },
            alternativeCounterOffer: { type: Type.STRING }
          },
          required: ["recommendedResponse", "diplomaticAngle", "alternativeCounterOffer"]
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// 5. SEO: Dynamic Robots.txt
app.get('/robots.txt', (req, res) => {
  const host = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
  res.type('text/plain').send(`# Robots.txt for HustleStart
User-agent: *
Allow: /

Sitemap: ${host}/sitemap.xml
`);
});

// 6. SEO: Dynamic XML Sitemap for Search Engines
app.get('/sitemap.xml', (req, res) => {
  const host = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
  const today = new Date().toISOString().split('T')[0];

  const hustleIds = [
    'smokies-pasua-kachumbari',
    'mitumba-clothing-curator',
    'fruit-salad-juice-cups',
    'laundry-sneaker-cleaning',
    'canva-design-local-biz',
    'liquid-soap-detergent-distribution',
    'cbc-academic-homework-coaching',
    'mandazi-samosa-kiosk-supply',
    'errand-runner-market-shopper',
    'chicken-kienyeji-rearing',
    'bilingual-cv-linkedin-revamp',
    'campus-print-cyber-station',
    'mobile-barber-hair-grooming',
    'custom-pastries-cupcakes',
    'secondhand-books-revision',
    'phone-screen-protector-accessories',
    'potted-succulents-indoor-plants',
    'nail-technician-house-calls',
    'events-smartphone-content-creator',
    'wifi-hotspot-voucher-reseller',
    'urban-gunny-bag-vegetable-farming'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${host}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${host}/?tab=finder</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${host}/?tab=catalog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${host}/?tab=marketing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${host}/?tab=plan_view</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${host}/?tab=plans</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
${hustleIds.map(id => `  <url>
    <loc>${host}/?idea=${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  res.type('application/xml').send(xml);
});

// Mount Vite or serve static dist
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`LaunchCraft server running on port ${port}`);
  });
}

startServer();
