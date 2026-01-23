"use client";

import Image from "next/image";
import ProfileImg from "@/assets/profile.png";
import { ProfileData } from "@/data/data";
import { Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Profile = () => {
  const { name, role, tagline, keywords, contacts } = ProfileData;
  return (
    <div className="flex  justify-between">
      <div className="space-y-1">
        <p>{name}</p>
        <p className="text-2xl">{role}</p>
        <p className="text-[12px] text-gray-600">{tagline}</p>
        <div>
          <Button variant="contained" className="bg-black!" startIcon={<NotificationsIcon />}>
            Contact
          </Button>
        </div>
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
