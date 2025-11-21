import { LucideIcon } from 'lucide-react';

export interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface Skill {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Experience {
  period: string;
  title: string;
  role: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Certification {
  title: string;
  badge: string;
  icon: LucideIcon;
}