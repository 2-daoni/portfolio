"use client";
import { notFound } from "next/navigation";
import { Project } from "@/types/type";
import ProjectImageSwiper from "@/components/project/ProjectImageSwiper";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

type ProjectTypes = {
  project: Project;
};

const ProjectDetail = ({ project }: ProjectTypes) => {
  const { title, description, duration, url, file, img, responsibilities, techStack } = project;

  if (!project) return notFound();

  return (
    <div className="space-y-2 text-gray-600 mt-22 mb-5 w-[70%] max-w-200  mx-auto bg-white p-5 pb-9 rounded-md shadow-2xl">
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
        {url && (
          <div className="flex">
            <p className="min-w-20">바로가기</p>
            <div className="flex flex-col">
              {url.map((item) => (
                <a href={item} key={item} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
        {file && (
          <div className="flex">
            <p className="min-w-20">파일 다운로드</p>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                {file.map((item) => (
                  <a
                    href={item.url}
                    key={item.name}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[12px] text-gray-600"
                  >
                    <FileDownloadOutlinedIcon className="w-4! h-3!" />
                    {item.name}
                  </a>
                ))}
              </div>
              <p className="text-[10px] text-red-500">
                pdf 파일에 암호가 걸려있는경우 "991118" 입력 후 확인 부탁드립니다.
              </p>
            </div>
          </div>
        )}
      </div>

      <h1 className="text-xl mt-4 font-bold text-black">{title}</h1>
      <p className="mt-1 text-[14px] lowercase">{description}</p>

      <ProjectImageSwiper images={img} title={project.title} />

      <div className="flex flex-col text-[14px] mt-4">
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
