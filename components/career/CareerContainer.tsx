import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { Careers } from "@/data/data";
import Subject from "../common/Subject";

const CareerContainer = () => {
  const [showMoreCompany, setShowMoreCompany] = useState<string>("");
  return (
    <div className="bg-gray-100 p-4! rounded-md mt-4">
      {Subject("경력", "bg-orange-300")}
      <div className="mt-2">
        {Careers.map((career, index) => {
          const { company, period, summary, duration, work } = career;
          return (
            <div key={company} className="text-[12px]">
              <p className="font-semibold">{company}</p>
              <p className="text-gray-400">
                {period} | {duration}
              </p>
              <p>{summary}</p>
              <Button
                variant="text"
                className="text-[12px]! text-orange-300! p-0!"
                onClick={() => {
                  if (showMoreCompany === company) {
                    setShowMoreCompany("");
                  } else {
                    setShowMoreCompany(company);
                  }
                }}
              >
                {showMoreCompany === company ? (
                  <ExpandLessOutlinedIcon className="p-0! w-5!" />
                ) : (
                  <ExpandMoreOutlinedIcon className="p-0! w-5!" />
                )}
                주요 업무 내용 보기
              </Button>
              <div
                className={`grid mt-1.5 transition-[grid-template-rows] duration-300 ease-in-out ${
                  showMoreCompany === company ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <ul className="overflow-hidden bg-white rounded-md space-y-1.5 leading-relaxed list-disc list-inside marker:text-orange-300 text-gray-600 [&>li]:mx-3 [&>li]:first:mt-3 [&>li]:last:mb-3">
                  {work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {index !== Careers.length - 1 && <Divider className="my-2!" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerContainer;
