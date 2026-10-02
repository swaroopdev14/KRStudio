export type ProjectCategory = 'all' | 'web' | 'mobile' | 'ai' | 'demo';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'ai' | 'demo';
  categoryLabel: string;
  type: 'Client Project' | 'Demo Concept';
  tagline: string;
  summary: string;
  techStack: string[];
  gradient: string;
  badgeColor: string;
  scope: string[];
  architectureHighlights: string[];
  clientOutcome?: string;
  interactivePreviewType: 'dashboard' | 'mobile-screen' | 'ai-prompt' | 'workflow';
  demoDetails: {
    metrics: { label: string; value: string }[];
    sampleAction: string;
  };
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  colorName: string;
  accentColors: {
    primary: string;
    secondary: string;
    border: string;
    glow: string;
    text: string;
    darkBorder: string;
    badgeBg: string;
  };
  iconName: string;
  simpleDescription: string;
  keyPoints: string[];
  techSpecs: {
    coreStack: string[];
    architectureSummary: string;
    deliverables: string[];
    securityPerformance: string;
  };
}

export interface ProcessPhase {
  step: number;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  clientProvides: string;
  accentColor: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  techStack: string[];
  responsibilities: string[];
  avatarInitial: string;
  gradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  highlight?: string;
}
