// All site copy and offer data lives here. Edit this file to change text, prices or offers.

export const site = {
  name: "Proposal Foundry",
  tagline: "Results are what we deliver.",
  parent: "The Daniel Group LLC",
  email: "info@proposal-foundry.com",
  address: ["15999 S. Rancho Sahuarita Blvd.", "Sahuarita, Arizona 85629"],
  // Set to a scheduler URL (Calendly, Microsoft Bookings, etc.) to send consultation buttons there.
  schedulerUrl: "" as string,
  founded: 2014,
};

export const stats = [
  { num: "$1.35B", cap: "In contract awards supported" },
  { num: "10+", cap: "Years serving small business contractors" },
  { num: "100s", cap: "Of proposals developed and submitted" },
  { num: "All", cap: "Major federal agencies served" },
];

export type Market = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  buyers: { title: string; body: string }[];
  differences: string[];
  services: string[]; // service slugs
};

export const markets: Market[] = [
  {
    slug: "federal",
    name: "Federal",
    short: "8(a), HUBZone, SDVOSB, WOSB",
    headline: "Federal Proposals for Small Business Contractors",
    intro:
      "We have supported $1.35B in federal awards for small businesses competing on set-asides, sole-source vehicles and full and open competitions.",
    buyers: [
      { title: "8(a) Firms", body: "Use your program years on sole-source and set-aside opportunities that build lasting past performance." },
      { title: "HUBZone", body: "Show evaluators the community impact behind your certification in every response." },
      { title: "SDVOSB and WOSB", body: "Target VA and SBA set-asides with responses that turn your status into a scored strength." },
    ],
    differences: [
      "FAR-based solicitations with Section L and M evaluation structures",
      "Compliance matrices traced to every shall statement",
      "Past performance, staffing and management volumes written to the evaluation criteria",
    ],
    services: ["response-development", "proposal-management", "strategic-bd-partner", "sop-plan-development"],
  },
  {
    slug: "state-and-local",
    name: "State and Local",
    short: "Cities, counties, states, special districts",
    headline: "Responses for City, County and State Solicitations",
    intro:
      "State and local agencies buy through their own portals and rules. We write responses that meet those rules and score on the agency's own criteria.",
    buyers: [
      { title: "Contractors entering SLED", body: "Federal contractors adding city, county and state work to their pipeline." },
      { title: "Local suppliers", body: "Firms that answer RFPs, RFQs and IFBs from agencies in their region." },
      { title: "Agencies and districts", body: "Public entities that need their websites and documents scanned for WCAG 2.1 AA." },
    ],
    differences: [
      "Shorter page limits and agency-specific forms",
      "Local preference, bonding and insurance requirements",
      "Submission through portals such as PlanetBids and Bonfire",
    ],
    services: ["sled-commercial-responses", "proposal-management", "sop-plan-development", "508-remediation"],
  },
  {
    slug: "commercial",
    name: "Commercial",
    short: "Corporate RFPs and supplier bids",
    headline: "Commercial RFP Responses and Supplier Qualification",
    intro:
      "Corporate buyers evaluate suppliers on risk, capability and price. We apply the same evidence discipline we use on federal proposals.",
    buyers: [
      { title: "Suppliers to large companies", body: "Firms answering corporate RFPs, RFIs and supplier qualification questionnaires." },
      { title: "Government subcontractors", body: "Firms bidding to primes that need plans, SOPs and capability documentation." },
      { title: "Vendors to government", body: "Companies whose documents and sites must meet Section 508." },
    ],
    differences: [
      "Questionnaire-driven responses with security and quality sections",
      "Supplier diversity and certification documentation",
      "Pricing narratives aligned to commercial terms",
    ],
    services: ["sled-commercial-responses", "proposal-management", "sop-plan-development", "508-remediation"],
  },
];

export type Offer = {
  slug: string;
  name: string;
  level: "Service" | "Package" | "Software";
  summary: string;
  headline: string;
  intro: string;
  includes: string[];
  forWho: string[];
  steps: { title: string; body: string }[];
  cta: "consult" | "buy" | "trial";
};

