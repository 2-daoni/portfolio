import { notFound } from "next/navigation";
import { use } from "react";
import ProjectDetail from "@/components/project/ProjectDetail";
import { Projects } from "@/data/data";
import type { Project } from "@/types/type";

const ProjectDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  const project = Projects.find((p) => p.slug === slug) as Project;

  if (!project) return notFound();
  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
