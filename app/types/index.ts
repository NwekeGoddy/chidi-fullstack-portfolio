export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  features?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  tech: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