const consultSteps = [
  { title: "Consult", body: "We review the solicitation, your capabilities and the deadline." },
  { title: "Scope", body: "You receive a fixed-fee quote and a schedule." },
  { title: "Deliver", body: "We write, review and produce to the evaluation criteria." },
  { title: "Submit", body: "You submit a compliant response on time." },
];

export const services: Offer[] = [
  {
    slug: "response-development",
    name: "Response Development",
    level: "Service",
    summary: "Opportunity qualification, solution development and full proposal writing.",
    headline: "Turnkey Proposal Responses",
    intro:
      "Federal proposals typically take 40 to 60 hours of your top staff. Our turnkey responses need 5 to 10 hours of your time.",
    includes: [
      "Bid/no-bid qualification against your capabilities",
      "Win themes and solution development",
      "Technical, management, staffing and past performance volumes",
      "Compliance matrix traced to the solicitation",
      "Final production and submission support",
    ],
    forWho: ["8(a), HUBZone, SDVOSB and WOSB firms", "Small businesses without an in-house proposal team"],
    steps: consultSteps,
    cta: "consult",
  },
  {
    slug: "proposal-management",
    name: "Proposal Management",
    level: "Service",
    summary: "We run your proposal team: schedule, color reviews, compliance and submission.",
    headline: "A Proposal Manager for Your Pursuit",
    intro:
      "Your writers know the work. We run the process around them so the response is compliant, reviewed and on time.",
    includes: [
      "Proposal schedule and daily management",
      "Compliance matrix and outline",
      "Pink, red and gold team reviews",
      "Writer assignments and storyboards",
      "Production, formatting and submission",
    ],
    forWho: ["Firms with in-house writers that miss deadlines or compliance reviews", "Primes leading a teaming arrangement"],
    steps: consultSteps,
    cta: "consult",
  },
  {
    slug: "sled-commercial-responses",
    name: "SLED and Commercial Responses",
    level: "Service",
    summary: "Full responses to city, county, state and corporate RFPs.",
    headline: "State, Local and Commercial RFP Responses",
    intro:
      "We write responses for city, county, state and commercial buyers, with a compliance checklist built for each agency's rules.",
    includes: [
      "Solicitation review and bid/no-bid recommendation",
      "Agency forms, local preference and bonding documentation",
      "Technical approach, qualifications and references",
      "Pricing narrative",
      "Portal submission support",
    ],
    forWho: ["Federal contractors entering state and local markets", "Suppliers answering corporate RFPs"],
    steps: consultSteps,
    cta: "consult",
  },
  {
    slug: "sop-plan-development",
    name: "SOP and Plan Development",
    level: "Service",
    summary: "Documented processes and plans that show evaluators operational maturity.",
    headline: "SOPs and Plans Evaluators Can Score",
    intro:
      "Solicitations often require quality, safety, transition and staffing plans. We document how your firm operates so evaluators can score it.",
    includes: [
      "Standard operating procedures",
      "Quality control plans",
      "Safety, transition and staffing plans",
      "Management and cybersecurity plans",
      "Updates as your operations change",
    ],
    forWho: ["Bidders whose solicitations require plans", "Firms building operational maturity"],
    steps: consultSteps,
    cta: "consult",
  },
  {
    slug: "strategic-bd-partner",
    name: "Strategic BD Partner",
    level: "Service",
    summary: "Outsourced business development with at least two complete proposals per month.",
    headline: "Business Development Without the Overhead",
    intro:
      "We act as your BD department: strategy, pipeline, capture and proposals, on a monthly retainer.",
    includes: [
      "BD strategy and target agency plan",
      "Pipeline management",
      "Capture planning and competitive intelligence",
      "At least two complete proposals per month",
    ],
    forWho: ["Federal small businesses ready to grow past one-off bids"],
    steps: consultSteps,
    cta: "consult",
  },
  {
    slug: "508-remediation",
    name: "508 Remediation",
    level: "Service",
    summary: "Fixes for the accessibility issues a scan finds in your site and documents.",
    headline: "Accessibility Remediation for Sites and Documents",
    intro:
      "After a 508 Scanner audit, we fix what it finds: tagged PDFs, accessible Word files and site code that meets WCAG 2.1 AA.",
    includes: [
      "Remediation plan ranked by severity",
      "PDF and Office document remediation",
      "Site fixes or developer-ready tickets",
      "Manual testing with assistive technology",
      "Rescan and conformance report",
    ],
    forWho: ["Cities, counties and special districts", "Federal contractors delivering ICT", "Vendors to government"],
    steps: consultSteps,
    cta: "consult",
  },
];

