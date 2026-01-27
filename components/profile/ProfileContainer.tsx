"use client";

import { ProfileData } from "@/data/data";
import ProfileImage from "./ProfileImage";

const ProfileContainer = () => {
  const { name, role, tagline } = ProfileData;
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p>{name}</p>
        <p className="text-2xl">{role}</p>
        <p className="text-[12px] text-gray-600">{tagline}</p>
      </div>
      <ProfileImage className="mx-0" />
    </div>
  );
};

export default ProfileContainer;
