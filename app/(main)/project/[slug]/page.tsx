import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import ProjectDetail from "@/components/project/ProjectDetail";
import { Projects } from "@/data/data";
import type { Project } from "@/types/type";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const project = Projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.img[0] ? [project.img[0].src] : undefined,
    },
  };
};

const ProjectDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  const project = Projects.find((p) => p.slug === slug) as Project;

  if (!project) return notFound();
  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
