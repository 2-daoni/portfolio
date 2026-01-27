"use client";
import Image from "next/image";
import ProfileImg from "@/assets/profile.png";
import RealProfileImg from "@/assets/realProfile.jpg";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type ProfileImageTypes = {
  className?: string;
};
const ProfileImage = ({ className }: ProfileImageTypes) => {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={twMerge("mx-auto p-2 border border-gray-200 rounded-full max-w-fit", className)}>
      <div className="relative w-32 h-32 perspective">
        <div className={`flip-card ${intro ? "intro-animate" : ""}`}>
          {/* 앞면 - 미모지 */}
          <div className="flip-front">
            <Image src={ProfileImg} alt="memoji" className="w-20 h-25" />
          </div>

          {/* 뒷면 - 실물 사진 */}
          <div className="flip-back">
            <Image src={RealProfileImg} alt="real profile" fill className="object-cover rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
