import React from "react";
import { BsBadgeSd, BsFire, BsTrophy } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import CoursesOverview from "./CoursesOverview";
import LeaderBoardOverview from "./LeaderBoardOverview";
import RecommendedCourses from "./RecommendedCourses";

const MainContentOnOverview = ({student}) => {
  return (
    <>
      <div className=" text-white w-full text-[20px] lg:text-[18px] ls:text-[16px]">
        <p className="text-black py-[10px] font-[600]">Overview</p>

        <div className="grid grid-cols-4 md1:grid-cols-2 font-[400] gap-[20px] sm:flex-wrap">
          <div className="cflexms gap-[5px] bg-primary1 text-[20px] lg:text-[18px] ls:text-[16px] px-[30px] lg:px-[25px] ls:px-[22px] py-[20px] lg:py-[16px] rounded-[24px] w-full sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] bg-white rounded-[8px] text-primary1">
                <BsFire size="24px" />{" "}
              </span>
              <h1 className="text-[48px] lg:text-[44px] ls:text-[40px] font-[800]">{student?.streak}</h1>
            </div>
            <p>Your Streak</p>
          </div>

          <div className="cflexms gap-[5px] bg-primary2 text-[20px] lg:text-[18px] ls:text-[16px] px-[30px] lg:px-[25px] ls:px-[22px] py-[20px] lg:py-[16px] rounded-[24px] w-full sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] bg-white rounded-[8px] text-primary2">
                <GiGraduateCap size="24px" />{" "}
              </span>
              <h1 className="text-[48px] lg:text-[44px] ls:text-[40px] font-[800]">{student?.courses.length}</h1>
            </div>
            <p>Completed Courses</p>
          </div>

          <div className="cflexmm bg-primary3 text-[18px] lg:text-[16px] lg:px-[25px] ls:px-[22px] ls:text-[15px] py-[20px] lg:py-[16px] rounded-[24px] w-full sm:flex-grow">
            <div className="flex gap-[12px] items-center">
              <span className="p-[12px] bg-white rounded-[8px] text-primary3">
                <BsTrophy size="24px" />{" "}
              </span>
              <div className="cflexms gap-[6px]">
                <p>Mastery Stages</p>
                <p className="text-[24px] lg:text-[20px] ls:text-[18px] font-[800]">Adventurer</p>
              </div>
            </div>            
          </div>

          <div className="cflexms gap-[5px] bg-primary4 text-[20px] lg:text-[18px] ls:text-[16px] px-[30px] lg:px-[25px] ls:px-[22px] py-[20px] lg:py-[16px] rounded-[24px] w-full sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] bg-white rounded-[8px] text-primary4">
                <BsBadgeSd size="24px" />{" "}
              </span>
              <h1 className="text-[48px] lg:text-[44px] ls:text-[40px] font-[800]">0</h1>
            </div>
            <p>Victory Badges</p>
          </div>
        </div>

        <CoursesOverview />

        <LeaderBoardOverview />
        <RecommendedCourses />
      </div>
    </>
  );
};

export default MainContentOnOverview;
