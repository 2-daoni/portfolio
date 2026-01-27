import { SvgIconComponent } from "@mui/icons-material";
import { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string; // 프로젝트 명
  duration: string; // 프로젝트 기간
  techStack: string[]; // 사용 기술 스택
  description: string; // 프로젝트 설명
  responsibilities: string[]; // 내가 담당한 기능
  url?: string[];
  file?: ProjectFile[];
  icon: SvgIconComponent;
  img: StaticImageData[];
}

export interface ProjectFile {
  name: string;
  url: string;
  type: "pdf" | "ppt" | "doc" | "image";
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  skills: SkillCategory[];
  links?: {
    github?: string;
    blog?: string;
    email?: string;
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Career {
  company: string;
  period: string;
  duration: string;
  position: string;
  employmentType: string;
  projects?: CareerProject[];
  work: string[];
  summary: string;
}

export interface CareerProject {
  title: string;
  period?: string;
  description: string;
  responsibilities: string[];
  techStack?: string[];
  link?: string;
}
