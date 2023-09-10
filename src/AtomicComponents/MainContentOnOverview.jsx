import React from "react";
import { BsBadgeSd, BsFire, BsTrophy } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import CoursesOverview from "./CoursesOverview";
import LeaderBoardOverview from "./LeaderBoardOverview";
import RecommendedCourses from "./RecommendedCourses";
import GemView from "./GemView";

const MainContentOnOverview = ({ student }) => {
  return (
    <>
      <div className=" text-white w-full text-[20px] lg:text-[18px] ls:text-[16px]">
        <p className="text-black py-[10px] font-[600] sm:text-[12px]">Overview</p>

        <div className="grid grid-cols-4 lf:flex lf:items-center font-[400] gap-[20px] lf:overflow-x-scroll">
          <div className="hidden lf:block min-w-[154px]">
            <div className="px-[13px] py-[22px] w-full text-[#222] flexmm border rounded-[12px] gap-[8px]">
              <IoDiamondOutline size="20px" className="text-primary3" />
              <div className="font-[600] text-[10px]">
                <p>Learning Gems</p>

                <h2 className="text-[20px] font-marker font-[800]">
                  {student?.gem || 0} LG
                </h2>
              </div>
            </div>  
          </div>
          <div className="cflexms gap-[5px] bg-primary1 text-[20px] lf:min-w-[154px] lg:text-[18px] ls:text-[16px] lf:text-[12px] px-[30px] lg:px-[25px] ls:px-[22px] py-[20px] lg:py-[16px] rounded-[24px] lf:rounded-[12px] w-full">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] bg-white rounded-[8px] lf:p-[6px] text-primary1">
                <BsFire size="24px" />{" "}
              </span>
              <h1 className="text-[48px] lg:text-[44px] ls:text-[40px] lf:text-[28px] font-[800]">
                {student?.streak}
              </h1>
            </div>
            <p>Your Streak</p>
          </div>

          <div className="cflexms gap-[5px] bg-primary2 lf:min-w-[154px] text-[20px] lg:text-[18px] ls:text-[16px] px-[30px] lg:px-[25px] lf:text-[12px] ls:px-[22px] py-[20px] lg:py-[16px] rounded-[24px] w-full lf:rounded-[12px]">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] lf:p-[6px] bg-white rounded-[8px] text-primary2">
                <GiGraduateCap size="24px" />{" "}
              </span>
              <h1 className="text-[48px] lg:text-[44px] ls:text-[40px] lf:text-[28px] font-[800]">
                {student?.courses.length}
              </h1>
            </div>
            <p>Completed Courses</p>
          </div>

          <div className="cflexmm bg-primary3 text-[18px] lf:min-w-[200px] lf:min-h-[91px] lg:text-[16px] lg:px-[25px] ls:px-[22px] ls:text-[15px] lf:text-[12px] py-[20px] lg:py-[16px] rounded-[24px] w-full lf:rounded-[12px]">
            <div className="flex gap-[12px] items-center">
              <span className="p-[12px] bg-white rounded-[8px] lf:p-[6px] text-primary3">
                <BsTrophy size="24px" />{" "}
              </span>
              <div className="cflexms gap-[6px]">
                <p>Mastery Stages</p>
                <p className="text-[24px] lg:text-[20px] ls:text-[18px] font-[800]">
                  Adventurer
                </p>
              </div>
            </div>
          </div>

          <div className="cflexms gap-[5px] bg-primary4 lf:min-w-[154px] text-[20px] lg:text-[18px] ls:text-[16px] lf:text-[12px] px-[30px] lg:px-[25px] ls:px-[22px] py-[20px] lg:py-[16px] rounded-[24px] lf:rounded-[12px] w-full">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] bg-white rounded-[8px] lf:p-[6px] text-primary4">
                <BsBadgeSd size="24px" />{" "}
              </span>
              <h1 className="text-[48px] lg:text-[44px] ls:text-[40px] lf:text-[28px] font-[800]">
                0
              </h1>
            </div>
            <p>Victory Badges</p>
          </div>
        </div>

        <CoursesOverview />
        <div className="w-full hidden lf:block">
          <GemView student={student}/>
        </div>

        <LeaderBoardOverview />
        <RecommendedCourses />
      </div>
    </>
  );
};

export default MainContentOnOverview;
