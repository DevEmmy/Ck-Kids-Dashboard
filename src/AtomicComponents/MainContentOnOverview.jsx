import React from "react";
import { BsBadgeSd, BsFire, BsTrophy } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import CoursesOverview from "./CoursesOverview";
import LeaderBoardOverview from "./LeaderBoardOverview";
import Recommended from "./Recommended";

const MainContentOnOverview = () => {
  return (
    <>
      <div className=" text-white w-full text-[20px]">
        <p className="text-black py-[10px] font-[600]">Overview</p>

        <div className="flex font-[400] gap-[20px] flex-wrap">
          <div className="cflexms gap-[5px] bg-primary1 text-[20px] px-[30px] py-[20px] rounded-[24px] w-[270px] sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] bg-white rounded-[8px] text-primary1">
                <BsFire size="24px" />{" "}
              </span>
              <h1 className="text-[48px] font-[800]">20</h1>
            </div>
            <p>Your Streak</p>
          </div>

          <div className="cflexms gap-[5px] bg-primary2 text-[20px] px-[30px] py-[20px] rounded-[24px] w-[270px] sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] bg-white rounded-[8px] text-primary2">
                <GiGraduateCap size="24px" />{" "}
              </span>
              <h1 className="text-[48px] font-[800]">100</h1>
            </div>
            <p>Completed Courses</p>
          </div>

          <div className="cflexms gap-[16px] bg-primary3 text-[20px] px-[20px] py-[20px] rounded-[24px] w-[270px] sm:flex-grow">
            <div className="flex gap-[15px] items-center">
              <span className="p-[12px] bg-white rounded-[8px] text-primary3">
                <BsTrophy size="24px" />{" "}
              </span>
              <div className="cflexms gap-[6px]">
                <p>Mastery Stages</p>
                <p className="text-[28px] font-[800]">Adventurer</p>
              </div>
            </div>            
          </div>

          <div className="cflexms gap-[5px] bg-primary4 text-[20px] px-[20px] py-[20px] rounded-[24px] w-[270px] sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[12px] bg-white rounded-[8px] text-primary4">
                <BsBadgeSd size="24px" />{" "}
              </span>
              <p className="text-[48px] font-[800]">50</p>
            </div>
            <p>Victory Badges</p>
          </div>
        </div>

        <CoursesOverview />

        <LeaderBoardOverview />
        <Recommended />
      </div>
    </>
  );
};

export default MainContentOnOverview;
