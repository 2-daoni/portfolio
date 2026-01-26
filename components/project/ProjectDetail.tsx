"use client";
import { notFound } from "next/navigation";
import { Project } from "@/types/type";
import ProjectImageSwiper from "@/components/project/ProjectImageSwiper";

type ProjectTypes = {
  project: Project;
};

const ProjectDetail = ({ project }: ProjectTypes) => {
  const { title, description, duration, img, responsibilities, techStack } = project;

  if (!project) return notFound();

  return (
    <div className="space-y-2 text-gray-600 mt-22 mb-5 w-[70%] max-w-280  mx-auto bg-white p-5 pb-9 rounded-md shadow-2xl">
      <div className="bg-gray-100 py-2 px-3 rounded-md text-[12px] space-y-2">
        <div className="flex items-center">
          <p className="min-w-20">기간</p>
          <p>{duration}</p>
        </div>

        <div className="flex items-center">
          <p className="min-w-20">사용 스택</p>
          <div className="flex gap-2 flex-wrap">
            {techStack.map((tech) => (
              <p key={tech} className="border p-1 rounded-sm border-gray-200">
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold text-black">{title}</h1>
      <p className="mt-2 text-[14px]">{description}</p>
      <ProjectImageSwiper images={img} title={project.title} />
      <div className="flex flex-col text-[14px]">
        <p className="text-[18px] font-semibold text-black">상세 내용</p>
        {responsibilities.map((item, index) => (
          <p key={item}>
            {index + 1}. {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
