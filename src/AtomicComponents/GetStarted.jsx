import CourseCard from "@/AtomicComponents/CourseCard";

const GetStarted = () => {
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
      <div className="w-full cflexss gap-[1em] sm:px-[1.5rem] font-[400]">
        <h1 className="font-[800] text-[#012B1D] text-[1rem]">
          Courses to get you started
        </h1>
        <div className="w-full flexbs gap-2 overflow-x-auto sm:flex-wrap">
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
  );
};

export default GetStarted;
