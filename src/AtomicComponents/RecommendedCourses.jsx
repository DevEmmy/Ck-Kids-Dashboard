import React from 'react'
import CourseCard from './CourseCard';

const RecommendedCourses = () => {
    const Videos = [
        {
          image: "history",
          title: "History",
          heading: "History Adventures: Exploring the Past",
          content: "24 Lessons | 48 hours",
          images: ["kid1", "kid2", "kid3", "kid4"],
          enrolled: "43+ Kids enrolled",
          link: ""
        },
        {
          image: "creative",
          title: "Arts and Craft",
          heading: "Arts and Crafts: Unleashing Imagination",
          content: "24 Lessons | 44 hours",
          images: ["kid1", "kid2", "kid3", "kid4"],
          enrolled: "59+ Kids enrolled",
          link:""
        },
        {
          image: "imagination",
          title: "Drawing and Painting",
          heading: "Unleashing Creative Expression",
          content:
            "13 Lessons | 26 hours",
    
          images: ["kid1", "kid2", "kid3", "kid4"],
          enrolled: "430+ Kids enrolled",
          link:""
        },
      ];

  return (
    <>
      <div className="cflexss gap-[1em] py-[2em] sm:px-[1.5rem] font-[400]">
        <h1 className="font-[800] text-black text-[1rem]">
          Recommended Courses
        </h1>
        <div className="w-full flexbs gap-[0.5em] flex-wrap">
          {Videos.map((video, i) => {
            return (
              <>
                <CourseCard key={i} {...video} />
              </>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default RecommendedCourses