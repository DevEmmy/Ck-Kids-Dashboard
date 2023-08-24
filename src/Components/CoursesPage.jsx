import Nav from "@/AtomicComponents/Nav";
import React from "react";
import { ChevronUp, SearchOutline } from "heroicons-react";
import GetStarted from "./GetStarted";
import PopularCourses from "./PopularCourses";
import TopCategories from "./TopCategories";

const CoursesPage = () => {
  return (
    <>
      <Nav />
      <div className="w-full flexbs gap-[1em] py-[2em] px-[5%] flex-wrap">
        <div className="w-[70%] sm:w-full cflexss gap-[2em] font-[400] text-[0.9rem]">
            <div className="flexmm gap-[2em]">
                <div className="flexmm p-[1em] border-[2px] gap-[1em] rounded-xl cursor-pointer">
                    <p>Categories</p>
                    <ChevronUp />
                </div>
                <div className="flexmm p-[1em] border-[2px] gap-[1em] rounded-xl">
                    <SearchOutline size="20px" color="#D8D8D8" style={{cursor:"pointer"}}/>
                    <input type="text" className="w-[25em] outline-none"/>
                </div>
            </div>
            <GetStarted />
            <PopularCourses />
            <TopCategories />
        </div>
        <div className="w-[30%] sm:w-full cflexmm gap-[1em]">

        </div>
      </div>
    </>
  );
};

export default CoursesPage;
