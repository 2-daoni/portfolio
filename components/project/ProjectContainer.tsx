"use client";
import { Projects } from "@/data/data";
import { Button, IconButton, Modal } from "@mui/material";
import Subject from "../common/Subject";
import { useState } from "react";
import { Project } from "@/types/type";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useRouter } from "next/navigation";

const ProjectContainer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project>();
  const [list, setList] = useState<Project[]>(Projects.slice(0, 3));

  const handleOpen = (item: any) => {
    setOpen(true);
    setCurrentProject(item);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProject(undefined);
  };

  const router = useRouter();

  return (
    <div className="bg-gray-100 p-4! rounded-md mt-8">
      <div className="flex justify-between items-center mb-4">
        {Subject("Projects")}
        <Button
          variant="text"
          onClick={() => router.push("/project")}
          className="p-0! text-[12px]! text-blue-500!"
          size="small"
        >
          View All
        </Button>
      </div>

      <div className="space-y-2! flex flex-col justify-center">
        {list.map((item) => (
          <Button
            key={item.title}
            variant="outlined"
            className="text-gray-500! p-3! bg-white! border-gray-100!  mx-auto overflow-hidden flex flex-row justify-between!"
            onClick={() => handleOpen(item)}
          >
            <div className="flex items-center gap-2 min-w-0">
              <item.icon className="border rounded-full border-gray-200 p-0.5" />
              <div className="flex flex-col items-start overflow-hidden">
                <p className="truncate">{item.title}</p>
                <p className="text-left text-[12px] whitespace-nowrap">{item.description}</p>
              </div>
            </div>
            <KeyboardArrowRightIcon style={{ width: 20, color: "#c2c2c2" }} />
          </Button>
        ))}
        <IconButton
          onClick={() => {
            if (list.length < 4) {
              setList(Projects);
            } else {
              setList(Projects.slice(0, 3));
            }
          }}
          style={{ color: "gray" }}
          className="p-0! max-w-fit! mx-auto!"
        >
          {list.length > 4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </div>

      {/* 프로젝트 상세 모달 */}
      {/* <Modal open={open} className="flex justify-center items-center">
        <div className="relative bg-white p-6 rounded-xl w-100 h-120 mx-auto text-gray-700!">
          <IconButton onClick={handleClose} size="small" className="absolute! right-1 top-1">
            <CloseIcon />
          </IconButton>
          <p className="font-bold">{currentProject?.title}</p>
          <p className="text-sm text-gray-500">{currentProject?.description}</p>
          <div>
            {currentProject?.responsibilities?.map((item, index) => (
              <p key={item} className="text-sm">
                {index + 1}. {item}
              </p>
            ))}
          </div>
        </div>
      </Modal> */}

      {/* 프로젝트 상세 바텀시트 */}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: "rounded-t-2xl p-4 relative max-w-[500px]! mx-auto max-h-[85vh] text-gray-700",
        }}
      >
        {/* 드래그 핸들 */}
        {/* <div className="flex justify-center mb-3">
          <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
        </div> */}

        <div className=" flex flex-col gap-2 overflow-y-auto">
          <IconButton onClick={handleClose} size="small" className="absolute! right-2 top-2 ">
            <CloseIcon />
          </IconButton>
          {/* <iframe src={"/@/data/slipcare.pdf"}></iframe> */}
          {/* {img && <Image src={img} alt="pdf" width={30} height={30} />} */}
          <p className="font-bold text-lg">{currentProject?.title}</p>
          <div className="w-full h-30 bg-blue-100" />
          <p>{currentProject?.duration}</p>
          <p className="text-sm text-gray-500">{currentProject?.description}</p>
          <p>
            {currentProject?.techStack?.map((item, index) => (
              <span key={item} className="text-sm">
                {item}
                {index !== currentProject?.techStack?.length - 1 && ", "}
              </span>
            ))}
          </p>
          <div className="flex flex-col gap-1">
            {currentProject?.responsibilities?.map((item, index) => (
              <p key={item} className="text-sm">
                {index + 1}. {item}
              </p>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ProjectContainer;
