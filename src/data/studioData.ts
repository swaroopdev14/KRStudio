import { CapabilityItem, ProcessPhase, ProjectItem, TeamMember, FAQItem } from '../types/index.ts';

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    colorName: 'Blue & Cyan',
    accentColors: {
      primary: '#2563EB',
      secondary: '#06B6D4',
      border: 'border-blue-200 dark:border-blue-900/60',
      glow: 'from-blue-500/10 via-cyan-500/10 to-transparent',
      text: 'text-blue-600 dark:text-blue-400',
      darkBorder: 'hover:border-blue-400 dark:hover:border-blue-500',
      badgeBg: 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300'
    },
    iconName: 'Globe',
    simpleDescription: 'Custom, blazing-fast web applications engineered for speed, clean UX, and high conversion.',
    keyPoints: [
      'Sub-second initial page loads with modern SSR and static generation',
      'Modular TypeScript component architecture that scales without tech debt',
      'Native SEO compliance and high-contrast accessibility standards'
    ],
    techSpecs: {
      coreStack: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vite / Turbopack'],
      architectureSummary: 'Server-side rendering paired with edge caching and static asset distribution. Zero bloated libraries; structured API layers with strict typing and predictive state caching.',
      deliverables: ['Production Web Application', 'Figma Design System Sync', 'Automated CI/CD Pipeline', 'Lighthouse 95+ Audit Report'],
      securityPerformance: 'Built-in CSP headers, automated bundle splitting, sub-100ms API response orchestration, and zero layout shift (CLS < 0.05).'
    }
  },
  {
    id: 'mobile-applications',
    number: '02',
    title: 'Mobile Applications',
    colorName: 'Violet & Purple',
    accentColors: {
      primary: '#7C3AED',
      secondary: '#A855F7',
      border: 'border-purple-200 dark:border-purple-900/60',
      glow: 'from-violet-500/10 via-purple-500/10 to-transparent',
      text: 'text-violet-600 dark:text-violet-400',
      darkBorder: 'hover:border-violet-400 dark:hover:border-violet-500',
      badgeBg: 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300'
    },
    iconName: 'Smartphone',
    simpleDescription: 'High-performance iOS and Android mobile apps with smooth 60fps animations and native device access.',
    keyPoints: [
      'Single codebase deployment across Apple App Store and Google Play Store',
      'Native camera, push notifications, biometric auth, and offline sync',
      'Intuitive touch-first gestures with haptic feedback integration'
    ],
    techSpecs: {
      coreStack: ['React Native / Expo', 'Kotlin & Swift bridges', 'SQLite / WatermelonDB', 'Fastlane'],
      architectureSummary: 'Cross-platform mobile architecture with native bridge optimizations. Offline-first local database replication keeps the app responsive regardless of cellular connectivity.',
      deliverables: ['iOS TestFlight Build', 'Android APK & Play Console Release', 'Store Listing Assets', 'Push Notification Service Config'],
      securityPerformance: 'Encrypted device keychain storage, TLS 1.3 certificate pinning, and background memory footprint under 65MB.'
    }
  },
  {
    id: 'business-software',
    number: '03',
    title: 'Business Software',
    colorName: 'Emerald & Teal',
    accentColors: {
      primary: '#10B981',
      secondary: '#14B8A6',
      border: 'border-emerald-200 dark:border-emerald-900/60',
      glow: 'from-emerald-500/10 via-teal-500/10 to-transparent',
      text: 'text-emerald-600 dark:text-emerald-400',
      darkBorder: 'hover:border-emerald-400 dark:hover:border-emerald-500',
      badgeBg: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
    },
    iconName: 'LayoutGrid',
    simpleDescription: 'Bespoke operational tools, client management portals, and internal dashboards that replace messy spreadsheets.',
    keyPoints: [
      'Role-based permissions for staff, managers, and external clients',
      'Real-time data synchronization with custom audit logs',
      'Direct integration with existing CRM, inventory, and accounting tools'
    ],
    techSpecs: {
      coreStack: ['PostgreSQL', 'Drizzle ORM / Prisma', 'Next.js App Router', 'Redis Queue', 'Docker'],
      architectureSummary: 'Relational database schema with normalized tables, optimistic UI updates, and transaction-safe mutations. Event logs record every critical business action.',
      deliverables: ['Internal Admin Dashboard', 'Client Self-Service Portal', 'Role & Permission Manager', 'Automated Daily Data Backups'],
      securityPerformance: 'Row-Level Security (RLS) enforcement, SOC-2 readiness patterns, and millisecond-grade filtered data tables.'
    }
  },
  {
    id: 'ai-systems',
    number: '04',
    title: 'AI Systems & LLMs',
    colorName: 'Purple & Magenta',
    accentColors: {
      primary: '#9333EA',
      secondary: '#D946EF',
      border: 'border-fuchsia-200 dark:border-fuchsia-900/60',
      glow: 'from-purple-500/10 via-fuchsia-500/10 to-transparent',
      text: 'text-purple-600 dark:text-purple-400',
      darkBorder: 'hover:border-purple-400 dark:hover:border-purple-500',
      badgeBg: 'bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950/50 dark:text-fuchsia-300'
    },
    iconName: 'Sparkles',
    simpleDescription: 'Practical AI pipelines, document intelligence, semantic search, and custom agentic workflows built for utility.',
    keyPoints: [
      'Retrieval-Augmented Generation (RAG) trained strictly on your proprietary data',
      'Automated customer support routing and natural language queries',
      'Deterministic fallback systems to eliminate AI hallucinations'
    ],
    techSpecs: {
      coreStack: ['Gemini 1.5 & Flash', 'Pinecone / pgvector', 'LangChain / Vercel AI SDK', 'Python / Fastify'],
      architectureSummary: 'Hybrid search pairing dense vector embeddings with BM25 full-text indexing. Strict schema validation (JSON Schema) prevents malformed model outputs before reaching users.',
      deliverables: ['Custom RAG Knowledge Engine', 'Interactive Copilot Interface', 'Prompt Evaluation Suite', 'Usage & Token Cost Guardrails'],
      securityPerformance: 'Zero user data retention for model retraining, tenant-isolated vector namespaces, and streaming response under 400ms TTFT.'
    }
  },
  {
    id: 'workflow-automation',
    number: '05',
    title: 'Workflow Automation',
    colorName: 'Orange & Pink',
    accentColors: {
      primary: '#F97316',
      secondary: '#EC4899',
      border: 'border-orange-200 dark:border-orange-900/60',
      glow: 'from-orange-500/10 via-pink-500/10 to-transparent',
      text: 'text-orange-600 dark:text-orange-400',
      darkBorder: 'hover:border-orange-400 dark:hover:border-orange-500',
      badgeBg: 'bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300'
    },
    iconName: 'Zap',
    simpleDescription: 'Hands-off automated pipelines that connect your tools, sync records, and eliminate repetitive clerical tasks.',
    keyPoints: [
      'Automated webhook listeners with retry queues and failure alerts',
      'Instant synchronization between CRMs, email, Slack, and accounting',
      'Scheduled background workers executing recurring batch jobs'
    ],
    techSpecs: {
      coreStack: ['Inngest / BullMQ', 'Temporal / Make', 'Webhooks API', 'Node.js Microservices'],
      architectureSummary: 'Durable execution engine that survives server restarts. Step-functions guarantee exactly-once processing with exponential backoff on third-party rate limits.',
      deliverables: ['Custom Webhook Pipeline', 'Dead-Letter Queue Monitor', 'Real-time Error Notification Alert (Slack/Email)', 'API Mapping Documentation'],
      securityPerformance: 'HMAC signature verification on incoming webhooks, encrypted payload logs, and idempotency key safeguards.'
    }
  },
  {
    id: 'payments-billing',
    number: '06',
    title: 'Payments & Billing',
    colorName: 'Gold & Emerald',
    accentColors: {
      primary: '#EAB308',
      secondary: '#10B981',
      border: 'border-amber-200 dark:border-amber-900/60',
      glow: 'from-amber-500/10 via-emerald-500/10 to-transparent',
      text: 'text-amber-600 dark:text-amber-400',
      darkBorder: 'hover:border-amber-400 dark:hover:border-amber-500',
      badgeBg: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300'
    },
    iconName: 'CreditCard',
    simpleDescription: 'Frictionless checkout flows, recurring subscriptions, international currency support, and automated tax handling.',
    keyPoints: [
      'Full Stripe, Lemon Squeezy, and PayPal custom integration',
      'Automated invoice generation, usage-based metering, and dunning management',
      'PCI-DSS compliant client-side tokenization with zero card liability'
    ],
    techSpecs: {
      coreStack: ['Stripe Billing & Elements', 'Stripe Tax / LemonSqueezy', 'PostgreSQL Ledgers', 'Webhooks'],
      architectureSummary: 'Double-entry bookkeeping architecture in the database ensuring every invoice, charge, and refund balances cleanly. Webhook workers reconcile subscriptions in real time.',
      deliverables: ['Hosted & Embedded Checkout Flow', 'Customer Billing Portal', 'Automated PDF Invoicing', 'Failed Payment Recovery Workflow'],
      securityPerformance: 'Zero raw credit card data touches your servers; 3D Secure 2.0 authentication ensures high authorization rates.'
    }
  },
  {
    id: 'cloud-infrastructure',
    number: '07',
    title: 'Cloud & Infrastructure',
    colorName: 'Indigo & Cyan',
    accentColors: {
      primary: '#6366F1',
      secondary: '#06B6D4',
      border: 'border-indigo-200 dark:border-indigo-900/60',
      glow: 'from-indigo-500/10 via-cyan-500/10 to-transparent',
      text: 'text-indigo-600 dark:text-indigo-400',
      darkBorder: 'hover:border-indigo-400 dark:hover:border-indigo-500',
      badgeBg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'
    },
    iconName: 'Cloud',
    simpleDescription: 'Reliable, cost-conscious cloud architecture deployed directly into your own AWS, Google Cloud, or Vercel accounts.',
    keyPoints: [
      'Serverless auto-scaling that handles traffic surges while minimizing idle costs',
      'Automated daily database backups with point-in-time recovery',
      'Global CDN edge distribution for static assets and API caching'
    ],
    techSpecs: {
      coreStack: ['AWS / Google Cloud Run', 'Vercel / Cloudflare', 'Terraform / Pulumi', 'Docker'],
      architectureSummary: 'Infrastructure as Code (IaC) setup so your entire infrastructure can be reproduced or migrated with a single command. Multi-region redundancy for critical databases.',
      deliverables: ['Client-Owned Cloud Environment', 'CI/CD Deployment Pipelines', 'Automated Health Monitoring', 'Cost Optimization Audit'],
      securityPerformance: 'Strict IAM least-privilege policies, automated SSL renewal, DDoS protection via Cloudflare, and 99.9% uptime baseline.'
    }
  },
  {
    id: 'security-conscious-dev',
    number: '08',
    title: 'Security & Systems',
    colorName: 'Crimson & Violet',
    accentColors: {
      primary: '#EF4444',
      secondary: '#8B5CF6',
      border: 'border-red-200 dark:border-red-900/60',
      glow: 'from-red-500/10 via-violet-500/10 to-transparent',
      text: 'text-red-600 dark:text-red-400',
      darkBorder: 'hover:border-red-400 dark:hover:border-red-500',
      badgeBg: 'bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300'
    },
    iconName: 'ShieldCheck',
    simpleDescription: 'Defensive engineering from line one. We protect your user data, API endpoints, and intellectual property.',
    keyPoints: [
      'Enterprise-grade OAuth 2.0, SSO, passwordless authentication, and MFA',
      'AES-256 data encryption at rest and TLS 1.3 encryption in transit',
      'Automated dependency vulnerability audits and penetration checks'
    ],
    techSpecs: {
      coreStack: ['Auth0 / Supabase Auth', 'Lucia / NextAuth', 'OWASP Top 10 Guidelines', 'Snyk / Dependabot'],
      architectureSummary: 'Zero-trust API gateway architecture. Every request validates session tokens, rate limits by IP/user, and sanitizes inputs against SQL injection and XSS.',
      deliverables: ['Secure Auth Architecture', 'Role-Based Access Control (RBAC)', 'Audit Logging Module', 'Security Best Practices Checklist'],
      securityPerformance: 'OWASP compliant code audit, strict CORS policies, bcrypt / Argon2id password hashing, and encrypted session cookies.'
    }
  }
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'zenith-saas',
    title: 'Zenith Ops — Operations & Resource Portal',
    category: 'web',
    categoryLabel: 'Web App',
    type: 'Client Project',
    tagline: 'Custom multi-tenant business portal managing field operations and live dispatch.',
    summary: 'A high-throughput web application built for an operations team to track client dispatches, inventory reserves, and automated staff scheduling in real time.',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe Billing'],
    gradient: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
    scope: [
      'Complete UX architecture and interactive design system in Figma',
      'Custom role-based permissions (Admins, Dispatchers, Field Technicians)',
      'Real-time WebSocket dashboard for live status transitions',
      'Stripe customer billing portal and automated month-end accounting export'
    ],
    architectureHighlights: [
      'Server-side rendered dashboard components reducing initial load to 340ms',
      'Optimistic state mutations for instantaneous user interactions without lag',
      'Direct database migration scripts delivered into client AWS RDS instance'
    ],
    clientOutcome: 'Replaced 4 fragmented spreadsheet systems into a single centralized operational hub with 100% code ownership handed over.',
    interactivePreviewType: 'dashboard',
    demoDetails: {
      metrics: [
        { label: 'Active Dispatches', value: '142' },
        { label: 'Response Latency', value: '48ms' },
        { label: 'Sync Status', value: '100% Live' }
      ],
      sampleAction: 'Filter Dispatch Queue'
    }
  },
  {
    id: 'fitpulse-mobile',
    title: 'FitPulse — Member Booking & Training App',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    type: 'Client Project',
    tagline: 'Cross-platform mobile application with live class booking and trainer chat.',
    summary: 'Designed and engineered for a premier fitness brand with 12 studio locations. Members can reserve slots, purchase class packs, and view custom workout regimens.',
    techStack: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Apple Pay / Google Pay'],
    gradient: 'from-violet-600 to-purple-500',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300',
    scope: [
      'Native iOS and Android client build with 60fps gesture animations',
      'In-app checkout with Apple Pay & Google Pay integration',
      'Automated push notifications for upcoming bookings and schedule changes',
      'Full App Store and Google Play Store submission and compliance review'
    ],
    architectureHighlights: [
      'Offline-first caching prevents booking errors during spotty network coverage',
      'Fastlane automated pipeline for instant TestFlight beta releases',
      'Low memory footprint (sub-50MB RAM) for high stability across older devices'
    ],
    clientOutcome: 'Achieved 4.9-star average store rating and eliminated 80% of front-desk booking inquiries via automated in-app scheduling.',
    interactivePreviewType: 'mobile-screen',
    demoDetails: {
      metrics: [
        { label: 'Daily Bookings', value: '890+' },
        { label: 'App Store Rating', value: '4.9 ★' },
        { label: 'Frame Rate', value: '60 FPS' }
      ],
      sampleAction: 'Simulate Class Reservation'
    }
  },
  {
    id: 'cortex-ai',
    title: 'Cortex Intake — Intelligent Document & RFP Agent',
    category: 'ai',
    categoryLabel: 'AI Systems',
    type: 'Demo Concept',
    tagline: 'Proprietary RAG engine that parses complex enterprise contracts and drafts responses.',
    summary: 'An advanced studio demo showing how proprietary LLM workflows ingest 100+ page technical PDFs, highlight risk clauses, and formulate compliant RFP responses in seconds.',
    techStack: ['Gemini 1.5 Pro', 'FastAPI', 'pgvector', 'React', 'Tailwind CSS'],
    gradient: 'from-purple-600 to-fuchsia-500',
    badgeColor: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/60 dark:text-fuchsia-300',
    scope: [
      'Document parsing pipeline with optical character recognition and table extraction',
      'Semantic vector search with citation linking to original PDF coordinates',
      'Interactive chat workbench allowing legal teams to ask questions with source proof',
      'Zero model retention policy ensuring strict corporate confidentiality'
    ],
    architectureHighlights: [
      'Chunking strategy tailored to contractual clauses with parent-document retrieval',
      'Deterministic output guardrails validating all pricing and dates against source text',
      'Sub-500ms streaming responses with low token consumption'
    ],
    interactivePreviewType: 'ai-prompt',
    demoDetails: {
      metrics: [
        { label: 'Document Parsed', value: '148 Pgs' },
        { label: 'Time to Analyze', value: '1.8s' },
        { label: 'Citation Accuracy', value: '99.4%' }
      ],
      sampleAction: 'Run Risk Analysis on NDA'
    }
  },
  {
    id: 'flowsync-automation',
    title: 'FlowSync — B2B Procurement & Webhook Broker',
    category: 'demo',
    categoryLabel: 'Workflow & Demo',
    type: 'Demo Concept',
    tagline: 'Resilient multi-service automation pipeline handling high-volume order handoffs.',
    summary: 'A reference architecture built to demonstrate automated inventory reconciliation, invoicing, and warehouse dispatch without human intervention.',
    techStack: ['TypeScript', 'BullMQ', 'Redis', 'QuickBooks API', 'Shopify Webhooks'],
    gradient: 'from-orange-500 to-pink-500',
    badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/60 dark:text-orange-300',
    scope: [
      'Webhook listener handling 5,000+ payload events per hour',
      'Automated reconciliation between e-commerce orders and warehouse ERP',
      'Self-healing retry queues that isolate bad records without halting pipeline',
      'Slack bot alert channel providing real-time financial summaries'
    ],
    architectureHighlights: [
      'Distributed lock coordination prevents duplicate charge or double dispatch',
      'HMAC cryptographic verification on every incoming payload',
      'Zero maintenance requirement running on cost-efficient container instances'
    ],
    interactivePreviewType: 'workflow',
    demoDetails: {
      metrics: [
        { label: 'Processed Events', value: '24,800' },
        { label: 'Error Rate', value: '0.00%' },
        { label: 'Queue Time', value: '12ms' }
      ],
      sampleAction: 'Trigger Test Webhook'
    }
  },
  {
    id: 'lumina-commerce',
    title: 'Lumina Luxury — Headless Commerce Experience',
    category: 'web',
    categoryLabel: 'Web App',
    type: 'Client Project',
    tagline: 'High-conversion editorial digital storefront for a premium lifestyle label.',
    summary: 'Headless e-commerce build focused on micro-interactions, storytelling layout, and frictionless international checkout across multiple currencies.',
    techStack: ['Next.js App Router', 'Shopify Storefront API', 'Tailwind CSS', 'Motion'],
    gradient: 'from-amber-500 to-emerald-500',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300',
    scope: [
      'Editorial lookbook layouts with interactive shoppable hotspots',
      'Instant slide-out cart with multi-currency dynamic conversion',
      'Sub-second collection filtering without full page reloads',
      'Optimized image delivery pipeline delivering 90% bandwidth reduction'
    ],
    architectureHighlights: [
      'Incremental Static Regeneration (ISR) ensures fresh inventory data without build lags',
      'Zero layout shifts (CLS: 0.00) even with high-resolution editorial photography',
      'Pre-warmed edge cache delivering global load times under 400ms'
    ],
    clientOutcome: 'Delivered +44% lift in mobile checkout conversion rate within 60 days of launch.',
    interactivePreviewType: 'dashboard',
    demoDetails: {
      metrics: [
        { label: 'Avg Mobile Speed', value: '0.6s' },
        { label: 'Cart Conversion', value: '+44%' },
        { label: 'Global Edge Cache', value: '99.1%' }
      ],
      sampleAction: 'Preview Mobile Checkout'
    }
  },
  {
    id: 'pulse-crm',
    title: 'Pulse Desk — Custom B2B Client Management Portal',
    category: 'web',
    categoryLabel: 'Business Software',
    type: 'Client Project',
    tagline: 'Tailored CRM and ticketing workspace replacing generic $300/mo SaaS subscriptions.',
    summary: 'Custom operational workspace built for an advisory firm to track high-value deal pipelines, automated meeting summaries, and shared client deliverables.',
    techStack: ['React', 'TypeScript', 'Supabase / PostgreSQL', 'Tailwind CSS'],
    gradient: 'from-emerald-600 to-teal-500',
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300',
    scope: [
      'Pipeline Kanban board with drag-and-drop deal stage management',
      'Client portal with secure document vault and e-signature status',
      'Custom notification engine for deadline warnings and client follow-ups',
      'Complete code ownership allowing the client to modify features internally'
    ],
    architectureHighlights: [
      'Row Level Security guarantees complete isolation between client accounts',
      'Real-time Postgres changes push immediate UI updates across team members',
      'Exportable SQL backup script runnable on any private cloud provider'
    ],
    clientOutcome: 'Cut recurring monthly SaaS software fees to $0 while tailoring workflows precisely to the firm’s deal process.',
    interactivePreviewType: 'dashboard',
    demoDetails: {
      metrics: [
        { label: 'Pipelines Managed', value: '28' },
        { label: 'Monthly SaaS Saved', value: '$3,600/yr' },
        { label: 'Database Health', value: '100%' }
      ],
      sampleAction: 'Switch to Pipeline View'
    }
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    step: 1,
    name: 'Discover',
    subtitle: 'Scope, objectives & business model',
    description: 'We unpack your exact business goals, current bottlenecks, target audience, and feature priorities. No jargon or hand-waving—just clear functional definitions.',
    deliverables: [
      'Written Functional Specification Document',
      'Feature Scope Breakdown (Must-Have vs. Nice-to-Have)',
      'Recommended Architecture & Technology Stack',
      'Fixed Pricing & Clear Delivery Schedule'
    ],
    timeline: '2–4 Days',
    clientProvides: 'Core business overview, existing tool access (if any), and brand assets or reference sites.',
    accentColor: '#3B82F6'
  },
  {
    step: 2,
    name: 'Plan',
    subtitle: 'Architecture & technical blueprint',
    description: 'We design the data schema, API routes, user permission matrices, and security models before a single line of interface is built.',
    deliverables: [
      'Database Schema Entity-Relationship Diagram',
      'User Journey & Navigation Sitemap',
      'API Integration & Third-Party Service Map',
      'Sprint Milestones & Review Schedule'
    ],
    timeline: '3–5 Days',
    clientProvides: 'Feedback on key workflows, domain preferences, and approval of technical boundaries.',
    accentColor: '#06B6D4'
  },
  {
    step: 3,
    name: 'Design',
    subtitle: 'UI/UX mockups & design system',
    description: 'We create high-fidelity, interactive prototypes in Figma following clean modern aesthetics, strict typography, and responsive ergonomics.',
    deliverables: [
      'Clickable Desktop & Mobile Prototypes',
      'Component Design System (Typography, Colors, States)',
      'Design Token Specifications',
      'Design Sign-off Review Call'
    ],
    timeline: '1–2 Weeks',
    clientProvides: 'Constructive review on visual aesthetic, wording adjustments, and prototype approval.',
    accentColor: '#8B5CF6'
  },
  {
    step: 4,
    name: 'Build',
    subtitle: 'Sprint-based engineering & integration',
    description: 'We build your product in transparent, testable sprints. You get access to a live staging URL from day one to watch progress as features come to life.',
    deliverables: [
      'Private GitHub Repository with Clean Commit History',
      'Live Staging Environment for Testing',
      'Weekly Async Video Walkthroughs',
      'Working Database & API Infrastructure'
    ],
    timeline: '2–4 Weeks (per sprint)',
    clientProvides: 'Weekly staging feedback and prompt clarification on specific business rules.',
    accentColor: '#10B981'
  },
  {
    step: 5,
    name: 'Test',
    subtitle: 'Quality assurance, security & performance',
    description: 'We rigorously stress-test the product: responsive layout audits, edge cases, permission security tests, and sub-second speed optimization.',
    deliverables: [
      'Cross-Browser & Multi-Device Testing Matrix',
      'Lighthouse Performance & Accessibility Audit (95+ score)',
      'Security Vulnerability & Auth Penetration Check',
      'User Acceptance Testing (UAT) Sign-off'
    ],
    timeline: '3–5 Days',
    clientProvides: 'Final team verification on real-world test scenarios.',
    accentColor: '#F97316'
  },
  {
    step: 6,
    name: 'Launch',
    subtitle: 'Deployment & store submission',
    description: 'We orchestrate zero-downtime production deployment. For mobile apps, we handle Apple App Store and Google Play Store submission paperwork and compliance.',
    deliverables: [
      'Production Domain & SSL Setup',
      'Apple App Store & Google Play Submission',
      'Live Cloud Infrastructure Health Check',
      'Automated Database Backup Verification'
    ],
    timeline: '2–4 Days',
    clientProvides: 'Domain registrar access and App Store / Cloud developer account invites.',
    accentColor: '#EAB308'
  },
  {
    step: 7,
    name: 'Handoff',
    subtitle: '100% ownership & post-launch care',
    description: 'We don’t lock you in. You receive 100% of the source code, cloud credentials, documentation, and a dedicated 30-day post-launch warranty.',
    deliverables: [
      'Complete Source Code Ownership Transfer',
      'Loom Video Walkthrough Guide for Your Team',
      'Full Cloud & Database Admin Access',
      '30 Days of Included Bug Fix & Maintenance Warranty'
    ],
    timeline: 'Day 1 Post-Launch',
    clientProvides: 'Acknowledgment of transfer and kickoff of optional ongoing care retainer.',
    accentColor: '#EC4899'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Swaroop',
    role: 'Lead Architect & Full-Stack Engineer',
    focus: 'Web Applications · Product Architecture · UI/UX Design',
    bio: 'Full-stack software engineer and product designer dedicated to clean architecture, high-performance web systems, and delightful digital experiences. Obsessed with fast load times, accessible typography, and maintainable TypeScript codebases.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Figma', 'Cloudflare'],
    responsibilities: [
      'End-to-end full-stack web application engineering',
      'UI/UX design systems and responsive ergonomics',
      'Database modeling, API design, and performance audits',
      'Production cloud deployment and technical documentation'
    ],
    avatarInitial: 'S',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    name: 'Krish',
    role: 'Mobile Lead & Client Operations',
    focus: 'Mobile Applications · Client Operations · Payments & Delivery',
    bio: 'Mobile software developer and operations lead focused on native cross-platform experiences, app store releases, and seamless client communication. Ensures projects stay strictly on schedule, on budget, and friction-free for international founders.',
    techStack: ['React Native', 'Expo', 'iOS / Swift', 'Android / Kotlin', 'Stripe Billing', 'App Store Connect', 'Fastlane'],
    responsibilities: [
      'Cross-platform iOS and Android mobile app development',
      'Store certification, compliance, and release management',
      'International client communication and sprint coordination',
      'Payment gateway integrations and invoicing workflows'
    ],
    avatarInitial: 'K',
    gradient: 'from-violet-600 to-purple-500'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What exactly does KR Studio build?',
    answer: 'We design and build custom web applications, cross-platform mobile apps (iOS & Android), bespoke business software (client portals, operational dashboards, inventory management), AI systems (custom RAG pipelines, intelligent document parsers), and workflow automations. Everything we build is tailored to your business rules—not cookie-cutter templates.',
    highlight: 'Custom digital products engineered for real business growth.'
  },
  {
    question: 'Who owns the code, intellectual property, and domain?',
    answer: 'You own 100% of everything from day one. Unlike agencies that lock you into monthly proprietary platform fees or retain your codebase, we hand over full GitHub repository rights, cloud hosting credentials, domain configurations, and database access. There are zero ongoing licensing fees to us—it is entirely your asset.',
    highlight: '100% IP & Source Code Ownership handed directly to you.'
  },
  {
    question: 'How do you handle international and US-based clients?',
    answer: 'We regularly partner with founders and business operators across North America and Europe. We align our sprint reviews, live syncs, and emergency support with US time zones (EST and PST friendly). We use clear written documentation, async Loom video updates, shared staging environments, and transparent project tracking so you are never left guessing.',
    highlight: 'US-friendly hours, transparent async communication, and clear English documentation.'
  },
  {
    question: 'What is the typical timeline for a custom web or mobile app?',
    answer: 'A focused MVP or production-grade web application typically takes 3 to 6 weeks from initial discovery to live production. More complex platforms or multi-platform mobile apps generally take 6 to 10 weeks across structured 2-week sprints. Because we work in direct engineering sprints without corporate bloat, we ship weeks faster than traditional agencies.',
    highlight: 'Focused MVPs in 3–6 weeks; enterprise builds in 6–10 weeks.'
  },
  {
    question: 'How do revisions, warranty, and post-launch support work?',
    answer: 'Every project includes iterative design review checkpoints before code is written, ensuring you approve the exact interface first. Once launched, every product comes with a complimentary 30-day bug warranty. After the warranty, we offer flexible month-to-month maintenance care plans for feature additions, security patches, and cloud scaling.',
    highlight: '30-day complimentary bug warranty on all deployments + optional care plans.'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Source Code Ownership',
    krStudio: '100% Full ownership transferred to your private repository',
    closedAgencies: 'Code kept proprietary or locked in agency accounts',
    krStudioPositive: true
  },
  {
    feature: 'Hosting & Cloud Account',
    krStudio: 'Deployed directly into your own AWS, Google Cloud, or Vercel',
    closedAgencies: 'Hosted on agency-controlled servers with recurring markups',
    krStudioPositive: true
  },
  {
    feature: 'Data & Database Access',
    krStudio: 'Direct access to your PostgreSQL database and raw exports anytime',
    closedAgencies: 'Gated exports, restricted schema access, and platform lock-in',
    krStudioPositive: true
  },
  {
    feature: 'Monthly Platform Rent',
    krStudio: '$0 recurring fees to KR Studio. You only pay standard cloud host costs',
    closedAgencies: 'Monthly recurring retainers required just to keep software online',
    krStudioPositive: true
  },
  {
    feature: 'Engineering Transparency',
    krStudio: 'Direct communication with Swaroop & Krish. Live staging from Day 1',
    closedAgencies: 'Filtered through non-technical account managers and ticket queues',
    krStudioPositive: true
  }
];

export const OWNERSHIP_PILLARS = [
  {
    title: 'Domain Ownership',
    description: 'Configured on your registrar. You maintain total DNS authority, SSL certificates, and brand control at all times.',
    iconName: 'Globe'
  },
  {
    title: 'Source Code Rights',
    description: 'Clean, well-documented TypeScript code handed over to your private GitHub organization with perpetual commercial rights.',
    iconName: 'Code2'
  },
  {
    title: 'Complete Data Control',
    description: 'Your user data and records live in your own dedicated database. You can inspect, query, or export it anytime without asking permission.',
    iconName: 'Database'
  },
  {
    title: 'Direct Infrastructure Access',
    description: 'Deployments live in your cloud provider account (AWS, GCP, Vercel, Supabase). You hold the master keys and billing control.',
    iconName: 'Server'
  }
];
