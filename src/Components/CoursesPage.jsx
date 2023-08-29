import Nav from "@/AtomicComponents/Nav";
import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronRight,
  SearchOutline,
} from "heroicons-react";
import GetStarted from "@/AtomicComponents/GetStarted";
import PopularCourses from "@/AtomicComponents/PopularCourses";
import TopCategories from "@/AtomicComponents/TopCategories";
import Recommended from "@/AtomicComponents/Recommended";
import GemView from "@/AtomicComponents/GemView";
import { motion, transform } from "framer-motion";

const Appear = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const CoursesPage = () => {
  const [cat, setCat] = useState(false);
  const Categories = [
    {
      category: "History",
      content: [],
    },
    {
      category: "Nursery Rhymes",
      content: [],
    },
    {
      category: "Music-Dance",
      content: [],
    },
    {
      category: "Gardening",
      content: [],
    },
    {
      category: "Drawing and Painting",
      content: [],
    },
    {
      category: "Cooking",
      content: [],
    },
    {
      category: "Arts and Craft",
      content: [],
    },
    {
      category: "Globalization",
      content: [],
    },
  ];
  return (
    <>
      <Nav active={1} />
      <div className="w-full flexbs py-[2em] px-xPadding flex-wrap">
        <div className="w-[70%] sm:w-full cflexss gap-[2em] font-[400] text-[0.9rem]">
          <div className="flexmm gap-[2em]">
            <div
              className="relative flexmm p-[1em] border-[2px] gap-[1em] rounded-xl cursor-pointer"
              onClick={() => {
                setCat(!cat);
              }}
            >
              <p>Categories</p>
              {cat ? <ChevronUp /> : <ChevronDown />}
              {cat && (
                <motion.div
                  animate="visible"
                  initial="hidden"
                  variants={Appear}
                  className="absolute top-[5em] left-0 bg-white cflexss gap-[0.5em] p-[0.5em] w-[18em] rounded-xl shadow-md border-2"
                >
                  {Categories.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="flexbm w-full px-[1em] py-[0.5em] rounded-xl hover:bg-primary2 hover:text-white transition-all duration-500"
                      >
                        <p>{item.category}</p>
                        <ChevronRight />
                      </div>
                    );
                  })}
                </motion.div>
              )}
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
