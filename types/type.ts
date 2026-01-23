export interface Project {
  title: string; // 프로젝트 명
  duration: string; // 프로젝트 기간
  techStack: string[]; // 사용 기술 스택
  description: string; // 프로젝트 설명
  responsibilities: string[]; // 내가 담당한 기능
  url?: string;
  file?: ProjectFile;
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
