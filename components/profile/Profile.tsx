"use client";

import Image from "next/image";
import ProfileImg from "@/assets/profile.png";
import { ProfileData } from "@/data/data";
import { Button } from "@mui/material";

const Profile = () => {
  const { name, role, tagline, keywords, contacts } = ProfileData;
  return (
    <div className="flex items-center  justify-between">
      <div className="space-y-1">
        <p>{name}</p>
        <p className="text-2xl">{role}</p>
        <p className="text-[12px] text-gray-600">{tagline}</p>
      </div>
      <div className="p-2 border border-gray-200 rounded-full">
        <div className="p-3 rounded-full min-w-32 h-32 bg-gray-200 flex justify-center items-center">
          <Image src={ProfileImg} alt="profile" className="w-20 h-25" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
