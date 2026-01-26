"use client";

import { Button, IconButton, Tooltip } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

import FolderIcon from "@mui/icons-material/Folder";
import ConstructionIcon from "@mui/icons-material/Construction";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

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

  const router = useRouter();
  const pathname = usePathname();

  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col bg-gray-100">
          {/* 고정 탭 */}
          <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[70%] z-50 max-w-280 bg-white flex justify-between items-center p-2 rounded-md shadow-lg">
            <div>
              {tap.map((item) => {
                const isActive = pathname === item.pathname;

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
              onClick={() =>
                // TODO : 이메일, 번호 모달
                console.log("")
              }
            >
              Contact
            </Button>
          </div>

          {/* 페이지 컨텐츠 */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