export const products: Offer[] = [
  {
    slug: "ai-bd-tools",
    name: "AI BD Tools",
    level: "Software",
    summary: "Screen opportunities, extract requirements and review drafts before submission.",
    headline: "AI Tools for Business Development",
    intro:
      "The same software our proposal team uses: requirement extraction, compliance matrices and proposal review, available by subscription.",
    includes: [
      "Opportunity screening and bid/no-bid scoring",
      "Requirement extraction from solicitations",
      "Automatic compliance matrix",
      "Draft review against the evaluation criteria",
    ],
    forWho: ["Small federal and SLED vendors", "Proposal consultants"],
    steps: [
      { title: "Sign up", body: "Start a free trial with your company profile." },
      { title: "Upload", body: "Add a solicitation or draft." },
      { title: "Review", body: "Read the requirements, matrix and review findings." },
      { title: "Decide", body: "Bid, team or pass with the evidence in hand." },
    ],
    cta: "trial",
  },
  {
    slug: "response-packages",
    name: "Response Packages",
    level: "Package",
    summary: "Fixed-price proposal kits tailored to your firm in one session.",
    headline: "Pre-Designed Response Packages",
    intro:
      "Proposal kits built from our library of winning responses. Each package includes one tailoring session with our team.",
    includes: [
      "Capability statement template",
      "Past performance write-ups",
      "Management and staffing plan templates",
      "Compliance matrix template",
      "Pricing narrative template",
    ],
    forWho: ["New 8(a), HUBZone, SDVOSB and WOSB firms", "Firms preparing their first proposals"],
    steps: [
      { title: "Choose", body: "Pick the package that fits your pursuit." },
      { title: "Intake", body: "Send your past performance and certifications." },
      { title: "Tailor", body: "We adapt the kit with you in one session." },
      { title: "Use", body: "Apply the kit to every proposal you write." },
    ],
    cta: "buy",
  },
  {
    slug: "packaged-plans",
    name: "Packaged Plans",
    level: "Package",
    summary: "Ready-to-tailor QCP, safety, transition, staffing and management plans.",
    headline: "Packaged Plans",
    intro:
      "Plan templates written to the requirements evaluators look for, ready to tailor to your operations.",
    includes: [
      "Quality control plan",
      "Safety plan",
      "Transition plan",
      "Staffing plan",
      "Management plan",
      "Cybersecurity plan",
    ],
    forWho: ["Any bidder whose solicitation requires plans"],
    steps: [
      { title: "Choose", body: "Pick the plans your solicitation requires." },
      { title: "Intake", body: "Answer a short questionnaire about your operations." },
      { title: "Tailor", body: "We adapt each plan with you in one session." },
      { title: "Submit", body: "Attach the plans to your response." },
    ],
    cta: "buy",
  },
  {
    slug: "508-scanner",
    name: "508 Scanner",
    level: "Software",
    summary: "Scans of sites and documents against Section 508 and WCAG 2.1 AA.",
    headline: "Section 508 and WCAG 2.1 AA Scanning",
    intro:
      "The DOJ ADA Title II rule requires state and local government web content to meet WCAG 2.1 AA by April 26, 2027 for entities serving 50,000 or more people, and by April 26, 2028 for smaller entities and special districts.",
    includes: [
      "Site crawl and page-level findings",
      "PDF and Office document checks",
      "Severity-ranked remediation report",
      "Rescans after fixes",
    ],
    forWho: ["Cities, counties and special districts", "Federal contractors delivering ICT", "Vendors to government"],
    steps: [
      { title: "Submit", body: "Enter your site and upload documents." },
      { title: "Scan", body: "The scanner checks pages and files against WCAG 2.1 AA." },
      { title: "Report", body: "Receive findings ranked by severity." },
      { title: "Fix", body: "Remediate yourself or with our team." },
    ],
    cta: "buy",
  },
];

