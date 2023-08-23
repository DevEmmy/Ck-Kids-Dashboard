import Nav from "@/AtomicComponents/Nav";
import React from "react";
import { ChevronUp } from "heroicons-react";

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
            </div>
        </div>
        <div className="w-[30%] cflexmm gap-[1em]">

        </div>
      </div>
    </>
  );
};

export default CoursesPage;
