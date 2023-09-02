import Link from "next/link";
import React from "react";

const CoursesOverview = () => {
  const courses = [
    {
      category: "Music-Dance",
      title: "Music and Movement: Express Yourself",
      progress: "79%",
    },
    {
      category: "Gardening",
      title: "Miniature Fairy Gardens: A Magical Adventure",
      progress: "24%",
    },
    {
      category: "Arts and Crafts",
      title: "Creative Collages: Mixed Media Art for Kids",
      progress: "19%",
    },
  ];
  return (
    <div>
      <div className="flex justify-between mt-10 mb-3">
        <p className="font-[600] text-[20px] text-black">Continue Course</p>

        <a href="/kids-dashboard/continue-course" className="text-gray-500 font-[400] text-[20px] cursor-pointer">
          View all
        </a>
      </div>

      <div className="flex gap-[20px] md1:flex-wrap">
        {courses.map((course, index) => {
          return (
            <div className="border rounded-[12px] p-5" key={index}>
              <p className="text-primary3 text-[14px] font-[700]">
                {course.category}
              </p>
              <p className="text-black font-[700] text-[20px]">{course.title}</p>
              <p className="text-gray-500 text-[17px] font-[700] mt-3">
                Overall Progress
              </p>
              <div className="flex gap-3 items-center mt-">
                <div className="w-full h-[8px] bg-gray-200 rounded-3xl">
                  <div
                    style={{ width: course.progress }}
                    className={`${getProgressBarClass(
                      course.progress
                    )} h-2 bg-red-500 rounded-3xl`}
                  ></div>
                </div>
                <p className="text-black text-[17px] font-[700]">{course.progress}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getProgressBarClass = (progress) => {
  const progressBarWidth = `w-[${progress}]`;
  return progressBarWidth;
};

export default CoursesOverview;
