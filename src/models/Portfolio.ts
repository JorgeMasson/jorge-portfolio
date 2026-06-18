export type Language = 'en' | 'es';

export type Profile = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type NavItem = {
  label: string;
  target: string;
};

export type Education = {
  degree: string;
  institution: string;
  graduation: string;
  professionalId: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  name: string;
  type: string;
  role: string;
  description: string;
  impact: string;
  stack: string[];
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type Localized<T> = Record<Language, T>;
