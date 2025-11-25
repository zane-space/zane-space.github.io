export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  labName?: string;
  labUrl?: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface ProjectMedia {
  type: 'youtube' | 'image';
  url: string; // YouTube ID or Image URL
  caption?: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  tags: string[];
  imageUrl: string;
  details?: string[];
  media?: ProjectMedia[];
  links?: ExternalLink[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}