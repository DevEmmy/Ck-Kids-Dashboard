import Nav from "@/AtomicComponents/Nav";
import React from "react";
import { ChevronUp, SearchOutline } from "heroicons-react";
import GetStarted from "@/AtomicComponents/GetStarted";
import PopularCourses from "@/AtomicComponents/PopularCourses";
import TopCategories from "@/AtomicComponents/TopCategories";
import Recommended from "@/AtomicComponents/Recommended";
import GemView from "@/AtomicComponents/GemView";

const CoursesPage = () => {
  return (
    <>
      <Nav active={1}/>
      <div className="w-full flexbs py-[2em] px-xPadding flex-wrap">
        
        <div className="w-[70%] sm:w-full cflexss gap-[2em] font-[400] text-[0.9rem]">
          <div className="flexmm gap-[2em]">
            <div className="flexmm p-[1em] border-[2px] gap-[1em] rounded-xl cursor-pointer">
              <p>Categories</p>
              <ChevronUp />
            </div>
            <div className="flexmm p-[1em] border-[2px] gap-[1em] rounded-xl">
              <SearchOutline
                size="20px"
                color="#D8D8D8"
                style={{ cursor: "pointer" }}
              />
              <input type="text" className="w-[25em] outline-none" />
            </div>
          </div>
          <GetStarted />
          <PopularCourses />
          <TopCategories />
          <Recommended />
        </div>

        <div className="sticky top-[1em] right-0 w-[25%] sm:w-full cflexmm gap-[1em]">
            <GemView />
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
