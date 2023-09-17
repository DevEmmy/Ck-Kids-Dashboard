import CourseCard from "@/AtomicComponents/CourseCard";

const GetStarted = ({courses}) => {
  const Videos = [
    {
      image: "history",
      title: "History",
      heading: "History Adventures: Exploring the Past",
      content: "24 Lessons | 48 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "43+ Kids enrolled",
      link:""
    },
    {
      image: "arts",
      title: "Arts and Craft",
      heading: "Arts and Crafts: Unleashing Imagination",
      content: "24 Lessons | 44 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "59+ Kids enrolled",
      link:"/kids-dashboard/courses/videos"
    },
    {
      image: "imagination",
      title: "Drawing and Painting",
      heading: "Unleashing Creative Expression",
      content: "13 Lessons | 26 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "430+ Kids enrolled",
      link:""
    },
  ];


  return (
    <>
      <div className="w-full cflexss gap-[1em] font-[400]">
        <h1 className="font-[700] text-[#012B1D] text-[24px] lg:text-[18px] ls:text-[16px]">
          Courses to get you started
        </h1>
        <div className="w-full flexss gap-[20px] overflow-x-auto py-[10px] sm:flex-wrap">
          {courses.map((video, i) => {
            return (
              <>
                <CourseCard key={i} {...video} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GetStarted;
