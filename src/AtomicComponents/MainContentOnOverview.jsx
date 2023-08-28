import React from "react";
import { BsBadgeSd, BsFire, BsTrophy } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import CoursesOverview from "./CoursesOverview";
import LeaderBoardOverview from "./LeaderBoardOverview";
import Recommended from "./Recommended";

const MainContentOnOverview = () => {
  return (
    <>
      <div className=" text-white w-full">
        <p className="text-black py-[10px] font-[600]">Overview</p>

        <div className="flex gap-[10px] flex-wrap">
          <div className="cflexms gap-[0.5em] bg-primary1 text-[0.8rem] p-[20px] rounded-3xl w-[16em] sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[10px] bg-white rounded-md text-primary1">
                <BsFire size="20px" />{" "}
              </span>
              <h1 className="text-[2rem] font-[900]">20</h1>
            </div>
            <p>Your Streak</p>
          </div>

          <div className="cflexms gap-[0.5em] bg-primary2 text-[0.8rem] p-[20px] rounded-3xl w-[16em] sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[10px] bg-white rounded-md text-primary2">
                <GiGraduateCap size="20px" />{" "}
              </span>
              <h1 className="text-[2rem] font-[900]">100</h1>
            </div>
            <p>Completed Courses</p>
          </div>

          <div className="cflexms gap-[0.5em] bg-primary3 text-[0.8rem] p-[20px] rounded-3xl w-[16em] sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[10px] bg-white rounded-md text-primary3">
                <BsTrophy size="20px" />{" "}
              </span>
              <div className="cflexms gap-[0.5em]">
                <p>Mastery Stages</p>
                <p className="text-[1.4em] font-[900]">Adventurer</p>
              </div>
            </div>            
          </div>

          <div className="cflexms gap-[0.5em] bg-primary4 text-[0.8rem] p-[20px] rounded-3xl w-[16em] sm:flex-grow">
            <div className="flex gap-[1em] items-center">
              <span className="p-[10px] bg-white rounded-md text-primary4">
                <BsBadgeSd size="20px" />{" "}
              </span>
              <p className="text-[2rem] font-[900]">50</p>
            </div>
            <p className="pt-[6px]">Victory Badges</p>
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
