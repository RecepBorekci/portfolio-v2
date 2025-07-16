import { IconType } from "react-icons";

export interface Stat {
  id: number;
  label: string;
  points: number;
  tooltip: string;
}

export interface InfoMenuItem {
  id: number;
  icon: IconType;
  label: string;
  path: string;
}

export interface Language {
  label: string;
  bg: string;
}

export interface Hobby {
  icon: string;
  label: string;
}

export interface ProfileData {
  name: string;
  title: string;
  description: string;
  skills: string[];
  languages: Language[];
  hobbies: Hobby[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  tags: string[];
  whatILearned: string[];
  slug: string;
  logoAlt: string;
  ariaLabel: string;
}

export interface StatCategory {
  id: number;
  name: string;
  value: number;
  substats: StatSubCategory[];
}

export interface StatSubCategory {
  id: number;
  label: string;
  value: number;
}
