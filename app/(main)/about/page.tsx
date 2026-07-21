import type { Metadata } from "next";
import AboutContainer from "@/components/about/AboutContainer";
import { ProfileData } from "@/data/data";

export const metadata: Metadata = {
  title: "자기소개",
  description: ProfileData.description.split("\n\n")[0],
};

const AboutPage = () => {
  return <AboutContainer />;
};

export default AboutPage;
