import { HustleIdea } from '../types';

export const HUSTLE_IDEAS: HustleIdea[] = [
  {
    id: 'smokies-pasua-kachumbari',
    title: 'Smokie Pasua & Boiled Eggs Stand',
    swahiliOrLocalAlias: 'Mayai Boiro & Smokie Pasua',
    category: 'food_beverage',
    shortSummary: 'Sell ready-to-eat boiled eggs with fresh kachumbari and steamed smokies at bus stops, estates, or campus gates.',
    difficulty: 'Very Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 3500,
    estimatedBudgetMaxKSh: 6500,
    estimatedMonthlyProfitKSh: 'KSh 15,000 – 35,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Thermal food carrier bucket / cooler bucket', costKSh: 1200, notes: 'Keeps eggs warm for 5+ hours' },
      { item: 'First crate of 30 farm eggs', costKSh: 420 },
      { item: 'First pack of 22 Farmer\'s Choice smokies', costKSh: 480 },
      { item: 'Kachumbari ingredients (tomatoes, onions, dania, chillies, salt)', costKSh: 400 },
      { item: 'Condiments (tomato sauce, chilli sauce)', costKSh: 350 },
      { item: 'Knife, chopping board, clean food-grade apron & napkins', costKSh: 650 },
      { item: 'Initial county single-business casual permit / hygiene cert buffer', costKSh: 1000, optional: true }
    ],
    requiredResources: ['Warm thermal bucket', 'Clean white/green apron', 'Sharp knife', 'Food tongs', 'M-Pesa till / phone'],
    skills: ['Clean food handling', 'Quick mental math', 'Friendly banter', 'Early rising'],
    interests: ['Food & Beverage', 'Street retail', 'Daily cashflow'],
    locationTypes: ['neighborhood', 'campus', 'market_center'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Scout a high-footfall corner between 4:30 PM and 8:30 PM (near a matatu stage, gate, or bima building).',
      'Test your kachumbari recipe at home so tomatoes are diced fine, not soggy, and chillies are optional.',
      'Purchase your first crate of eggs and pack of smokies and conduct a dry run to calculate your exact unit profit.'
    ],
    risksAndPitfalls: [
      'Tomatoes spoiling if left in the sun—prepare kachumbari in small batches.',
      'Harassment by local municipal county askaris if trading in unauthorized spots without casual receipts.',
      'Selling on credit—strictly insist on immediate cash or M-Pesa before handing over food.'
    ],
    potentialCustomerTypes: [
      'Evening commuters stepping off matatus seeking an affordable quick snack.',
      'Campus students on a tight dinner budget (two eggs + one smokie = complete meal).',
      'Boda boda riders and security guards on night duty.'
    ],
    suggestedNames: ['ChapChap Pasua Corner', 'Kachumbari Kings', 'Daily Bite Smokies'],
    elevatorPitch: 'We serve fresh, hot boiled eggs and steamed smokies topped with crisp, zesty kachumbari for hungry commuters looking for a fast, delicious, and hygienic evening snack.',
    priceListSample: [
      { tierName: 'Single Boiled Egg', offering: '1 Boiled egg split with generous kachumbari & sauce', priceKSh: 25, description: 'Freshly boiled, warm, seasoned' },
      { tierName: 'Smokie Pasua', offering: '1 Steamed smokie split with kachumbari', priceKSh: 35, description: 'Classic spicy or plain' },
      { tierName: 'The Power Combo', offering: '2 Eggs + 1 Smokie with extra kachumbari', priceKSh: 80, description: 'Save KSh 5 on full evening combo' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari jirani! 👋 Starting today at 4:30 PM, I will be serving fresh, hygienic boiled eggs with sweet kachumbari and steamed smokies right outside [Location / Gate]. Stop by on your way home—first 15 customers get extra kachumbari and a warm smile! Karibuni!',
      statusUpdate: 'Fresh batch of warm boiled eggs and smokies ready right now at [Location]! Kachumbari is crunchy and spiced just right. Grab yours on your evening walk! 🥚🌭🔥',
      referralAsk: 'Hey friends! I just started a clean evening smokie & mayai stand at [Location]. If you or anyone in our estate is passing by after work, please stop by and support! An M-Pesa or shoutout is hugely appreciated 🙏',
      customerFollowUp: 'Asante sana for grabbing your evening bite from me yesterday! Hope the kachumbari had the right kick. What time do you usually head home so I can make sure your favorite is hot and ready?'
    }
  },
  {
    id: 'mitumba-clothing-curator',
    title: 'Thrift Clothes (Mitumba) Curation & WhatsApp Sales',
    swahiliOrLocalAlias: 'Mitumba Camera Selection',
    category: 'retail_fashion',
    shortSummary: 'Hand-pick first-selection ("camera") thrift clothes from Gikomba or Kongowea, wash/steam them, photograph them cleanly, and sell on WhatsApp & Instagram.',
    difficulty: 'Easy',
    budgetTier: '5k_15k',
    estimatedBudgetMinKSh: 5000,
    estimatedBudgetMaxKSh: 12000,
    estimatedMonthlyProfitKSh: 'KSh 20,000 – 50,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Hand-selected first-grade stock (15–25 pieces, e.g. oversized tees, blazers, vintage jeans)', costKSh: 5500, notes: 'Average KSh 200–350 per selected piece' },
      { item: 'Dry cleaning / home detergent & fabric softener wash', costKSh: 600 },
      { item: 'Wooden clothes hangers & steamer/iron', costKSh: 1200 },
      { item: 'Clean neutral backdrop sheet for photos & packaging poly-bags', costKSh: 700 },
      { item: 'Transport to market (Gikomba/Toi/Kongowea) early morning', costKSh: 1000 }
    ],
    requiredResources: ['Smartphone with decent camera', 'Iron or handheld garment steamer', 'WhatsApp Business app', 'Clear packaging envelopes'],
    skills: ['Eye for fashion trends', 'Thrift negotiation', 'Smartphone photography', 'Polite customer chatting'],
    interests: ['Fashion & Beauty', 'Photography', 'Social media marketing'],
    locationTypes: ['home_online', 'campus'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Wake up at 5:30 AM to hit Gikomba (or your nearest open-bale market) on bale opening days (e.g. Wednesday or Saturday).',
      'Select only 15 flawless, unique pieces in high-demand styles (e.g. trench coats, oversized graphic tees, or mom jeans).',
      'Wash, iron, and take clean flat-lay or model photos in bright morning natural window light.'
    ],
    risksAndPitfalls: [
      'Buying stained or torn clothes in dim market lighting—always inspect collars, underarms, and zippers.',
      'Holding excess unpopular inventory—stick to a narrow niche (e.g. corporate ladies\' blazers or streetwear tees).',
      'Customers requesting delivery without payment—require at least parcel delivery fee upfront.'
    ],
    potentialCustomerTypes: [
      'University students who want trendy Instagram aesthetic clothes on a budget.',
      'Young corporate employees needing sharp blazers without paying mall prices.',
      'Busy mothers looking for durable, unique children\'s jackets.'
    ],
    suggestedNames: ['Nairobi Thrift Vault', 'Urban Re-Loved Wear', 'Classy Camera Finds'],
    elevatorPitch: 'We curate hand-selected, freshly laundered, premium vintage and thrift fashion so stylish Nairobians can dress distinctively without spending thousands at high-end malls.',
    priceListSample: [
      { tierName: 'Vintage Graphic Tees', offering: 'Thoroughly washed, 100% cotton oversized tee', priceKSh: 650, description: 'Hand-picked vintage prints' },
      { tierName: 'Structured Work Blazer', offering: 'Tailored corporate blazer, steamed with spare buttons', priceKSh: 1200, description: 'High-end fabrics, perfect lining' },
      { tierName: 'Complete Weekend Fit', offering: 'Curated denim jeans + top bundle with free estate delivery', priceKSh: 2200, description: 'Styled coordinated set' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Hey fashion fam! ✨ Just dropped our very first curated Mitumba Drop! 15 unique, hand-picked pieces—washed, steamed, and ready to wear. Sizes from S to XL. Check my WhatsApp catalog link here: [Link]. First 5 orders get 10% off delivery! DM to claim before it is gone 🔥',
      statusUpdate: 'New Drop Live! 📸 Slide into DMs with the screenshot of your favorite piece to reserve. Once it’s gone, it’s gone forever! Courier delivery across Kenya via Speedaf / Fargo / Matatu parcel. 👗',
      referralAsk: 'Hey dear! Know any friends who love unique vintage streetwear or office blazers without spending a fortune? Forward them my catalog! If they buy, I’ll give you KSh 200 off your next order ❤️',
      customerFollowUp: 'Habari [Name]! Did your package arrive safely? How does the fit look on you? Would love to see a quick photo or review! Asante sana for supporting my hustle 🙏'
    }
  },
  {
    id: 'fruit-salad-juice-cups',
    title: 'Fresh Fruit Salad & Cold Juice Cups',
    swahiliOrLocalAlias: 'Saladi ya Matunda & Juisi Halisi',
    category: 'food_beverage',
    shortSummary: 'Prepare healthy, chilled fruit salad bowls and fresh juices (watermelon, mango, pineapple) and deliver to office workers, gyms, and campus dorms.',
    difficulty: 'Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 2800,
    estimatedBudgetMaxKSh: 5500,
    estimatedMonthlyProfitKSh: 'KSh 18,000 – 40,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Bulk fruit from wholesale market (watermelons, pineapples, sweet bananas, pawpaw, mangoes)', costKSh: 1800 },
      { item: 'Pack of 50 clear plastic salad bowls with dome lids & plastic forks', costKSh: 650 },
      { item: 'Cooler box / insulated delivery carrier bag with ice pack', costKSh: 1500 },
      { item: 'Clean kitchen cutting boards, peeling knives & food gloves', costKSh: 500 }
    ],
    requiredResources: ['Clean kitchen space', 'Refrigerator or ice cooler', 'Sealing salad containers', 'Disposable wooden or plastic forks'],
    skills: ['Fruit ripeness selection', 'Hygienic prep', 'Time management for lunch deliveries'],
    interests: ['Health & Wellness', 'Nutrition', 'Direct sales'],
    locationTypes: ['neighborhood', 'campus', 'market_center'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Visit local offices, bank branches, or hair salons at 10:00 AM with 3 complimentary tasting samples.',
      'Take pre-orders for the 1:00 PM lunch break so you only prep what is already sold.',
      'Chop fruit fresh at 11:30 AM, chill them, and deliver promptly at 12:45 PM.'
    ],
    risksAndPitfalls: [
      'Fruit over-ripening or browning—use lemon juice spritz on bananas and apples to prevent oxidation.',
      'Melting ice diluting your fruit cups—keep ice packs separated from fruit containers.',
      'Delayed deliveries—office workers have strict 1-hour lunch breaks; punctuality is non-negotiable.'
    ],
    potentialCustomerTypes: [
      'Bank tellers, receptionists, and office staff looking for light, healthy lunch alternatives.',
      'Gym members and health-conscious fitness enthusiasts.',
      'Campus students craving vitamins and fresh nutrition.'
    ],
    suggestedNames: ['Vitality Fresh Bowls', 'Nairobi Fruit Bar', 'Pure Orchard Delights'],
    elevatorPitch: 'We deliver crisp, chilled, vitamin-packed fruit salad bowls with natural yoghurt drizzle to busy workers who want a healthy, refreshing lunch without leaving their desks.',
    priceListSample: [
      { tierName: 'Standard Fresh Bowl', offering: 'Chilled mix of 4 fruits (watermelon, pineapple, banana, pawpaw)', priceKSh: 100, description: 'Light refreshing snack' },
      { tierName: 'Deluxe Crunch Bowl', offering: 'Mixed fruits + sweet vanilla yoghurt drizzle + roasted chia/nuts', priceKSh: 150, description: 'Energizing lunch meal' },
      { tierName: 'Weekly Wellness Plan', offering: 'Daily lunch bowl delivered Monday to Friday (5 days)', priceKSh: 650, description: 'Pre-paid weekly office subscription' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Good morning! 🍍 Feeling sluggish during afternoon meetings? Starting today, I am doing daily 1:00 PM doorstep deliveries of chilled, freshly sliced Fruit Salad Bowls to offices around [Area]. Pre-order by 11:00 AM to get free desk delivery! Reply "BOWL" to book yours 🍉',
      statusUpdate: 'Today’s Harvest Mix: Sweet Thika Pineapples, crisp watermelon, ripe mango chunks, and pawpaw! Chilling in the cooler right now. Only 12 bowls left for today’s lunch run. Book yours now! 🥭🥑',
      referralAsk: 'Hi [Name]! If anyone in your department wants healthy fruits delivered during lunch, let me know. For every colleague you introduce who orders, your next bowl is on me! 💚',
      customerFollowUp: 'Habari! Hope you enjoyed the fruit bowl today! Was the sweetness and chill just right? Let me know if you’d like me to reserve your spot on tomorrow’s 1:00 PM run.'
    }
  },
  {
    id: 'laundry-sneaker-cleaning',
    title: 'Estate Sneaker Deep Cleaning & Shoe Laundry',
    swahiliOrLocalAlias: 'Sneaker Care & Usafi wa Viatu',
    category: 'home_lifestyle',
    shortSummary: 'Pick up dirty sneakers, white shoes, and boots from estate neighbors, deep-clean them with specialized brushes, and return them looking brand new.',
    difficulty: 'Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 2200,
    estimatedBudgetMaxKSh: 4500,
    estimatedMonthlyProfitKSh: 'KSh 16,000 – 38,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Sneaker cleaning solution / premium foam wash & white shoe brightening paste', costKSh: 1100 },
      { item: 'Set of 3 brush stiffness levels (soft horsehair for mesh, medium for leather, hard for soles)', costKSh: 750 },
      { item: 'Microfiber drying towels & shoe trees / foam shapers', costKSh: 450 },
      { item: 'Packaging dust bags with your branded sticker/contact card', costKSh: 600 }
    ],
    requiredResources: ['Shoe brushes', 'Cleaning soap paste', 'Clean microfiber cloths', 'Sun drying area', 'WhatsApp for estate outreach'],
    skills: ['Attention to detail', 'Fabric care knowledge (suede vs leather vs canvas)', 'Reliable doorstep pickup'],
    interests: ['Streetwear', 'Home services', 'Craftsmanship'],
    locationTypes: ['neighborhood', 'campus'],
    timeCommitment: 'weekends',
    practicalFirstSteps: [
      'Clean 3 pairs of your own dirtiest sneakers and photograph high-contrast "Before and After" shots.',
      'Post the comparison photos on your estate WhatsApp group or campus hostel noticeboard.',
      'Offer a "2 pairs for KSh 350" launch special with free doorstep collection and 24-hour turnaround.'
    ],
    risksAndPitfalls: [
      'Color bleeding on suede or canvas shoes if soaked with too much water—use dry foam techniques.',
      'Drying shoes directly in scorching sun causing glue peeling or yellowing soles—dry in airy shade.',
      'Mixing up client shoelaces—tag each pair with a labeled string upon collection.'
    ],
    potentialCustomerTypes: [
      'Busy corporate workers who wear sneakers on casual Fridays and gym sessions.',
      'Campus students who want clean kicks for parties and classes without doing tedious scrubbing.',
      'Parents whose kids come home from school with mud-caked sports shoes.'
    ],
    suggestedNames: ['SneakerSpruce Kenya', 'Kicks Revival Lab', 'FreshKicks Estate Care'],
    elevatorPitch: 'We restore your dirty, faded sneakers, suede loafers, and sports shoes back to factory-fresh crispness with professional stain removal and doorstep pickup in under 24 hours.',
    priceListSample: [
      { tierName: 'Standard Sneaker Revamp', offering: 'Upper mesh, mid-sole scrub, lace wash, and deodorizing', priceKSh: 200, description: 'Canvas & standard trainers' },
      { tierName: 'Leather & Suede Premium Care', offering: 'Gentle stain extraction, conditioning, and color restoration', priceKSh: 350, description: 'Air Jordans, loafers & boots' },
      { tierName: 'Family 3-Pair Bundle', offering: 'Deep clean for any 3 pairs with free estate pickup & drop-off', priceKSh: 550, description: 'Save KSh 100 on multi-shoe bundle' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari neighbors! 👟 Tired of scrubbing your favorite sneakers or white shoes? I am running a weekend Sneaker Deep-Clean pickup in our estate. Before/after photos attached! Launch rate: KSh 200 per pair, doorstep pickup and returned fresh in 24 hours. Message me your house number to book a pickup! 🧼✨',
      statusUpdate: 'Another pair brought back to life! 🔥 Check this Before/After transformation on these white Air Forces. Book your weekend drop-off today before slots fill up! 👟👟',
      referralAsk: 'Hi [Name]! If you loved how your kicks turned out, please share my flyer to your block or church group! For every friend you refer, you get your next pair cleaned free! 🤝',
      customerFollowUp: 'Habari [Name]! Dropped off your clean sneakers earlier today—hope they are looking crisp and ready for the weekend! Let me know when your next pair is ready for some TLC.'
    }
  },
  {
    id: 'canva-design-local-biz',
    title: 'Canva Social Media & Poster Design for Local Businesses',
    category: 'digital_tech',
    shortSummary: 'Design professional flyers, price lists, Instagram posters, and business cards for local salons, chemists, daycares, and butcheries using Canva on a phone or laptop.',
    difficulty: 'Very Easy',
    budgetTier: 'under_2k',
    estimatedBudgetMinKSh: 1000,
    estimatedBudgetMaxKSh: 3000,
    estimatedMonthlyProfitKSh: 'KSh 15,000 – 40,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Canva account (starts 100% free; Pro trial optional)', costKSh: 0 },
      { item: 'Monthly mobile data bundle (10GB-15GB) for research & client sending', costKSh: 1000 },
      { item: 'Sample portfolio printed laminates / PDF digital catalog', costKSh: 500 }
    ],
    requiredResources: ['Smartphone or laptop', 'Internet connection', 'Free Canva app', 'WhatsApp Web'],
    skills: ['Eye for visual balance', 'Basic spelling & typography', 'Canva template customization', 'Patience with edits'],
    interests: ['Digital & Tech', 'Creative design', 'Remote work'],
    locationTypes: ['home_online', 'neighborhood'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Pick 3 local shops with poorly formatted price lists or flyers (e.g. local salon, barber shop, cake baker).',
      'Redesign their flyer cleanly on Canva with their logo, correct phone number, and enticing photos.',
      'Send it to them on WhatsApp with a note: "Hi! Made this modernized flyer for your business as a gift. If you ever need weekly promo posters, I can do them for KSh 300 each."'
    ],
    risksAndPitfalls: [
      'Clients asking for infinite revisions—always state: "Includes up to 2 revision rounds; extra rounds are KSh 100".',
      'Using low-resolution, blurry photos downloaded from Google—use free stock sites like Unsplash or Pexels.',
      'Clients ghosting before paying—always send a watermarked preview screenshot until M-Pesa is received.'
    ],
    potentialCustomerTypes: [
      'Salon and spa owners wanting price menus for their walls and WhatsApp status.',
      'Churches, youth groups, and funeral committees needing clean announcement posters.',
      'Online bakers, clothes sellers, and car wash operators wanting weekly Instagram posts.'
    ],
    suggestedNames: ['PixelCraft Studio', 'BizzPost Graphics', 'SmartBrand Kenya'],
    elevatorPitch: 'We create crisp, modern social media posters, WhatsApp status flyers, and price lists that help neighborhood businesses attract paying customers without paying expensive agency fees.',
    priceListSample: [
      { tierName: 'Single WhatsApp Promo Poster', offering: '1 High-resolution flyer optimized for WhatsApp status and IG', priceKSh: 350, description: 'Turnaround in 4 hours' },
      { tierName: 'Service Price Menu / Rate Card', offering: 'Clean A4 print-ready PDF and image rate card for walls/tables', priceKSh: 700, description: 'Formatted with brand colors' },
      { tierName: 'Monthly Social Bundle', offering: '8 Branded promo flyers per month (2 per week)', priceKSh: 2400, description: 'Consistent weekly marketing partner' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari business owners! 📱 Want professional posters for your WhatsApp status and Instagram without paying agency fees? I design high-resolution flyers, price menus, and promo cards. First poster is only KSh 250 this week! Reply with your business name to see a free draft preview 🎨',
      statusUpdate: 'Latest design just completed for a local beauty parlour! 💅 Swipe to see how a clean poster boosts customer trust. DM me today to upgrade your business flyers! 🚀',
      referralAsk: 'Hey friends! If you know any small business owner (salons, bakeries, clothing shops) who needs professional flyers or logos, please share my contact! Asante sana for supporting youth hustle 🙏',
      customerFollowUp: 'Hi [Name]! Sent over your final high-resolution flyer on email and WhatsApp. How did the weekend promo perform? Let me know when you need the next poster designed!'
    }
  },
  {
    id: 'liquid-soap-detergent-distribution',
    title: 'Estate Multipurpose Liquid Soap & Bleach Distribution',
    swahiliOrLocalAlias: 'Sabuni ya Maji & Jik Refill',
    category: 'home_lifestyle',
    shortSummary: 'Purchase concentrated certified liquid soap base chemicals in bulk, dilute and mix high-foaming multipurpose soap at home, and sell in 1L, 2L, and 5L jerrycans to households and car washes.',
    difficulty: 'Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 3500,
    estimatedBudgetMaxKSh: 7500,
    estimatedMonthlyProfitKSh: 'KSh 18,000 – 45,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Bulk raw chemical pack (Sulfonic acid, SLES, Ufacid, fragrance, color, thickener) makes 40 Litres', costKSh: 1800 },
      { item: '10 empty 5-Litre reusable jerrycans with caps', costKSh: 900 },
      { item: 'Mixing stick, 50L plastic drum or clean bucket', costKSh: 600 },
      { item: 'Hand gloves, measuring cup & simple printed label stickers', costKSh: 450 }
    ],
    requiredResources: ['Clean 50L plastic drum or bucket', 'Clean tap water', 'Plastic funnel & measuring cup', 'Empty recyclable containers'],
    skills: ['Following dilution chemical measurements precisely', 'Patience during stirring', 'Estate doorstep pitching'],
    interests: ['Home Services', 'Manufacturing', 'Recurring consumable sales'],
    locationTypes: ['neighborhood'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Buy a 20-litre starter chemical DIY kit from reliable chemical suppliers on Kirinyaga Road (Nairobi) or local chemical shops.',
      'Follow safety precautions (wear gloves, eye glasses), stir slowly to avoid excessive foam, and let it settle overnight.',
      'Bottle small 500ml sample bottles and give 10 estate neighbors a free trial for dishwashing and floor scrubbing.'
    ],
    risksAndPitfalls: [
      'Chemical splash irritation—never mix without protective plastic gloves and eye care.',
      'Adding too much water makes soap watery and useless—stick strictly to measured ratios for thick foam.',
      'Supermarket competition—you win on price per litre (supermarket soap is KSh 250/L; your refill is KSh 80-100/L).'
    ],
    potentialCustomerTypes: [
      'Mothers and domestic workers who do daily dishwashing, tile cleaning, and laundry.',
      'Local car wash operators who consume 20+ litres of foaming soap weekly.',
      'Local restaurants, butcheries, and kiosks needing affordable hygiene detergents.'
    ],
    suggestedNames: ['ShineBright Home Care', 'Bora Clean Soap Refill', 'CrystalWash Detergents'],
    elevatorPitch: 'We deliver thick, high-foaming, pleasantly scented multipurpose liquid soap directly to your doorstep at half the supermarket price, keeping your home and dishes sparkling clean on a budget.',
    priceListSample: [
      { tierName: '1-Litre Bottle Refill', offering: 'Bring your own bottle, filled with thick lemon dish soap', priceKSh: 80, description: 'Supermarket equivalent is KSh 220' },
      { tierName: '5-Litre Family Jerrycan', offering: '5L Jerrycan included with thick lavender or pine floor & dish soap', priceKSh: 400, description: 'Lasts an average family 6-8 weeks' },
      { tierName: 'Car Wash Bulk 20L Drum', offering: '20L high-foam vehicle wash shampoo delivered', priceKSh: 1400, description: 'Bulk wholesale partner price' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari jirani! 🧼 Tired of paying high supermarket prices for dishwashing soap? I am supplying thick, scented multipurpose liquid soap in our court! 1 Litre is only KSh 80 (or bring your bottle for refill). High foam, gentle on hands, cuts grease fast. Message me your house number for free doorstep delivery! 🧴',
      statusUpdate: 'Fresh batch of Lemon & Lavender multipurpose soap ready today! 🍋 Perfect for tiles, utensils, laundry, and sinks. Delivering across the estate today from 3 PM. Grab your 5L jerrycan today! 🏠✨',
      referralAsk: 'Hi [Name]! If you loved how the soap washed your dishes, please share my number with your neighbor or our court group. Refills are always available on 10 minutes notice! 🌟',
      customerFollowUp: 'Habari mama! How is the soap serving you in the kitchen? Did the foam and scent last well? Let me know whenever your container is running low so I can drop another litre.'
    }
  },
  {
    id: 'cbc-academic-homework-coaching',
    title: 'CBC & High School Homework Coaching & Tuition',
    category: 'education_skills',
    shortSummary: 'Help primary school pupils (CBC curriculum) and secondary students with homework, math concepts, science projects, and revision during evenings and weekends.',
    difficulty: 'Very Easy',
    budgetTier: 'under_2k',
    estimatedBudgetMinKSh: 500,
    estimatedBudgetMaxKSh: 2000,
    estimatedMonthlyProfitKSh: 'KSh 15,000 – 45,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Current CBC syllabus guidebooks / past exam revision papers', costKSh: 800 },
      { item: 'A4 printing / photocopying worksheets for learners', costKSh: 400 },
      { item: 'Stationery pack (pens, pencils, rulers, whiteboard markers)', costKSh: 300 }
    ],
    requiredResources: ['Strong grasp of primary/secondary subjects', 'Patience with children', 'Notebooks and past papers', 'Clean study space or house-call mobility'],
    skills: ['Patient explaining', 'CBC project understanding', 'Punctuality', 'Encouraging demeanor'],
    interests: ['Education & Skills', 'Mentorship', 'Youth development'],
    locationTypes: ['neighborhood', 'home_online'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Identify 2 subjects you scored top grades in (e.g. Mathematics, English, Sciences).',
      'Approach 3 neighborhood parents whose kids attend day school and struggle with CBC evening homework.',
      'Offer a 2-day free trial week so parents witness their child completing homework peacefully without tears.'
    ],
    risksAndPitfalls: [
      'Parents expecting you to do the homework FOR the child—set clear boundaries that you teach them HOW to solve it.',
      'Late payment after sessions—agree on weekly upfront or month-end retainer terms.',
      'Child distraction—set structured 45-minute focus intervals with short breaks.'
    ],
    potentialCustomerTypes: [
      'Busy working parents who come home exhausted at 7:30 PM and dread doing confusing CBC projects.',
      'Candidates preparing for KPSEA (Grade 6) or KCSE secondary national exams.',
      'Homeschooled or remedial students needing 1-on-1 attention.'
    ],
    suggestedNames: ['BrightMind CBC Tutors', 'AceHomework Mentors', 'SmartStep Academy'],
    elevatorPitch: 'We provide patient, individualized evening and weekend homework coaching for primary and high school students, turning confusing homework stress into confident academic excellence.',
    priceListSample: [
      { tierName: 'Single 1.5-Hour Session', offering: 'Homework assistance & concept review at student’s home', priceKSh: 400, description: 'Pay per session' },
      { tierName: 'Weekly 3-Day Package', offering: 'Monday, Wednesday, Friday sessions (1.5 hrs each)', priceKSh: 1100, description: 'Consistent weekly rhythm' },
      { tierName: 'Monthly Comprehensive Retainer', offering: '12 Sessions/month + exam prep worksheets + monthly parent progress report', priceKSh: 4200, description: 'Complete academic confidence' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Dear Parents! 📚 Stressed by evening CBC homework and math projects after a long day at work? I am offering friendly, patient 1-on-1 homework coaching right here in our estate. Specializing in Grades 4–8 Maths, Science & English. Free 1-hour assessment trial this week! Reply with your child’s grade to book 📝',
      statusUpdate: 'Nothing beats seeing a child smile when a tough math concept finally clicks! ✨ Weekend revision sessions now open for Grade 6 & 8 exam candidates. Only 3 evening slots available. 📖🎓',
      referralAsk: 'Hello [Parent Name]! If you have noticed an improvement in [Child’s Name]’s homework habits, I’d be deeply honored if you shared my contact with other parents in their class WhatsApp group! 🙏',
      customerFollowUp: 'Good evening [Parent Name]! Today we tackled long division and [Child] solved 4 problems completely independently! Worksheets are filed in their bag. See you on Wednesday!'
    }
  },
  {
    id: 'mandazi-samosa-kiosk-supply',
    title: 'Morning Mandazi & Samosas Supply to Local Kiosks & Offices',
    swahiliOrLocalAlias: 'Ugavi wa Mandazi & Sambusa',
    category: 'food_beverage',
    shortSummary: 'Wake up early, fry golden soft mandazis and beef/green gram (ndengu) samosas at home, and supply 5 to 10 neighborhood tea kiosks and offices by 6:30 AM.',
    difficulty: 'Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 2500,
    estimatedBudgetMaxKSh: 5500,
    estimatedMonthlyProfitKSh: 'KSh 20,000 – 45,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'First baking ingredients batch (24kg flour bale, 5L cooking oil, yeast, sugar, cardamom, baking powder)', costKSh: 2200 },
      { item: 'Food-grade plastic delivery storage buckets with airtight lids', costKSh: 800 },
      { item: 'Brown greaseproof paper bags & packaging', costKSh: 400 },
      { item: 'Large frying pan / deep frying sufuria (if not already in home kitchen)', costKSh: 900, optional: true }
    ],
    requiredResources: ['Home kitchen gas/jiko stove', 'Deep frying pan & slotted spoon', 'Clean delivery buckets', 'Early morning alarm (4:30 AM)'],
    skills: ['Dough kneading & rolling', 'Golden fry temperature control', 'Reliable early morning delivery punctuality'],
    interests: ['Food & Beverage', 'B2B supply', 'High volume production'],
    locationTypes: ['neighborhood', 'market_center'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Walk to 6 neighborhood tea kiosks and small cafes between 3 PM and 5 PM when owners are not busy.',
      'Bring 4 warm sample mandazis and ask: "Do you buy mandazi from suppliers for morning tea? I deliver fresh by 6:15 AM at wholesale KSh 7 (you sell at KSh 10)."',
      'Secure commitments from 3 kiosks to take 30 mandazis each on Monday morning.'
    ],
    risksAndPitfalls: [
      'Oil absorbing too much into dough if frying temperature is too low—master your oil heat.',
      'Kiosks taking items on credit and delaying settlement—collect cash upon morning delivery before dropping the bucket.',
      'Oversupply without pre-agreed orders—never fry blindly; only fry based on committed numbers.'
    ],
    potentialCustomerTypes: [
      'Local kibanda and kiosk tea sellers who lack space or staff to fry early morning pastries.',
      'Office security desks and staff canteens needing breakfast bites.',
      'Construction sites (mjengo) where workers buy heavy breakfast snacks at 9:00 AM.'
    ],
    suggestedNames: ['GoldenCrust Bakers', 'Asubuhi Fresh Mandazi', 'Sunrise Bites Nairobi'],
    elevatorPitch: 'We supply soft, aromatic cardamom mandazis and crispy savory samosas hot and fresh to neighborhood kiosks and offices before 6:30 AM every morning.',
    priceListSample: [
      { tierName: 'Wholesale Mandazi Pack (30 pcs)', offering: 'Delivered fresh by 6:15 AM (Retail KSh 10, Kiosk keeps KSh 3 profit)', priceKSh: 210, description: 'KSh 7 per piece wholesale' },
      { tierName: 'Crispy Ndengu Samosas (20 pcs)', offering: 'Spiced yellow gram & onion samosas in golden crust', priceKSh: 300, description: 'KSh 15 wholesale / KSh 20 retail' },
      { tierName: 'Beef Samosas Pack (20 pcs)', offering: 'Minced beef, coriander & cumin filling', priceKSh: 500, description: 'KSh 25 wholesale / KSh 35 retail' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari mwenye biashara! ☕ Do you need soft, golden mandazi or hot samosas delivered to your hotel/kiosk every morning by 6:15 AM sharp? No smoke, no kitchen hassle for you—just pure profit. Free sample batch available tomorrow morning! Reply to book your test batch 🥟',
      statusUpdate: 'Fresh batch rolling out at 5:00 AM tomorrow! 🌅 Pre-orders for morning office tea snacks close at 9:00 PM tonight. Mandazi & Ndengu samosas hot and ready. 🥐',
      referralAsk: 'Hi [Name]! If you have any friends running a tea spot, office canteen, or construction crew, please connect us! We guarantee 6:15 AM doorstep delivery every morning. 🙏',
      customerFollowUp: 'Habari bosi! How did the morning mandazi move today? Did customers enjoy the cardamom flavor? Let me know your count for tomorrow morning so I prep the dough tonight.'
    }
  },
  {
    id: 'errand-runner-market-shopper',
    title: 'Estate Errand Runner & Fresh Market Grocery Shopper',
    swahiliOrLocalAlias: 'Mtu wa Kazi & Soko Shopping',
    category: 'events_logistics',
    shortSummary: 'Shop fresh, wholesale-priced vegetables and groceries from central markets (e.g. Marikiti, Wakulima, Githurai) and deliver them sorted and cleaned to busy estate residents.',
    difficulty: 'Very Easy',
    budgetTier: 'under_2k',
    estimatedBudgetMinKSh: 1200,
    estimatedBudgetMaxKSh: 3000,
    estimatedMonthlyProfitKSh: 'KSh 15,000 – 35,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Heavy-duty reusable market shopping bags / gunny sacs', costKSh: 500 },
      { item: 'Hand sanitizer, food gloves & vegetable sorting trays', costKSh: 350 },
      { item: 'Initial bus fare buffer to central markets & communication airtime', costKSh: 650 }
    ],
    requiredResources: ['Smartphone with WhatsApp', 'Good walking stamina & energy', 'Eye for fresh farm produce', 'Reliable M-Pesa account'],
    skills: ['Bargaining at central wholesale markets', 'Selecting fresh, firm vegetables', 'Punctual communication', 'Honesty & integrity'],
    interests: ['Home Services', 'Logistics', 'Customer care'],
    locationTypes: ['neighborhood', 'market_center'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Learn the wholesale prices at your nearest major food market (e.g. Wakulima / Marikiti or City Market) vs neighborhood supermarkets.',
      'Create a clear WhatsApp order form for weekly vegetable baskets (e.g. potatoes, onions, tomatoes, sukuma, carrots, garlic).',
      'Collect orders on Thursday and deliver fresh on Saturday morning with a flat shopping service fee.'
    ],
    risksAndPitfalls: [
      'Client disputes over spoiled produce—always select high-grade vegetables and send photo proof from the market.',
      'Under-charging for heavy lifting—always charge based on basket size or distance.',
      'Carrying heavy bags without planning route—group estate deliveries by court/block.'
    ],
    potentialCustomerTypes: [
      'Working mothers who don’t have 4 hours to brave crowded, muddy weekend wholesale markets.',
      'Elderly residents or people without private cars to haul heavy sacks of potatoes.',
      'Small estate food vendors who need daily produce brought directly to their gates.'
    ],
    suggestedNames: ['SokoChapChap Express', 'GreenBasket Couriers', 'Estate Runner Kenya'],
    elevatorPitch: 'We brave the crowded wholesale markets at dawn to hand-pick the freshest, cheapest farm vegetables and deliver them washed, sorted, and boxed directly to your kitchen counter.',
    priceListSample: [
      { tierName: 'Standard Kitchen Basket Errand', offering: 'Shopping & delivery of up to 10kg groceries from market', priceKSh: 300, description: 'Flat service fee + client pays receipt' },
      { tierName: 'Weekly Family Food Crate', offering: 'Curated 15kg box: Tomatoes, onions, potatoes, carrots, greens & fruit', priceKSh: 1400, description: 'Includes market cost + delivery fee' },
      { tierName: 'Quick Estate Emergency Errand', offering: 'Pharmacy, gas cylinder exchange, or dry cleaner pickup in 30 mins', priceKSh: 150, description: 'Instant neighborhood task' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari neighbors! 🥦 Skip the muddy Marikiti/Wakulima weekend crowd! Tomorrow morning at 6:00 AM, I am heading to the wholesale market for fresh, crisp farm produce (sweet onions, firm tomatoes, Irish potatoes, fresh sukuma). Send me your shopping list by 9:00 PM tonight and have it delivered to your doorstep by 10:30 AM! 🍅🥕',
      statusUpdate: 'At the wholesale market right now! Look at these fresh red onions and sweet mangoes. Soko prices are amazing today. Taking last-minute additions for the next 20 minutes! DM me your list 🛒✨',
      referralAsk: 'Hi [Name]! If you loved having your groceries delivered fresh and sorted without leaving the house, please mention my service on your building WhatsApp group! Appreciate you so much 🙏',
      customerFollowUp: 'Good afternoon! Dropped off your market crate with the security desk / at your door. The receipt is inside the envelope. Let me know if everything is crisp and fresh!'
    }
  },
  {
    id: 'chicken-kienyeji-rearing',
    title: 'Improved Kienyeji Chicken & Egg Micro-Brooding',
    category: 'agri_farming',
    shortSummary: 'Rear 20 to 50 improved kienyeji chicks (KARI or Rainbow Rooster) in a small backyard or rented coop space, and sell organic kienyeji eggs and mature birds.',
    difficulty: 'Moderate',
    budgetTier: '15k_30k',
    estimatedBudgetMinKSh: 12000,
    estimatedBudgetMaxKSh: 26000,
    estimatedMonthlyProfitKSh: 'KSh 20,000 – 55,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: '30 Day-old vaccinated improved Kienyeji chicks (KARI / KALRO / Kenbro)', costKSh: 3300, notes: '~KSh 110 per chick' },
      { item: 'First 2 months chick starter mash & grower feed (50kg)', costKSh: 4200 },
      { item: 'Basic wooden coop modification, mesh wire & brooding charcoal stove / heat lamp', costKSh: 3500 },
      { item: 'Vaccines (Gumboro, Newcastle) & multivitamins', costKSh: 1200 },
      { item: 'Feeders, drinkers & wood shavings bedding', costKSh: 1400 }
    ],
    requiredResources: ['Well-ventilated dry space / backyard', 'Heat source for brooding first 3 weeks', 'Clean water', 'Daily dedication for feeding'],
    skills: ['Poultry hygiene', 'Observing sick bird symptoms early', 'Basic vaccination adherence'],
    interests: ['Agriculture & Farming', 'Self-sufficiency', 'Organic food'],
    locationTypes: ['neighborhood', 'home_online'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Clean and disinfect your brooding space with lime wash or disinfectant 3 days before chick arrival.',
      'Purchase day-old chicks from certified KALRO or trusted hatcheries with vaccination records.',
      'Pre-sell monthly egg subscription slots to neighbors who prefer authentic organic yellow-yolk kienyeji eggs.'
    ],
    risksAndPitfalls: [
      'High chick mortality during the first 14 days if room temperature drops—maintain consistent warm brooding.',
      'Disease outbreak—never skip Newcastle and Gumboro vaccine schedules.',
      'Feed cost inflation—supplement commercial feed with clean kitchen greens, sukuma waste, and dried black soldier fly larvae.'
    ],
    potentialCustomerTypes: [
      'Health-conscious families seeking organic kienyeji eggs for young children and pregnant mothers.',
      'Local restaurants and pubs serving premium kienyeji chicken wet-fry dishes.',
      'Holiday shoppers looking for live, healthy mature birds during Easter and Christmas.'
    ],
    suggestedNames: ['Homestead Kienyeji Organics', 'Boma Fresh Poultry', 'Asili Kuku Hub'],
    elevatorPitch: 'We raise healthy, organically fed improved kienyeji chickens in clean, hygienic conditions, providing families with authentic nutrient-dense eggs and mature live or dressed birds.',
    priceListSample: [
      { tierName: 'Kienyeji Eggs Crate (30 eggs)', offering: 'Farm fresh, golden-yolk certified organic eggs', priceKSh: 650, description: 'Supermarket charges KSh 850+' },
      { tierName: 'Mature Live Kienyeji Cock', offering: 'Healthy 5-month-old mature rooster (approx. 2.2kg)', priceKSh: 1300, description: 'Prime for holiday family meals' },
      { tierName: 'Dressed & Cleaned Full Bird', offering: 'Slaughtered, plucked, cleaned, and vacuum sealed', priceKSh: 1450, description: 'Ready to marinate & cook' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari neighbors! 🐔 Pure organic Kienyeji eggs are here! Collected fresh daily from our clean, free-range homestead flock. Deep yellow yolks, nutrient-packed, and zero chemical hormones. Only KSh 650 per full crate (30 eggs) with free delivery within our estate. Book your crate today! 🥚✨',
      statusUpdate: 'Fresh morning egg harvest done! 🍳 Crates are packed and ready. Only 4 crates left for today’s estate deliveries. Give your family authentic nutrition this breakfast! 🌾',
      referralAsk: 'Hi [Name]! If you enjoyed the deep yellow yolks and rich taste of our kienyeji eggs, please let your estate friends know! Word of mouth keeps our farm growing 🙏',
      customerFollowUp: 'Habari! How was breakfast with the fresh eggs? Did you notice the rich flavor? Next crate delivery will be on Tuesday—should I reserve one for your kitchen?'
    }
  },
  {
    id: 'bilingual-cv-linkedin-revamp',
    title: 'Professional CV, Resume & LinkedIn Profile Makeover',
    category: 'education_skills',
    shortSummary: 'Rewrite cluttered, poorly formatted CVs into modern, ATS-compliant resumes that highlight quantified achievements for job seekers and college graduates.',
    difficulty: 'Very Easy',
    budgetTier: 'under_2k',
    estimatedBudgetMinKSh: 500,
    estimatedBudgetMaxKSh: 2500,
    estimatedMonthlyProfitKSh: 'KSh 18,000 – 50,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Internet data bundle & Google Docs / Canva ATS templates', costKSh: 1000 },
      { item: 'PDF converter & professional typography resources', costKSh: 300 }
    ],
    requiredResources: ['Smartphone or laptop', 'Good grammar and editing skills', 'Google Docs / Microsoft Word', 'LinkedIn account'],
    skills: ['Professional business writing', 'Formatting clarity', 'Interview tips', 'Empathy with job seekers'],
    interests: ['Digital & Tech', 'Career coaching', 'Writing'],
    locationTypes: ['home_online', 'campus'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Take your own CV or a friend’s messy CV and transform it into a crisp, modern 2-page format with clear action verbs.',
      'Post a before/after snippet (blurring personal contact info) on LinkedIn or Twitter/X.',
      'Offer a free "CV Audit" where you point out 3 quick flaws in 5 minutes via voice note.'
    ],
    risksAndPitfalls: [
      'Clients expecting guaranteed job placement—always clarify: "A great CV secures you the interview; acing the interview secures the job."',
      'Grammar or spelling slips—always run documents through spellcheckers and read aloud before sending.',
      'Unrealistic rush requests—set a standard 48-hour delivery timeline with an express surcharge.'
    ],
    potentialCustomerTypes: [
      'Recent college and university graduates applying for entry-level internships.',
      'Mid-career professionals seeking promotions or changing industries.',
      'Employed Kenyans looking to apply for remote overseas or NGO roles.'
    ],
    suggestedNames: ['HireReady Career Lab', 'ImpactCV Kenya', 'Elevate Profiles'],
    elevatorPitch: 'We transform confusing, outdated CVs into crisp, ATS-compliant resumes and optimized LinkedIn profiles that grab recruiters’ attention and land more interviews.',
    priceListSample: [
      { tierName: 'CV Modernization & ATS Polish', offering: 'Complete 2-page rewrite with clean layout in Word & PDF', priceKSh: 1000, description: 'Delivered in 48 hours' },
      { tierName: 'CV + Matching Cover Letter', offering: 'Customized ATS CV + tailored cover letter template for target role', priceKSh: 1600, description: 'Complete job application pack' },
      { tierName: 'Executive Pack + LinkedIn Makeover', offering: 'CV, cover letter, and full LinkedIn headline, about section, and experience optimization', priceKSh: 2800, description: 'Full professional career overhaul' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Job hunting in 2026? 📄 Recruiters spend an average of 7 seconds scanning your CV before deciding. If your CV is over 3 pages, cluttered, or lacks action verbs, you are losing interviews! I am offering full professional CV rewrites at KSh 1,000 this week. Send me your current CV for a free 3-point audit! 💼',
      statusUpdate: 'Another client just secured an interview at a leading NGO after our resume revamp! 🚀 Don’t let a poorly formatted CV hold your career back. DM me to book your spot today! ✨',
      referralAsk: 'Hi [Name]! If you have any friends, cousins, or colleagues currently looking for work or wanting to upgrade their CV, please share my flyer! Grateful for your support 🙏',
      customerFollowUp: 'Habari [Name]! Sent your polished CV and cover letter to your email in both editable Word and PDF format. Have you started applying? Let me know whenever an interview gets scheduled so we can prep!'
    }
  },
  {
    id: 'campus-print-cyber-station',
    title: 'Dorm / Campus Document Printing & Spiral Binding Service',
    category: 'education_skills',
    shortSummary: 'Operate an affordable print, photocopy, and spiral binding service directly from your campus room or hostel, beating commercial cyber cafes on price and convenience.',
    difficulty: 'Easy',
    budgetTier: '15k_30k',
    estimatedBudgetMinKSh: 14000,
    estimatedBudgetMaxKSh: 28000,
    estimatedMonthlyProfitKSh: 'KSh 18,000 – 42,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Used or refurbished wireless eco-tank printer (Epson L3110 / L3210 series)', costKSh: 16000, notes: 'Continuous ink tank prints ~4,000 pages per ink bottle' },
      { item: 'Initial set of 4-color ink bottles (Black, Cyan, Magenta, Yellow)', costKSh: 2800 },
      { item: '2 Reams of A4 80gsm white printing paper', costKSh: 1500 },
      { item: 'Hand-operated manual comb/spiral binding tool & PVC covers', costKSh: 2500, optional: true },
      { item: 'Multi-socket extension cord & paper cutter', costKSh: 1200 }
    ],
    requiredResources: ['Eco-tank continuous ink printer', 'A4 paper', 'Laptop or smartphone with Wi-Fi printing', 'Hostel room or shop space'],
    skills: ['Printer maintenance & paper jam handling', 'Document formatting (margins, page numbers)', 'Late-night availability'],
    interests: ['Education & Skills', 'Tech hardware', 'Campus convenience'],
    locationTypes: ['campus', 'neighborhood'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Invest in an Eco-Tank printer (never use cartridge printers—ink is too expensive!).',
      'Create a WhatsApp group for your hostel block where students can send PDFs 24/7 for instant room delivery.',
      'Announce late-night assignment printing during exam and term-paper submission weeks.'
    ],
    risksAndPitfalls: [
      'Printer nozzle clogging if left idle—run a print test every 2 days to keep heads moist.',
      'Paper wastage due to incorrect student formatting—always check print preview before pressing print.',
      'Managing long queues before 8:00 AM assignment deadlines—charge a small priority express fee for urgent jobs.'
    ],
    potentialCustomerTypes: [
      'Students rushing to print assignment reports at 11:00 PM when commercial cyber cafes are closed.',
      'Lecturers and teaching assistants needing exam question photocopies.',
      'Graduating students printing and binding final academic dissertations.'
    ],
    suggestedNames: ['HostelPrint 24/7', 'CampusQuick Copies', 'PaperCraft Cyber'],
    elevatorPitch: 'We provide ultra-convenient, 24/7 document printing, photocopying, and project binding right inside your hostel, so students never miss assignment deadlines due to closed cyber cafes.',
    priceListSample: [
      { tierName: 'B&W A4 Document Printing', offering: 'Crisp black & white single-sided print', priceKSh: 5, description: 'Supermarkets charge KSh 10' },
      { tierName: 'Full-Color Presentation Page', offering: 'High-res color printing on 80gsm bright paper', priceKSh: 20, description: 'Ideal for charts, diagrams & covers' },
      { tierName: 'Project Spiral Binding', offering: 'Clear plastic front cover, black spine & leatherette back', priceKSh: 120, description: 'Academic project submission ready' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Campus fam! 🖨️ Don’t wait in cyber lines or worry about 11 PM assignment deadlines! I am running 24/7 printing directly in [Hostel / Room Number]. B&W only KSh 5 per page. Send your PDF on WhatsApp and pick it up printed in 5 minutes! WhatsApp: [Number] 📄✨',
      statusUpdate: 'Final project submissions this week? 📚 We are doing high-speed printing and spiral project binding all evening. Beat the morning rush—send your docs now! 🎓',
      referralAsk: 'Hi classmates! If you appreciate the convenience of printing late without walking out into the cold, please drop my contact in your class WhatsApp group! Appreciate you guys 🙏',
      customerFollowUp: 'Hey [Name]! Your 25-page project is printed, stapled, and ready on my desk. Come pick it up whenever you head to class!'
    }
  },
  {
    id: 'mobile-barber-hair-grooming',
    title: 'Mobile Barbering & Doorstep Grooming',
    swahiliOrLocalAlias: 'Kinyozi Nyumbani',
    category: 'home_lifestyle',
    shortSummary: 'Travel to clients’ homes, estates, and offices with professional clippers, sanitizers, and capes to provide convenient haircuts and beard trims.',
    difficulty: 'Easy',
    budgetTier: '5k_15k',
    estimatedBudgetMinKSh: 5500,
    estimatedBudgetMaxKSh: 11000,
    estimatedMonthlyProfitKSh: 'KSh 25,000 – 60,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Professional rechargeable hair clipper set (Kemei / Wahl / VGR) with guards', costKSh: 4200 },
      { item: 'Barber disinfectant spray (Dettol / Barbicide), spirit & clean capes', costKSh: 1200 },
      { item: 'Fade brushes, neck strips, styling combs & razor handles', costKSh: 800 },
      { item: 'Compact leather equipment shoulder bag', costKSh: 1000 }
    ],
    requiredResources: ['Cordless rechargeable clipper', 'Clean capes and neck strips', 'Disinfectant spirit spray', 'Mirror & mobile phone for booking'],
    skills: ['Clean fades & hairline shaping', 'Hygienic equipment sterilization', 'Friendly communication', 'Punctuality'],
    interests: ['Home Services', 'Grooming & Style', 'Direct client care'],
    locationTypes: ['neighborhood', 'campus'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Give 3 neighborhood friends or cousins precision haircuts and take clear 360-degree video showcase clips.',
      'Post on local community estate groups offering weekend home cuts for busy fathers and young children.',
      'Always sterilize your clippers with disinfectant spray right in front of the client to demonstrate impeccable hygiene.'
    ],
    risksAndPitfalls: [
      'Hygiene paranoia (fear of razor bumps or skin infections)—show clients your sealed fresh blades and disinfectant.',
      'Clipper battery dying mid-cut—always keep a fully charged backup machine.',
      'Traffic delays between home visits—leave at least 30 minutes between appointments.'
    ],
    potentialCustomerTypes: [
      'Busy fathers and working executives who hate waiting 2 hours in crowded Saturday barbershops.',
      'Parents with toddlers or young boys who get scared in noisy public salons.',
      'Elderly or bedridden individuals who cannot easily travel to town.'
    ],
    suggestedNames: ['VIP Mobile Kinyozi', 'Gentleman’s Doorstep Cuts', 'PrimeGroom Kenya'],
    elevatorPitch: 'We bring luxury, hygienic barbering right to your living room or balcony, giving you and your boys sharp fades and crisp beard lines without waiting in noisy weekend barbershop queues.',
    priceListSample: [
      { tierName: 'Adult Classic Cut & Beard Trim', offering: 'Full precision fade, hairline shape-up, aftershave & neck massage', priceKSh: 450, description: 'Doorstep service included' },
      { tierName: 'Father & Son Combo', offering: 'Complete haircut for 1 adult + 1 child in the comfort of your home', priceKSh: 700, description: 'Save KSh 150 on family booking' },
      { tierName: 'Executive Weekend Grooming', offering: 'Haircut, beard sculpt, scrub, facial hot towel treatment', priceKSh: 900, description: 'The ultimate home pampering' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari gentlemen! ✂️ Skip the crowded Saturday barbershop lines! I bring professional, ultra-hygienic barber services directly to your house. Clean blades, sterilized clippers, and sharp fades on your balcony or compound. Launch price: KSh 400 for adults, KSh 250 for kids. Reply with your house number to book a weekend slot! 💈🔥',
      statusUpdate: 'Fresh fade delivered right at home! 📸 Check out this sharp look done in under 30 minutes in the living room. 3 slots left for Sunday afternoon. Book your home cut now! ✂️',
      referralAsk: 'Hi [Name]! If you loved the convenience of getting groomed at home without waiting in town, please share my contact with fellow dads in the estate! Highly appreciate your support 🙏',
      customerFollowUp: 'Habari brother! Hope the haircut is turning heads this week! It usually takes about 14 days to grow back—should I pencil you in for a refresh next Saturday?'
    }
  },
  {
    id: 'custom-pastries-cupcakes',
    title: 'Custom Celebration Cupcakes & Bento Birthday Cakes',
    category: 'food_beverage',
    shortSummary: 'Bake customized celebration mini-cakes ("bento cakes") and personalized cupcakes for birthdays, anniversaries, and baby showers from your home kitchen.',
    difficulty: 'Moderate',
    budgetTier: '5k_15k',
    estimatedBudgetMinKSh: 6000,
    estimatedBudgetMaxKSh: 13000,
    estimatedMonthlyProfitKSh: 'KSh 22,000 – 55,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Home oven / electric benchtop oven or quality charcoal baking jiko', costKSh: 5500, notes: 'Or use existing home kitchen oven' },
      { item: 'First baking batch (flour, icing sugar, butter, vanilla/strawberry essences, food color)', costKSh: 2200 },
      { item: 'Piping bags, nozzle set, silicone cupcake trays & bento cake tins', costKSh: 1800 },
      { item: 'Clear-window kraft gift packaging boxes, satin ribbons & cute greeting cards', costKSh: 1200 }
    ],
    requiredResources: ['Baking oven or heavy-duty jiko oven', 'Piping nozzles & bags', 'Electric hand mixer', 'Aesthetic packaging boxes'],
    skills: ['Cake texture consistency', 'Piping frosting lettering', 'Artistic color coordination', 'Safe transit packaging'],
    interests: ['Food & Beverage', 'Baking & Confectionery', 'Celebrations & Gifts'],
    locationTypes: ['home_online', 'neighborhood'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Bake a 4-pack of aesthetic pastel bento cupcakes with clean piped lettering (e.g. "Happy Birthday", "Thinking of You").',
      'Photograph them in morning light with a neat ribbon on a clean white plate.',
      'Post on WhatsApp status and TikTok with trending sounds announcing: "Taking custom birthday weekend orders 48 hours in advance."'
    ],
    risksAndPitfalls: [
      'Frosting melting during motorbike delivery—use sturdy American buttercream and pack with cold gel packs in transit.',
      'Last-minute cancellations—always require 50% non-refundable deposit via M-Pesa before buying ingredients.',
      'Underpricing expensive butter—calculate every gram of butter and packaging into your pricing.'
    ],
    potentialCustomerTypes: [
      'Boyfriends and girlfriends looking for sweet, aesthetic, personalized anniversary treats.',
      'Moms throwing small intimate birthday parties for children.',
      'Colleagues celebrating team promotions or birthdays in the office.'
    ],
    suggestedNames: ['SugarPetal Bakes', 'SweetBento Nairobi', 'VelvetCrumb Confections'],
    elevatorPitch: 'We bake adorable, personalized Bento celebration cakes and gourmet cupcakes with silky buttercream and heartfelt messages, delivered fresh to make your loved ones feel truly cherished.',
    priceListSample: [
      { tierName: 'Aesthetic Bento Cake (Serves 2)', offering: '4-inch personalized mini cake in cute takeout box with ribbon & candle', priceKSh: 850, description: 'Custom message & colors included' },
      { tierName: 'Box of 6 Gourmet Cupcakes', offering: '6 Vanilla, Red Velvet, or Chocolate cupcakes with themed toppers', priceKSh: 1100, description: 'Gift boxed with custom card' },
      { tierName: 'Celebration 1kg Custom Cake', offering: 'Double layer 8-inch moist cake with custom drip & message', priceKSh: 2400, description: 'Feeds 10–12 guests' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Hey sweet tooth fam! 🎂 Introducing our Mini Bento Birthday Cakes! 🍰 The cutest, most delicious gift for birthdays, anniversaries, or just telling someone you appreciate them. Customized with your sweet message, candle included, packed in a cute gift box. Launch rate: KSh 850 this week! Book 2 days in advance via WhatsApp 🧁✨',
      statusUpdate: 'Fresh out of the oven! 🍓 Red velvet mini bento with cream cheese frosting heading out to a surprise birthday! Order yours 48 hours ahead to lock in your date. 🎁',
      referralAsk: 'Hi [Name]! If you loved the taste and presentation of your cake, please post a photo on your WhatsApp status and tag my page! Word of mouth makes my small bakery flourish ❤️',
      customerFollowUp: 'Habari dear! Did the birthday surprise go well? Did they love the cake flavor? Thank you so much for trusting my bakes for your special day! 🙏'
    }
  },
  {
    id: 'secondhand-books-revision',
    title: 'Curated Second-Hand Books & Revision Materials Reselling',
    category: 'retail_fashion',
    shortSummary: 'Source second-hand novels, inspirational self-help books, and school revision guides from street book dealers and sell them with home delivery to readers.',
    difficulty: 'Very Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 3000,
    estimatedBudgetMaxKSh: 6500,
    estimatedMonthlyProfitKSh: 'KSh 15,000 – 35,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'First stock of 25 popular books (Atomic Habits, Rich Dad, 48 Laws, fiction classics, revision guides)', costKSh: 2800, notes: '~KSh 80–120 wholesale per piece on downtown street book stalls' },
      { item: 'Clean book wipe-down alcohol pads & transparent book wrap covers', costKSh: 400 },
      { item: 'Delivery parcels & bookmarks with your WhatsApp contact printed', costKSh: 500 }
    ],
    requiredResources: ['Curated eye for trending book titles', 'Clean storage space', 'WhatsApp catalog', 'Smartphone for photos'],
    skills: ['Understanding reading trends', 'Bargaining with street book vendors', 'Writing engaging 2-line book reviews'],
    interests: ['Retail & Fashion', 'Literature & Reading', 'Personal growth'],
    locationTypes: ['home_online', 'campus'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Walk along Nairobi CBD street book vendors (Tom Mboya, Kimathi, Odeon) and identify top 15 bestselling titles.',
      'Negotiate wholesale buying of 10 clean copies at KSh 100 each (retail sells at KSh 300–400).',
      'Post short, intriguing quotes from the books on your status with the message: "Clean copy available for KSh 300, doorstep delivery."'
    ],
    risksAndPitfalls: [
      'Buying outdated textbooks nobody needs—stick strictly to universal bestsellers (finance, self-help, African fiction).',
      'Damaged or missing pages—always flip through every book before paying the vendor.',
      'High shipping costs—partner with local boda bodas or use estate parcel drops.'
    ],
    potentialCustomerTypes: [
      'Young professionals seeking personal growth, leadership, and financial literacy books.',
      'Campus students looking for literature set-books and business psychology reads.',
      'Parents seeking classic storybooks for their children during school holidays.'
    ],
    suggestedNames: ['PageTurner Nairobi', 'The BookNook Kenya', 'AfriReads Curators'],
    elevatorPitch: 'We curate clean, affordable second-hand copies of the world’s most life-changing personal growth, business, and classic novels, delivering them to your door for less than half the bookshop price.',
    priceListSample: [
      { tierName: 'Paperback Self-Help Bestseller', offering: 'Gently used copy (Atomic Habits, Psychology of Money, etc.)', priceKSh: 350, description: 'Bookshops charge KSh 1,200+' },
      { tierName: 'Classic African Literature', offering: 'Achebe, Ngugi, Chimamanda classic paperback with custom bookmark', priceKSh: 300, description: 'Clean, intact pages' },
      { tierName: '3-Book Mindset Bundle', offering: 'Bundle of 3 curated personal development books + free bookmark', priceKSh: 900, description: 'Save KSh 150 on bookworm pack' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Book lovers! 📚 Grow your mind in 2026 without spending KSh 1,500 at fancy mall bookshops. I have curated clean, pristine copies of top bestsellers: Atomic Habits, Psychology of Money, 48 Laws of Power, and Rich Dad Poor Dad for just KSh 350 each! Check my catalog to grab yours before someone else does! 📖✨',
      statusUpdate: 'Today’s Book Spotlight: "The Psychology of Money" by Morgan Housel. 💡 The greatest chapter on true wealth vs spending. Only 2 copies left in stock today. DM to reserve! ☕',
      referralAsk: 'Hi [Name]! If you enjoyed your book, please share my catalog with your colleagues or book club! If anyone buys, I’ll take KSh 100 off your next order. Happy reading! 🤓',
      customerFollowUp: 'Habari [Name]! Your book arrived safely yesterday. Which chapter are you diving into first? Let me know when you need your next recommendation!'
    }
  },
  {
    id: 'phone-screen-protector-accessories',
    title: 'Phone Screen Protectors & Charging Cable Installation',
    swahiliOrLocalAlias: 'Glass Protector & Chaja za Simu',
    category: 'digital_tech',
    shortSummary: 'Source tempered glass screen protectors, durable braided charging cables, and phone cases wholesale and install them bubble-free for estate residents and students.',
    difficulty: 'Very Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 3500,
    estimatedBudgetMaxKSh: 7500,
    estimatedMonthlyProfitKSh: 'KSh 18,000 – 40,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Assorted wholesale screen protectors (iPhone, Samsung A-series, Tecno, Infinix, Redmi) 30 pcs', costKSh: 2100, notes: '~KSh 50–70 wholesale from downtown Nairobi shops (Luthuli / River Road)' },
      { item: 'Wholesale fast-charging braided Type-C & iPhone cables (10 pcs)', costKSh: 1300 },
      { item: 'Microfiber cleaning cloths, dust absorber stickers & alcohol wipes', costKSh: 400 },
      { item: 'Storage organizer pouch for phone accessories', costKSh: 600 }
    ],
    requiredResources: ['Dust-free installation surface', 'Wiping cloths & stickers', 'Organized inventory pouch', 'WhatsApp Business'],
    skills: ['Bubble-free glass protector installation', 'Identifying phone models by sight', 'Friendly customer rapport'],
    interests: ['Digital & Tech', 'Gadgets', 'Fast repairs'],
    locationTypes: ['campus', 'neighborhood', 'market_center'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Visit wholesale electronics shops on Luthuli Avenue or River Road and buy 30 screen protectors for popular budget phones.',
      'Practice on your phone and family members’ phones until you install without a single speck of dust or bubble in 60 seconds.',
      'Offer doorstep installation in your estate or campus hostel for KSh 200 (shops charge KSh 350–500).'
    ],
    risksAndPitfalls: [
      'Buying protectors for obsolete phone models—always stick to high-volume phones (Samsung A-series, iPhone 11-15, Tecno Spark/Camon).',
      'Dust trapping under glass—always wipe screen with alcohol pad and use dust stickers before lowering glass.',
      'Faulty cables—always test every cable with your own phone before selling to a customer.'
    ],
    potentialCustomerTypes: [
      'Students whose screen protectors cracked and who want a cheap replacement without going to town.',
      'Estate mothers whose charging cables were chewed by toddlers or stopped working.',
      'Commuters who forgot their phone charger at home.'
    ],
    suggestedNames: ['ScreenGuard Pro', 'ChargeUp Phone Hub', 'QuickFix Mobile Gear'],
    elevatorPitch: 'We provide bubble-free tempered glass screen installation and durable fast-charging cables directly to your doorstep, saving your smartphone from expensive cracked screen repairs.',
    priceListSample: [
      { tierName: 'Tempered Glass Installation', offering: '9D Full-cover tempered glass fitted bubble-free on your phone', priceKSh: 200, description: 'Shops charge KSh 400+' },
      { tierName: 'Durable Fast-Charge Cable', offering: '65W braided fast-charging cable (Type-C or Lightning)', priceKSh: 300, description: 'Tested & guaranteed charging speed' },
      { tierName: 'Total Phone Protection Combo', offering: 'Screen protector + shockproof case + charging cable', priceKSh: 750, description: 'Complete phone shield package' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Hey neighbors! 📱 Still walking around with a cracked, shattered screen protector? Don’t risk breaking your actual KSh 15,000 phone screen! I do professional, zero-bubble tempered glass installation at your doorstep for only KSh 200. Fast cables also available! Message me your phone model to check stock 📲⚡',
      statusUpdate: 'Protected another Samsung A15 today! 🛡️ Crisp, bubble-free finish in under 3 minutes. I have stock for iPhone, Samsung, Tecno, Infinix, and Redmi. DM me your phone model! 🔌',
      referralAsk: 'Hi [Name]! If you loved the clean installation, please share my flyer with your classmates or neighbors! Anyone who replaces a broken protector saves thousands on screen repairs 🙏',
      customerFollowUp: 'Habari [Name]! How is the new screen protector feeling under your fingers? Responsive and smooth? Let me know if you ever need a durable fast charger!'
    }
  },
  {
    id: 'potted-succulents-indoor-plants',
    title: 'Indoor Potted Succulents & Greenery Decor',
    category: 'home_lifestyle',
    shortSummary: 'Propagate and pot low-maintenance succulents, snake plants, and money plants in aesthetic painted clay pots for office desks and modern apartment living rooms.',
    difficulty: 'Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 2500,
    estimatedBudgetMaxKSh: 5500,
    estimatedMonthlyProfitKSh: 'KSh 15,000 – 35,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Starter succulent cuttings and starter nursery plants from roadside plant nurseries', costKSh: 1200, notes: '~KSh 50–100 per starter plant' },
      { item: '10 Hand-crafted clay pots or modern white ceramic planters', costKSh: 1100 },
      { item: 'Potting soil mix (red soil, sand, compost) & decorative white gravel stones', costKSh: 600 },
      { item: 'Plant care instruction tag cards with twine strings', costKSh: 300 }
    ],
    requiredResources: ['Small balcony or sunny window', 'Clay pots & soil mix', 'Watering spray bottle', 'Phone for aesthetic photos'],
    skills: ['Plant propagation (cuttings)', 'Aesthetic potting arrangement', 'Clear care instructions for plant beginners'],
    interests: ['Home & Lifestyle', 'Gardening & Nature', 'Interior Decor'],
    locationTypes: ['home_online', 'neighborhood'],
    timeCommitment: 'weekends',
    practicalFirstSteps: [
      'Visit local roadside plant nurseries (e.g. along Ngong Road, Thika Road, or local bypass) and negotiate bundle prices on baby succulents.',
      'Pot 5 succulents into attractive pots with white top pebbles and write simple care tags: "Water only once every 10 days."',
      'Take clean photos on a work desk or coffee table and post on WhatsApp status and Instagram.'
    ],
    risksAndPitfalls: [
      'Over-watering causing root rot—succulents thrive on neglect; teach customers to water sparingly.',
      'Heavy pots cracking during transit—wrap pots securely with recycled paper and carton boxes.',
      'Slow plant growth—purchase healthy root-bound cuttings so they look lush and full immediately.'
    ],
    potentialCustomerTypes: [
      'Remote workers wanting green life and calm aesthetics on their home office desks.',
      'New apartment tenants looking to decorate living room coffee tables and window sills.',
      'Friends seeking thoughtful, long-lasting green gifts for housewarmings and birthdays.'
    ],
    suggestedNames: ['UrbanFlora Nairobi', 'ZenSprout Succulents', 'LivingDecor Kenya'],
    elevatorPitch: 'We pot hardy, beautiful, zero-maintenance succulents and indoor air-purifying plants in handcrafted aesthetic pots to bring natural calm and beauty to your home and office desk.',
    priceListSample: [
      { tierName: 'Desk Mini Succulent in Clay Pot', offering: 'Baby succulent with white river pebbles + care instruction tag', priceKSh: 350, description: 'Perfect office desk companion' },
      { tierName: 'Snake Plant Air Purifier', offering: 'Medium potted Sansevieria plant that cleans indoor air', priceKSh: 800, description: 'Thrives in low light, waters once a month' },
      { tierName: 'Set of 3 Greenery Trio', offering: '3 Coordinated mini planters for coffee tables or window ledges', priceKSh: 950, description: 'Save KSh 100 on trio set' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Bring nature inside! 🌿 Elevate your home desk or living room with low-maintenance, potted succulents and air-purifying indoor plants. They require watering only once every 10 days! Complete with painted clay pots and care cards. Launch price: KSh 350 each. Reply with your favorite planter style to order! 🪴✨',
      statusUpdate: 'Fresh green vibes for your work desk! 🌵 These mini succulents survived 2 weeks without watering and still look flawless. Perfect gift for yourself or a colleague. DM to grab one today! 🍃',
      referralAsk: 'Hi [Name]! How is your new green plant baby settling into your space? If your colleagues admire it on your desk, please pass along my flyer! Much love for supporting local growers 💚',
      customerFollowUp: 'Habari [Name]! Quick reminder: it has been 10 days since you got your succulent. Give it just 2 tablespoons of water today and place it near a window. Keep thriving!'
    }
  },
  {
    id: 'nail-technician-house-calls',
    title: 'Mobile Gel Polish & Manicure House-Calls',
    category: 'home_lifestyle',
    shortSummary: 'Travel to clients’ apartments with an LED UV nail lamp and curated gel polish shades to deliver long-lasting gel manicures and pedicures in comfort.',
    difficulty: 'Moderate',
    budgetTier: '5k_15k',
    estimatedBudgetMinKSh: 6500,
    estimatedBudgetMaxKSh: 13000,
    estimatedMonthlyProfitKSh: 'KSh 25,000 – 65,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'UV/LED 48W professional nail curing lamp', costKSh: 2200 },
      { item: 'Set of 12 popular gel polish colors + base coat & glossy top coat', costKSh: 3200 },
      { item: 'Nail prep tools (cuticle nippers, files, buffers, nail prep dehydrator & acetone)', costKSh: 1500 },
      { item: 'Portable cosmetics carrier case & sanitary disposable towels', costKSh: 1200 }
    ],
    requiredResources: ['UV/LED curing lamp', 'Gel polish bottles', 'Cuticle maintenance tools', 'Sterilization alcohol & wipes'],
    skills: ['Clean cuticle trimming', 'Smooth even gel application without pooling', 'Nail shaping precision'],
    interests: ['Fashion & Beauty', 'Personal grooming', 'Artistic detailing'],
    locationTypes: ['neighborhood', 'campus'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Practice on your own nails and 3 friends until your gel application lasts a full 3 weeks without peeling or chipping.',
      'Take high-definition macro photos of clean cuticle work and glossy gel finishes.',
      'Post in estate WhatsApp groups offering relaxing Friday and Saturday evening house-call gel appointments.'
    ],
    risksAndPitfalls: [
      'Gel peeling off within 3 days if nails were not properly dehydrated and buffed beforehand—never rush nail prep.',
      'Tool hygiene risks—always sterilize metal clippers in alcohol in full view of the client.',
      'Client cancellations while in transit—require a small KSh 200 deposit to lock in home time slots.'
    ],
    potentialCustomerTypes: [
      'Busy working mothers who cannot spend 3 hours on Saturday sitting in noisy salon waiting areas.',
      'Bridesmaids and bridal parties needing coordinated manicures in their hotel or home.',
      'University students preparing for graduation or special date nights.'
    ],
    suggestedNames: ['GlowNails Mobile Spa', 'LuxeDoor Gel Studio', 'Polished Beauty Kenya'],
    elevatorPitch: 'We bring relaxing, salon-grade gel manicures and pedicures directly to your sofa, giving you flawless, chip-free nails without leaving the comfort of your home.',
    priceListSample: [
      { tierName: 'Classic Gel Manicure', offering: 'Cuticle care, nail shaping, gel application & cuticle oil massage', priceKSh: 600, description: 'Lasts 3+ weeks chip-free' },
      { tierName: 'Gel Pedicure Refresh', offering: 'Foot soak, scrub, nail prep & glossy gel polish on toes', priceKSh: 800, description: 'Relaxing home foot pampering' },
      { tierName: 'Full Mani + Pedi Combo', offering: 'Complete hands and feet gel pamper session at your home', priceKSh: 1300, description: 'Save KSh 100 on complete set' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Ladies! 💅 Want salon-fresh, glossy gel nails without waiting in weekend queues? I do mobile gel manicure house-calls in our estate! Relax in your sweatpants while I give your nails a 3-week chip-free shine. Launch rate: KSh 500 for hands this weekend! Message me to claim your evening slot 💖✨',
      statusUpdate: 'Fresh nude gel set done from the comfort of her living room! 🌸 No salon commute, zero waiting. Book your weekend home appointment now before slots fill up! 💅💆‍♀️',
      referralAsk: 'Hi [Name]! If you loved how your nails turned out, please share my flyer with your girlfriends or estate chat! For every friend you refer, you get KSh 200 off your next gel fill! 💅✨',
      customerFollowUp: 'Habari dear! How are your nails holding up after a week? Still looking super glossy? Remember to apply a little lotion or oil to keep cuticles moisturized! 💕'
    }
  },
  {
    id: 'events-smartphone-content-creator',
    title: 'Event Smartphone Content Creator & Reel Producer',
    category: 'digital_tech',
    shortSummary: 'Attend small birthday parties, ruracios (traditional weddings), and bridal showers with a modern smartphone and gimbal, delivering edited TikToks and Reels within 24 hours.',
    difficulty: 'Easy',
    budgetTier: 'under_2k',
    estimatedBudgetMinKSh: 1500,
    estimatedBudgetMaxKSh: 5000,
    estimatedMonthlyProfitKSh: 'KSh 20,000 – 50,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Smartphone video stabilization handheld tripod / mini-gimbal', costKSh: 2200, optional: true },
      { item: 'Mini clip-on wireless microphone for crisp interview audio', costKSh: 1800 },
      { item: 'Portable 20,000mAh power bank to shoot all day without dying', costKSh: 1400 },
      { item: 'CapCut Pro mobile subscription or free tier video editor', costKSh: 0 }
    ],
    requiredResources: ['Smartphone with high-quality camera (4K / 1080p 60fps)', 'Handheld stabilizer or steady hands', 'CapCut video editor', 'Power bank'],
    skills: ['Capturing candid emotional moments', 'Fast video editing to trending audio beats', 'Discreet event presence'],
    interests: ['Digital & Tech', 'Photography & Video', 'Events & Social Media'],
    locationTypes: ['neighborhood', 'market_center'],
    timeCommitment: 'weekends',
    practicalFirstSteps: [
      'Attend a friend’s birthday or baby shower and shoot 40 short, aesthetic 5-second vertical video clips.',
      'Edit them into a punchy 30-second Instagram Reel synced to trending music and send it to the host that same evening.',
      'Show the video as proof to event planners and photographers: "I deliver behind-the-scenes Reels within 24 hours while professional photographers take 3 weeks."'
    ],
    risksAndPitfalls: [
      'Running out of phone storage space mid-event—always clear at least 40GB free space before arriving.',
      'Missing key moments (cake cutting, ring exchange)—stay close to the celebrants and anticipate actions.',
      'Copyright music issues—always use Instagram/TikTok authorized trending audio.'
    ],
    potentialCustomerTypes: [
      'Brides wanting instant behind-the-scenes video clips to post on Instagram stories the morning after the wedding.',
      'Moms throwing 1st birthday parties who want candid clips without hiring a heavy KSh 50,000 camera crew.',
      'Corporate workshop organizers wanting quick LinkedIn summary highlight videos.'
    ],
    suggestedNames: ['MomentsInMotion Kenya', 'SwiftReels Nairobi', 'Aura Social Creators'],
    elevatorPitch: 'We shoot and deliver aesthetic, behind-the-scenes vertical Reels and TikToks from your birthday, wedding, or celebration within 24 hours so you can share your big day immediately.',
    priceListSample: [
      { tierName: 'Intimate Event Content Package (2 Hours)', offering: '200+ raw video clips + 2 edited trending Reels delivered in 24 hours', priceKSh: 2500, description: 'Baby showers & birthdays' },
      { tierName: 'Full Celebration Package (4 Hours)', offering: '400+ raw clips, interview moments + 4 edited 4K Reels', priceKSh: 5000, description: 'Ruracios & graduation parties' },
      { tierName: 'Next-Day Express Wedding BTS', offering: 'Full-day behind-the-scenes mobile coverage + 6 viral Reels delivered Sunday morning', priceKSh: 9500, description: 'Post your wedding moments instantly' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Planning a birthday, ruracio, or baby shower? 🎉 Don’t wait 3 weeks for traditional photographers to send photos! I shoot candid behind-the-scenes vertical videos on iPhone/4K and deliver ready-to-post Instagram Reels and TikToks within 24 hours! Special launch rate: KSh 2,500. DM to reserve your date 🎥✨',
      statusUpdate: 'Delivered this 45-second high-energy birthday Reel to the celebrant at 9:00 AM this morning! 🔥 Captured all the laughs and candid dance moves. Book content creator coverage for your upcoming event! 💃🕺',
      referralAsk: 'Hi [Name]! If you know anyone tying the knot or celebrating a milestone soon who loves Instagram Reels, please forward my work! Forever grateful for your support 🙏',
      customerFollowUp: 'Habari [Name]! Just shared the Google Drive link with all 250 raw video clips and your 2 edited 4K Reels! How did the family react to them? Loved capturing your day! 🎉'
    }
  },
  {
    id: 'wifi-hotspot-voucher-reseller',
    title: 'Neighborhood Wi-Fi Hotspot Voucher Reselling',
    category: 'digital_tech',
    shortSummary: 'Partner with local internet providers or set up a micro-hotspot router in high-footfall areas to sell affordable daily and hourly internet vouchers.',
    difficulty: 'Moderate',
    budgetTier: '15k_30k',
    estimatedBudgetMinKSh: 15000,
    estimatedBudgetMaxKSh: 30000,
    estimatedMonthlyProfitKSh: 'KSh 20,000 – 60,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: 'Outdoor high-power Wi-Fi access point router (MikroTik / TP-Link EAP / Ubiquiti)', costKSh: 11000 },
      { item: 'First month unlimited home/office fibre internet subscription', costKSh: 3500 },
      { item: 'Ethernet cabling, mounting pole & weatherproof enclosure box', costKSh: 2500 },
      { item: 'Hotspot billing voucher software setup / printed token cards', costKSh: 2000 }
    ],
    requiredResources: ['Home or shop with fibre internet access', 'Outdoor Wi-Fi antenna', 'MikroTik routerboard with captive portal', 'M-Pesa payment integration'],
    skills: ['Basic router network configuration', 'Explaining connection steps to customers', 'Equipment maintenance'],
    interests: ['Digital & Tech', 'Passive recurring income', 'Community infrastructure'],
    locationTypes: ['neighborhood', 'campus', 'market_center'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Check if your house or rental shop has line-of-sight to an estate shopping center or hostel compound.',
      'Configure a simple MikroTik hotspot where users enter an M-Pesa transaction code or voucher pin to get 2 hours, 12 hours, or 24 hours of high-speed Wi-Fi.',
      'Distribute printed scratch voucher cards at local kiosks and cyber cafes.'
    ],
    risksAndPitfalls: [
      'Bandwidth hogs slowing down the network—set speed limits (e.g. 3-5 Mbps per user) in router settings.',
      'Power blackouts cutting off connection—budget for a small rechargeable UPS battery backup.',
      'ISP terms of service—ensure your internet provider allows shared bandwidth or use community enterprise packages.'
    ],
    potentialCustomerTypes: [
      'Students and youth who can’t afford daily Safaricom mobile data bundles and want to download movies.',
      'Freelancers and remote workers during daytime hours.',
      'Shopkeepers and kiosk operators streaming music and running M-Pesa devices.'
    ],
    suggestedNames: ['KaziNet Hotspot', 'ChapChap Wi-Fi Kenya', 'PapoHapa Wireless'],
    elevatorPitch: 'We provide blazing-fast, unlimited high-speed neighborhood Wi-Fi starting at just KSh 10 for 2 hours, giving everyone affordable internet without expensive daily data bundles.',
    priceListSample: [
      { tierName: '2-Hour Quick Surfing Voucher', offering: 'Unlimited 4Mbps speed for downloads & browsing', priceKSh: 15, description: 'Cheaper than mobile data bundles' },
      { tierName: 'Full Day 24-Hour Pass', offering: 'Unlimited 24-hour high-speed internet on 1 device', priceKSh: 50, description: 'Download series, movies & assignments' },
      { tierName: 'Weekly Unlimited Study Pass', offering: '7 Days continuous high-speed estate access', priceKSh: 250, description: 'Ideal for students & remote hustlers' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Fast Wi-Fi in our estate! 📶 Tired of expensive mobile data bundles running out mid-movie? Connect to [Network Name] Wi-Fi! Super fast 5Mbps speeds for streaming, YouTube, and downloads. Only KSh 15 for 2 hours, or KSh 50 for a full 24-hour pass! Pay directly via M-Pesa on the login screen. Try it now! 🚀',
      statusUpdate: 'Network upgraded! ⚡ Fibre speeds are running at full power today. Perfect for downloading files, studying, or watching football matches this evening. Connect to [Network Name] now! ⚽📡',
      referralAsk: 'Hi neighbors! If you enjoy the fast hotspot speeds, tell your friends in our court! Fast internet is better when shared 🙏',
      customerFollowUp: 'Habari! Notice you connected to our 24-hour Wi-Fi pass yesterday. How were the speeds for your streaming? Let me know if you ever need help with voucher codes!'
    }
  },
  {
    id: 'urban-gunny-bag-vegetable-farming',
    title: 'Backyard & Balcony Gunny-Bag Vegetable Gardening',
    category: 'agri_farming',
    shortSummary: 'Grow organic sukuma wiki, spinach, coriander (dania), and cherry tomatoes in vertically stacked gunny bags on small balconies and backyards, selling fresh leaves daily to neighbors.',
    difficulty: 'Easy',
    budgetTier: '2k_5k',
    estimatedBudgetMinKSh: 2000,
    estimatedBudgetMaxKSh: 4800,
    estimatedMonthlyProfitKSh: 'KSh 12,000 – 30,000 / month (estimate)',
    estimatedStartupExpenses: [
      { item: '10 Woven gunny bags / multi-pocket planting sacks', costKSh: 600 },
      { item: 'Rich red soil and well-rotted animal manure mixture (3 sacks)', costKSh: 900 },
      { item: 'Certified vegetable seedlings (sukuma, spinach, dania, capsicum, mint)', costKSh: 450, notes: '~KSh 5 per seedling' },
      { item: 'Watering can & organic neem oil spray for pest control', costKSh: 500 }
    ],
    requiredResources: ['Balcony or small 2x2m compound space', 'Sunlight (at least 4 hours/day)', 'Water access', 'Planting sacks'],
    skills: ['Basic watering routines', 'Recognizing common leaf pests early', 'Harvesting outer leaves correctly without killing plant'],
    interests: ['Agriculture & Farming', 'Green living', 'Direct home food sales'],
    locationTypes: ['neighborhood', 'home_online'],
    timeCommitment: 'part_time',
    practicalFirstSteps: [
      'Fill 5 gunny bags with soil mixed 50/50 with mature manure, placing small stones in the center for water drainage.',
      'Make small holes along the sides of the bag and plant 30 sukuma/spinach seedlings per sack vertically.',
      'In 4 weeks, harvest crisp, chemical-free greens and invite neighbors to see your living organic garden.'
    ],
    risksAndPitfalls: [
      'Aphid infestation—spray with homemade garlic/chilli water or organic neem extract instead of toxic chemicals.',
      'Over-compacting soil—always add sand or small gravel in the bag core for water to reach bottom roots.',
      'Irregular watering in hot dry seasons—water in the cool evening or early morning.'
    ],
    potentialCustomerTypes: [
      'Estate mothers who hate buying wilted, pesticide-sprayed sukuma wiki from roadside stalls.',
      'Health-conscious neighbors who appreciate seeing food harvested fresh from the stem right in front of them.',
      'Local estate kiosks that run out of fresh coriander (dania) in the late afternoon.'
    ],
    suggestedNames: ['VerdeBoma Garden', 'BalconyGreens Nairobi', 'OrganicRoots Estate'],
    elevatorPitch: 'We harvest sweet, crisp, chemical-free spinach, sukuma wiki, and aromatic dania fresh from vertical organic sacks right in our estate compound, delivering true farm-to-plate freshness.',
    priceListSample: [
      { tierName: 'Fresh Harvest Sukuma Bunch', offering: 'Plucked fresh upon order, crisp and 100% pesticide-free', priceKSh: 50, description: 'Twice the volume of market bunches' },
      { tierName: 'Organic Spinach & Dania Bundle', offering: 'Fresh juicy spinach leaves + fresh aromatic coriander bundle', priceKSh: 100, description: 'Harvested minutes before dinner' },
      { tierName: 'Starter Multi-Pocket Growing Bag', offering: 'Pre-planted ready sack with 20 established vegetable plants for your balcony', priceKSh: 850, description: 'Grow your own food at home' }
    ],
    whatsAppTemplates: {
      launchOffer: 'Habari neighbors! 🥬 Say goodbye to wilted, chemical-sprayed roadside sukuma wiki! We have fresh, organic, crispy spinach, sukuma wiki, and fragrant dania growing right in our estate. Plucked fresh to order 15 minutes before your dinner! KSh 50 per generous bunch. Message me to reserve today’s evening harvest 🌿✨',
      statusUpdate: 'Today’s fresh harvest ready! 🍅 Crisp dark green spinach and sweet dania. Look how fresh these leaves are—no chemicals, just pure organic goodness. Delivering to your door at 5 PM! 🥗',
      referralAsk: 'Hi [Name]! Did your family taste the natural sweetness in the greens tonight? If you loved it, please tell the neighbors in your court! Harvested fresh every day 🙏',
      customerFollowUp: 'Habari mama! Hope dinner was delicious with the fresh spinach! We will be doing the next harvest on Thursday evening—shall I cut a bunch for your kitchen?'
    }
  }
];
