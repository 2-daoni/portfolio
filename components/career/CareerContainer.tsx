import { Careers } from "@/data/data";
import Subject from "../common/Subject";
import { Button, Divider } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { useState } from "react";

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
              {showMoreCompany === company && (
                <div className="bg-white px-3 py-1 rounded-sm">
                  {work.map((item) => (
                    <p key={item}>- {item}</p>
                  ))}
                </div>
              )}
              {index === 0 && <Divider className="my-1!" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerContainer;
