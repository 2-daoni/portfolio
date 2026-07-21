import type { MetadataRoute } from "next";
import { Projects } from "@/data/data";

const BASE_URL = "https://frontend-developer-2da1.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/project"].map((path) => ({
    url: `${BASE_URL}${path}`,
  }));

  const projectRoutes = Projects.map((project) => ({
    url: `${BASE_URL}/project/${project.slug}`,
  }));

  return [...staticRoutes, ...projectRoutes];
}
