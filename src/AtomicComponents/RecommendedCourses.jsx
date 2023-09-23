import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { getAllVideos } from "@/services/request";

const RecommendedCourses = () => {
  const Videos = [
    {
      image: "history",
      title: "History",
      heading: "History Adventures: Exploring the Past",
      content: "24 Lessons  |  48 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "43+ Kids enrolled",
      link: "",
    },
    {
      image: "creative",
      title: "Arts and Craft",
      heading: "Arts and Crafts: Unleashing Imagination",
      content: "24 Lessons  |  44 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "59+ Kids enrolled",
      link: "",
    },
    {
      image: "imagination",
      title: "Drawing and Painting",
      heading: "Unleashing Creative Expression",
      content: "13 Lessons  |  26 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "430+ Kids enrolled",
      link: "",
    },
  ];

  const [courses, setCourses] = useState([])

  const fetchData = async () => {
    let data = await getAllVideos();
    console.log(data)
    setCourses(data)
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="cflexss gap-[20px] py-[2em] font-[400] w-full">
        <h1 className="font-[700] text-black text-[24px] lg:text-[18px] ls:text-[16px] lf:text-[22px]">
          Recommended Courses
        </h1>
        <div className=" max-w-none w-full flexss gap-[20px] overflow-y-hidden overflow-x-scroll py-[10px] sm:flex-wrap ss">
          {courses.map((video, i) => {
            return (
              // <div key={i} className="w-[100%]">
                <CourseCard {...video} />
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecommendedCourses;
