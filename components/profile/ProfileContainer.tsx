"use client";

import { ProfileData } from "@/data/data";
import ProfileImage from "./ProfileImage";
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const ProfileContainer = () => {
  const { name, role, tagline } = ProfileData;
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p>{name}</p>
        <p className="text-2xl">{role}</p>
        <p className="text-[12px] text-gray-600">{tagline}</p>
        <Button
          component="a"
          href="/resume.pdf"
          download="프론트엔드개발자_이다원_이력서.pdf"
          className="text-[12px]!"
          startIcon={<FileDownloadOutlinedIcon className="w-4! h-4! p-0!" />}
        >
          <span className="-left-1 relative">이력서 다운로드</span>
        </Button>
      </div>
      <ProfileImage className="mx-0" />
    </div>
  );
};

export default ProfileContainer;
