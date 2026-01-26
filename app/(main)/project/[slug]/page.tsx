import { notFound } from "next/navigation";
import { Projects } from "@/data/data";
import { use } from "react";
import { Project } from "@/types/type";
import ProjectDetail from "@/components/project/ProjectDetail";

const ProjectDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  const project = Projects.find((p) => p.slug === slug) as Project;

  if (!project) return notFound();
  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
