import {
  SearchOutline,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Plus,
  VideoCameraOutline,
  PlusCircle,
  DotsVertical,
} from "heroicons-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Courses = () => {
  const [drop, setDrop] = useState(false);
  const [cat, setCat] = useState(false);
  const [type, setType] = useState(false);
  const [add, setAdd] = useState(false);

  const Appear = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

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

  const Class = [
    {
      class: "JSS 1D",
    },
    {
      class: "JSS 1E",
    },
    {
      class: "JSS 1E",
    },
    {
      class: "JSS 1E",
    },
    {
      class: "JSS 1E",
    },
  ];

  const AddCourse = [
    {
      type: "Single Video",
      icon: <VideoCameraOutline size="16px" />,
    },
    {
      type: "Create new collection",
      icon: <VideoCameraOutline size="16px" />,
    },
    {
      type: "Add to collection",
      icon: <PlusCircle size="16px" />,
    },
  ];

  return (
    <>
      <div className="w-full p-[30px] cflexss gap-[25px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
        <div className="w-full flexmm flexem">
          <button
            className="relative px-[52px] py-[20px] flexmm gap-[10px] font-[600] lg:py-[18px] ls:py-[15px] lg:px-[45px] rounded-full bg-primary2 cursor-pointer text-[#FFF] border-none"
            onClick={() => {
              setAdd(!add);
              setCat(false);
              setDrop(false);
              setType(false);
            }}
          >
            <p>Add new course</p>
            <Plus size="16px" />
            {add && (
              <div className="absolute top-[80px] z-50 font-[400] text-[17px] text-[#808080] cflexss p-[6px] border-[1px] rounded-[12px] bg-[#FFF] flex-shrink shadow-md">
                {AddCourse.map((course) => {
                  return (
                    <>
                      <div className="w-[228px] py-[12px] px-[16px] gap-[10px] flexsm rounded-[4px] flex-shrink hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400">
                        {course.icon}
                        <p>{course.type}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </button>
        </div>
        <div className="w-full h-full cflexss gap-[30px] border-[1px] rounded-[24px] bg-[#FFF] shadow-md py-[30px] px-[20px]">
          <div className="w-full flexsm gap-[25px] text-[#AAA]">
            <div className="flexmm gap-[10px] rounded-[8px] border-[1px] p-[16px] w-[526px] bg-white flex-shrink">
              <SearchOutline size="16px" className="cursor-pointer" />
              <input
                type="text"
                placeholder="Search for course"
                className="w-full border-none text-[#222] outline-none"
              />
            </div>

            <div className="flexmm gap-[10px] p-[15px] border-[1px] rounded-[8px] bg-[#FFF] cursor-pointer">
              <p>Type</p>
              <ChevronUp />
            </div>

            <div
              className="relative only:z-25 flexmm p-[15px] border-[2px] gap-[10px] rounded-[8px] cursor-pointer"
              onClick={() => {
                setCat(!cat);
                setType(false);
                setDrop(false);
                setAdd(false);
              }}
            >
              <p>Categories</p>
              {cat ? <ChevronDown /> : <ChevronUp />}
              {cat && (
                <motion.div
                  animate="visible"
                  initial="hidden"
                  variants={Appear}
                  className="absolute top-[70px] left-0 lf:left-0 text-[17px] bg-[#FFF] cflexss gap-[10px] p-[15px] w-[18em] rounded-[8px] shadow-md border-[1px]"
                >
                  {Categories.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="flexbm w-full px-[16px] py-[12px] rounded-xl hover:bg-primary2 hover:text-white cursor-pointer transition-all duration-400"
                      >
                        <p>{item.category}</p>
                        <ChevronRight />
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>

            <div
              className="relative font-[400] text-[20px] lg:text-[18px] ls:text-[16px] border-[1px] rounded-[8px] p-[15px] gap-[10px] flexmm bg-white cursor-pointer"
              onClick={() => {
                setDrop(!drop);
                setCat(false);
                setType(false);
                setAdd(false);
              }}
            >
              <p>Class</p>
              {drop ? <ChevronDown /> : <ChevronUp />}
              {drop && (
                <div className="absolute top-[70px] w-[150px] text-[17px] font-[400] left-0 z-25 border-[1px] shadow-md py-[8px] px-[4px] rounded-[12px] bg-white cflexss">
                  {Class.map((items, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          className="flexbm w-full px-[16px] py-[12px] rounded-xl hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400"
                        >
                          <p>{items.class}</p>
                          <ChevronRight />
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flexmm gap-[10px] p-[15px] border-[1px] rounded-[8px] bg-[#FFF] cursor-pointer">
              <p>Creators</p>
              <ChevronUp />
            </div>
          </div>

          <div className="w-full cflexss gap-[20px] bg-[#FFF]">
            <div className="w-full rounded-[12px] border-[1px] flexss">
              <div className="w-[50%] border-r-[1px] p-[20px] flexss gap-[20px]">
                <div className="flexmm w-[327px] min-h-[200px] flex-shrink rounded-[12px]">
                  <img
                    src="/addImage.svg"
                    alt="courseImage"
                    className="rounded-[12px]"
                  />
                </div>
                <div className="flexbs">
                  <div className="pt-[20px] w-[90%] cflexss font-[700] text-[#101828]">
                    <p>Exploring Classic Nursery Rhymes</p>
                    <p className="text-[#AAA]">Description</p>
                  </div>
                  <DotsVertical size="16px" color="#808080" className="cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
