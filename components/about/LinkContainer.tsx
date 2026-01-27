import { ProfileData } from "@/data/data";
import Image from "next/image";
import { Button, Tooltip } from "@mui/material";
import Subject from "../common/Subject";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GithubIcon from "@/assets/skills/GitHub.svg";
import TistoryIcon from "@/assets/Tistory.svg";
import NotionIcon from "@/assets/notion.svg";
import { toast } from "react-hot-toast";

const LinkContainer = () => {
  const { contacts } = ProfileData;
  const links = [
    {
      name: "github",
      href: contacts.github,
      icon: GithubIcon,
      size: "w-9 h-9",
    },
    {
      name: "tistory",
      href: contacts.blog,
      icon: TistoryIcon,
      size: "w-7 h-7",
    },
    {
      name: "notion",
      href: contacts.notion,
      icon: NotionIcon,
      size: "w-9 h-9",
    },
  ];
  return (
    <div className="bg-gray-100 p-4! rounded-md mt-4">
      {Subject("More about me", "bg-yellow-300")}
      <div className="flex items-center justify-center mx-auto gap-3">
        {links.map(({ name, href, icon, size }) => (
          <Tooltip key={name} title={name} arrow>
            <Button
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0! p-2! rounded-full! hover:bg-gray-100!"
            >
              <Image src={icon} alt={name} className={`${size} object-contain`} />
            </Button>
          </Tooltip>
        ))}
      </div>
      <div
        onClick={() => {
          navigator.clipboard.writeText(contacts.email);
          toast.success("이메일이 복사되었습니다!");
        }}
        className="flex cursor-pointer items-center justify-center my-2 text-[14px]"
      >
        <EmailIcon className="w-4! h-4! mr-2" />
        <p>{contacts.email}</p>
      </div>
      <div className="flex items-center justify-center text-[14px]">
        <PhoneIcon className="w-4! h-4! mr-2" />
        <p>{contacts.phone}</p>
      </div>
    </div>
  );
};

export default LinkContainer;
