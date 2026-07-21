import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://frontend-developer-2da1.vercel.app/sitemap.xml",
  };
}
