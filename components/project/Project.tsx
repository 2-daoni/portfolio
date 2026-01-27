"use client";
import { Projects } from "@/data/data";
import Subject from "../common/Subject";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";

const Project = () => {
  const router = useRouter();
  return (
    <div className="space-y-2 mt-22 mb-5 w-[70%] max-w-200 text-black mx-auto bg-white p-7 pb-9 pt-5 rounded-md min-h-screen shadow-2xl">
      {Subject("Project", "bg-blue-300", "font-semibold!")}
      <p className="text-[12px]">
        지난 4년간 스타트업에 근무하며 진행한 프로젝트들입니다. <br />
        특히 전 헬스케어 기업에서 부산시와 함께하는 사업인 이동하는 의료버스에서 의료진들이 사용하는 어드민제작, 자사
        헬스케어 앱에 들어가는 웹뷰 페이지 제작, 미래에셋, 마이금융파트너, 대구의료원 등 다양한 협력사에 건강레포트를
        제공한 경험이 있습니다.
      </p>
      <div className="space-y-2 bg-gray-100 p-4 rounded-md">
        {Projects.map((project) => {
          const { title, description, slug } = project;
          return (
            <Button
              key={title}
              variant="outlined"
              className=" w-full
              text-gray-500!
              mb-1!
              p-2!
              bg-white!
              border-gray-100!
              overflow-hidden
              flex
              "
              onClick={() => router.push(`/project/${slug}`)}
            >
              <div className="flex items-start gap-2 min-w-0 w-full">
                <project.icon className="border rounded-full border-gray-200 p-0.5 mt-1" />
                <div className="flex flex-col items-start overflow-hidden min-w-0">
                  <p className="truncate text-start text-black w-full">{title}</p>
                  <p className="truncate text-left text-[11px] w-full lowercase">{description}</p>
                </div>
              </div>
              <KeyboardArrowRightIcon style={{ width: 20, color: "#c2c2c2" }} />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
