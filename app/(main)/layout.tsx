"use client";

import { Button, Divider, IconButton, Modal, Tooltip } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { ProfileData } from "@/data/data";

import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { toast } from "react-hot-toast";

type TapType = {
  name: string;
  icon: React.ReactNode;
  pathname: string;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tap: TapType[] = [
    { name: "홈", icon: <HomeIcon />, pathname: "/" },
    { name: "자기소개", icon: <PersonIcon />, pathname: "/about" },
    { name: "프로젝트", icon: <FolderIcon />, pathname: "/project" },
  ];

  const [open, setOpen] = useState<boolean>(false);

  const { contacts } = ProfileData;

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    toast.success(type === "email" ? "이메일이 복사되었습니다!" : "전화번호가 복사되었습니다!");
  };

  const router = useRouter();
  const pathname = usePathname();

  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col bg-gray-100 min-h-screen">
          {/* 고정 탭 */}
          <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[70%] z-50 max-w-200 bg-white flex justify-between items-center p-2 rounded-md shadow-lg">
            <div>
              {tap.map((item) => {
                const isActive =
                  item.pathname === "/"
                    ? pathname === "/"
                    : pathname === item.pathname || pathname.startsWith(`${item.pathname}/`);

                return (
                  <Tooltip key={item.name} title={item.name} arrow>
                    <IconButton
                      onClick={() => router.push(item.pathname)}
                      style={{ color: isActive ? "#0077ff" : "gray" }}
                    >
                      {item.icon}
                    </IconButton>
                  </Tooltip>
                );
              })}
            </div>

            <Button
              variant="contained"
              size="small"
              className="text-[10px]!"
              startIcon={<NotificationsIcon className="w-3!" />}
              onClick={() => setOpen(true)}
            >
              Contact
            </Button>
          </div>

          {/* 페이지 컨텐츠 */}
          <main>{children}</main>

          {open && (
            <Modal open={open} onClose={() => setOpen(false)}>
              <div
                className="
               fixed left-1/2 top-1/2
               -translate-x-1/2 -translate-y-1/2
               bg-white text-black
               rounded-xl shadow-xl
               w-[90%] max-w-sm
               py-4 px-6
             "
              >
                {/* Header */}
                <div className="flex items-center justify-between ">
                  <h2 className="text-lg font-semibold">Contact</h2>
                  <IconButton size="small" onClick={() => setOpen(false)} className="p-0!">
                    <CloseIcon />
                  </IconButton>
                </div>
                <p className="text-[12px] text-gray-500!">궁금하신 점이 있으시다면 편하게 연락주세요.</p>
                <Divider className="my-2!" />

                {/* Email */}
                <div className="mb-4 space-y-1">
                  <div className="flex items-center text-[12px] gap-2 text-sm font-medium">
                    <EmailIcon className="w-4! h-4!" />
                    이메일
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-1 text-sm">
                    <span className="truncate">{contacts.email}</span>
                    <IconButton size="small" onClick={() => handleCopy(contacts.email, "email")}>
                      <ContentCopyIcon className="w-5! h-5!" />
                    </IconButton>
                  </div>

                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    className="mt-2"
                    onClick={() => (window.location.href = `mailto:${contacts.email}`)}
                  >
                    메일 보내기
                  </Button>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <div className="flex items-center text-[12px] gap-2 text-sm font-medium">
                    <PhoneIcon className="w-4! h-4!" />
                    전화번호
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-1 text-sm">
                    <span>{contacts.phone}</span>
                    <IconButton size="small" onClick={() => handleCopy(contacts.phone, "phone")}>
                      <ContentCopyIcon className="w-5! h-5!" />
                    </IconButton>
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </body>
    </html>
  );
}
