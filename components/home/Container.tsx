"use client";
import Profile from "../profile/Profile";
import ProjectContainer from "../project/ProjectContainer";
import SkillsContainer from "../skills/SkillsContainer";
import CareerContainer from "../career/CareerContainer";

const Container = () => {
  return (
    <div className="space-y-2 mb-5 w-[70%] max-w-280">
      <div className="bg-white mt-12 py-7 px-5 rounded-md min-h-screen shadow-2xl">
        <Profile />

        <div className="space-y-4 scrollbar-hide">
          <CareerContainer />
          <ProjectContainer />
          <SkillsContainer />
        </div>
      </div>
    </div>
  );
};

export default Container;
