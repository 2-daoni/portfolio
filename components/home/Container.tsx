"use client";
import ProfileContainer from "../profile/ProfileContainer";
import ProjectContainer from "../project/ProjectContainer";
import SkillsContainer from "../skills/SkillsContainer";
import CareerContainer from "../career/CareerContainer";
import LinkContainer from "../about/LinkContainer";

const Container = () => {
  return (
    <div className="space-y-2 mb-5 w-[70%] max-w-200">
      <div className="bg-white mt-12 py-7 px-5 rounded-md min-h-screen shadow-2xl">
        <ProfileContainer />

        <div className="space-y-4 scrollbar-hide">
          <CareerContainer />
          <ProjectContainer />
          <SkillsContainer />
          <LinkContainer />
        </div>
      </div>
    </div>
  );
};

export default Container;
