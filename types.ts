import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  image: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}

export interface SafetyTip {
  id: string;
  title: string;
  summary: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
}