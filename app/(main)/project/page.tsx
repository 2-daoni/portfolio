import type { Metadata } from "next";
import Project from "@/components/project/Project";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "부산시 의료버스 어드민, 헬스케어 데이터 리포트 등 진행한 프로젝트 목록입니다.",
};

const ProjectPage = () => {
  return <Project />;
};

export default ProjectPage;