export const scannerNote =
  "Automated scans find many accessibility issues without certifying full conformance. Manual testing is available through 508 Remediation.";

// Prices: set `price` to a string such as "$1,500" when ready. Null renders "Pricing at launch".
export type Tier = { name: string; price: string | null; term: string; includes: string[]; featured?: boolean; cta: string };
export const pricing: { product: string; slug: string; tiers: Tier[] }[] = [
  {
    product: "AI BD Tools",
    slug: "ai-bd-tools",
    tiers: [
      { name: "Pro", price: null, term: "per year", includes: ["Opportunity screening", "Requirement extraction", "Compliance matrix"], cta: "Start Free Trial" },
      { name: "Pro Plus", price: null, term: "per year", includes: ["Everything in Pro", "Draft review against evaluation criteria", "Bid/no-bid scoring"], featured: true, cta: "Start Free Trial" },
    ],
  },
  {
    product: "Response Packages",
    slug: "response-packages",
    tiers: [
      { name: "Starter", price: null, term: "one time", includes: ["Capability statement template", "Past performance write-ups", "One tailoring session"], cta: "Buy Now" },
      { name: "Complete", price: null, term: "one time", includes: ["Everything in Starter", "Management and staffing plans", "Compliance matrix and pricing narrative"], featured: true, cta: "Buy Now" },
    ],
  },
  {
    product: "Packaged Plans",
    slug: "packaged-plans",
    tiers: [
      { name: "Single Plan", price: null, term: "per plan", includes: ["One plan of your choice", "One tailoring session"], cta: "Buy Now" },
      { name: "Plan Set", price: null, term: "one time", includes: ["Quality, safety, transition, staffing, management and cybersecurity plans", "Two tailoring sessions"], featured: true, cta: "Buy Now" },
    ],
  },
  {
    product: "508 Scanner",
    slug: "508-scanner",
    tiers: [
      { name: "Audit", price: null, term: "one time", includes: ["One site scan", "Document checks", "Remediation report"], cta: "Request a Scan" },
      { name: "Monitoring", price: null, term: "per year", includes: ["Quarterly site scans", "Document checks", "Rescans after fixes"], featured: true, cta: "Request a Scan" },
    ],
  },
];

export const comparison = [
  { cap: "Proposal staff", large: "Full-time writers, managers and reviewers", ours: "Our team, engaged per pursuit" },
  { cap: "Client hours per proposal", large: "40 to 60", ours: "5 to 10" },
  { cap: "Opportunity screening", large: "In-house BD analysts", ours: "AI BD Tools" },
  { cap: "Plans and SOPs", large: "Process and quality staff", ours: "Packaged Plans and SOP development" },
  { cap: "Accessibility compliance", large: "Dedicated 508 team", ours: "508 Scanner and remediation" },
];

export const pastPerformance = [
  {
    value: "$15.3M",
    agency: "GSA",
    title: "Building Operations, Maintenance and Custodial Services",
    body: "Contract for building operations, maintenance and custodial services at a federal court complex.",
  },
  {
    value: "$12.8M",
    agency: "U.S. Army TRADOC",
    title: "Training and Simulation Services",
    body: "Training and simulation services for Air and Space Defense programs under a 5-year IDIQ with task orders.",
  },
];

export const philosophy = "Evaluators score proposals on clarity, credibility, and evidence discipline.";
