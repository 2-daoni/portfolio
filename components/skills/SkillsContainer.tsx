import { ProfileData } from "@/data/data";
import Subject from "../common/Subject";
import Image from "next/image";
import { Button, Tooltip } from "@mui/material";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const SkillsContainer = () => {
  const { skills } = ProfileData;

  const [currentCategory, setCurrentCategory] = useState<string>("");

  const isCategoryActive = (category: string) => currentCategory === "" || currentCategory === category;

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      {Subject("Skills", "bg-green-300")}

      {/* 카테고리 버튼 */}
      <div className="flex justify-center items-center gap-1 rounded-full mt-2 bg-white p-1">
        {skills.map(({ category }) => {
          const active = isCategoryActive(category) && currentCategory !== "";

          return (
            <Button
              key={category}
              onClick={() => {
                if (active) {
                  setCurrentCategory("");
                } else {
                  setCurrentCategory(category);
                }
              }}
              sx={{ textTransform: "none" }}
              className={twMerge(
                "text-[12px]! text-black! rounded-full! px-2! py-1! ",
                active && "bg-green-600! text-white!"
              )}
            >
              {category}
            </Button>
          );
        })}
      </div>

      {/* 스킬 아이콘 */}
      <div className="flex flex-wrap items-center gap-2 py-2">
        {skills.flatMap(({ category, items }) =>
          items.map((item) => {
            const active = isCategoryActive(category);

            return (
              <Tooltip key={item.name} title={item.name} arrow>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={44}
                  height={44}
                  quality={100}
                  className={twMerge("w-11 h-11 transition-all duration-200", !active && "grayscale opacity-50")}
                />
              </Tooltip>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SkillsContainer;
