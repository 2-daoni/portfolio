import Image from "next/image";
import Subject from "../common/Subject";
import { Divider } from "@mui/material";
import ProfileImg from "@/assets/profile.png";
import { ProfileData } from "@/data/data";
import { highlightText } from "@/utils/highlightText";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import ProfileImage from "../profile/ProfileImage";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const AboutContainer = () => {
  const { name, skills, activity, description, keywords, education } = ProfileData;
  const { schoolName, department, description: eduDesc, duration } = education;
  return (
    <div className="space-y-2 mt-22 mb-5 w-[70%] max-w-200 text-black mx-auto bg-white p-7 pb-9 pt-5 rounded-md min-h-screen shadow-2xl">
      {Subject("About", "bg-purple-600", "font-semibold!")}
      <div className="text-[24px] my-4 text-center font-semibold">
        안녕하세요. <br />
        프론트엔드 개발자 <br />
        <span className="text-purple-600">{name}</span>입니다.
      </div>
      <ProfileImage />
      <div className="whitespace-pre-line text-[14px]!">{highlightText(description, keywords)}</div>

      <Divider className="my-4!" />
      {/* skills */}
      <p className="text-[20px] font-semibold">기술 스택 및 도구</p>
      <div className="flex flex-wrap gap-2">
        {skills
          .filter((skill) => skill.category !== "환경 및 협업툴")
          .map((skill) =>
            skill.items.map((item) => (
              <p key={item.name} className="border p-1 rounded-sm text-[12px] border-gray-300">
                {item.name}
              </p>
            ))
          )}
      </div>
      <Divider className="my-4!" />

      {/* 자격증 및 활동*/}
      <p className="text-[20px] font-semibold">자격증 및 활동</p>
      <div className="flex flex-col space-y-2">
        {activity.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            {item.type === "activity" ? (
              <GroupsIcon className="text-gray-500! bg-gray-200 rounded-full p-1" />
            ) : (
              <WorkspacePremiumIcon className="text-gray-500! bg-gray-200 rounded-full p-1" />
            )}
            <div className="flex flex-col text-[12px]">
              <p className="font-bold text-[14px]">{item.title}</p>
              <p className="text-gray-400">{item.duration}</p>
              {item.description && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>

      <Divider className="my-4!" />
      {/* 학력 */}
      <p className="text-[20px] font-semibold">학력</p>
      <div className="text-[12px] gap-3 flex flex-row">
        <SchoolOutlinedIcon className="text-gray-500! bg-gray-200 rounded-full p-1" />
        <div className="space-y-1">
          <p className="text-[16px] font-semibold">{schoolName}</p>
          <p className="text-gray-400">
            {duration} | {department}
          </p>
          <p className="whitespace-pre-line">{eduDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
