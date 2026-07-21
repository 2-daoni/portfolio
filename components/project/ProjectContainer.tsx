"use client";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Projects } from "@/data/data";
import Subject from "../common/Subject";

const PREVIEW_COUNT = 3;

const ProjectContainer = () => {
  const [expanded, setExpanded] = useState(false);
  const list = expanded ? Projects : Projects.slice(0, PREVIEW_COUNT);

  const router = useRouter();

  return (
    <div className="bg-gray-100 p-4! rounded-md mt-4">
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
            onClick={() => {
              router.push("/project");
              router.push(`/project/${item.slug}`);
            }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <item.icon className="border rounded-full border-gray-200 p-0.5" />
              <div className="flex flex-col items-start overflow-hidden">
                <p className="truncate">{item.title}</p>
                <p className="text-left text-[12px] whitespace-nowrap lowercase">{item.description}</p>
              </div>
            </div>
            <KeyboardArrowRightIcon style={{ width: 20, color: "#c2c2c2" }} />
          </Button>
        ))}
        {Projects.length > PREVIEW_COUNT && (
          <IconButton
            onClick={() => setExpanded((prev) => !prev)}
            style={{ color: "gray" }}
            className="p-0! max-w-fit! mx-auto!"
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
