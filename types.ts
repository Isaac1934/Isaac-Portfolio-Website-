export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  value: string;
  label: string;
}