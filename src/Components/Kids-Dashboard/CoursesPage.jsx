import Nav from "@/AtomicComponents/Nav";
import React, { useState, useEffect } from "react";
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
import { getAllVideos, getMyDetails } from "@/services/request";
import { IoDiamondOutline } from "react-icons/io5";

const Appear = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const CoursesPage = ({ student }) => {
  const [cat, setCat] = useState(false);
  const [loading, setLoading] = useState();

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

  const [courses, setCourses] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    let data = await getAllVideos();
    console.log(data);
    setCourses(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav active={1} student={student} />
      <div className="w-full flexbs py-[2em] mt-[90px] px-xPadding flex-wrap">
        <div className="w-[70%] lf:w-full cflexss gap-[2em] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
          <div className="flexmm gap-[2em]">
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
            <div
              className="z-25 flexmm p-[1em] border-[2px] gap-[1em] rounded-xl cursor-pointer"
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
                  className="absolute top-[210px] left-0 lf:left-[50px] bg-white cflexss gap-[0.5em] p-[0.5em] w-[18em] rounded-xl shadow-md border-2"
                >
                  {Categories.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="flexbm w-full px-[1em] py-[0.5em] rounded-xl hover:bg-primary2 hover:text-white transition-all duration-400"
                      >
                        <p>{item.category}</p>
                        <ChevronRight />
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
            <div className="block lf:hidden flexmm p-[1em] border-[2px] gap-[1em] rounded-xl">
              <SearchOutline
                size="20px"
                color="#D8D8D8"
                style={{ cursor: "pointer" }}
              />
              <input type="text" className="w-[25em] outline-none" />
            </div>
          </div>
          <GetStarted courses={courses} loading={loading} />
          <PopularCourses courses={courses} loading={loading} />
          <TopCategories />
          <Recommended courses={courses} loading={loading} />
        </div>

        <div className="fixed lf:hidden z-25 top-[110px] lf:top-[90px] right-[5%] w-[25%] cflexmm gap-[1em]">
          <GemView />
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
