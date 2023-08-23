import Nav from "@/AtomicComponents/Nav";
import React from "react";
import { ChevronUp, SearchOutline } from "heroicons-react";
import GetStarted from "./GetStarted";

const CoursesPage = () => {
  return (
    <>
      <Nav />
      <div className="w-full flexbs gap-[1em] py-[2em] px-[5%]">
        <div className="w-[70%] cflexss gap-[1em] font-[400] text-[0.9rem]">
            <div className="flexmm gap-[2em]">
                <div className="flexmm p-[1em] border-[2px] gap-[1em] rounded-xl">
                    <p>Categories</p>
                    <ChevronUp />
                </div>
                <div className="flexmm p-[1em] border-[2px] gap-[1em] rounded-xl">
                    <SearchOutline size="20px" color="#D8D8D8" style={{cursor:"pointer"}}/>
                    <input type="text" className="w-[25em] outline-none"/>
                </div>
            </div>

            <GetStarted />
        </div>
        <div className="w-[30%] cflexmm gap-[1em]">

        </div>
      </div>
    </>
  );
};

export default CoursesPage;
