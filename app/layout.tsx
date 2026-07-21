import type { Metadata } from "next";
import "@/app/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Toaster } from "react-hot-toast";
import Providers from "@/app/providers";
import { ProfileData } from "@/data/data";

const title = `${ProfileData.name} | ${ProfileData.role}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://frontend-developer-2da1.vercel.app"),
  title: {
    default: title,
    template: `%s | ${ProfileData.name}`,
  },
  description: ProfileData.tagline,
  keywords: ProfileData.keywords,
  openGraph: {
    title,
    description: ProfileData.tagline,
    url: "/",
    siteName: title,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ProfileData.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Toaster />
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
