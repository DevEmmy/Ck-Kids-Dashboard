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
    },
    {
      image: "creative",
      title: "Arts and Craft",
      heading: "Arts and Crafts: Unleashing Imagination",
      content: "24 Lessons | 44 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "59+ Kids enrolled",
    },
    {
      image: "imagination",
      title: "Drawing and Painting",
      heading: "Unleashing Creative Expression",
      content:
        "13 Lessons | 26 hours",

      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "430+ Kids enrolled",
    },
  ];
  return (
    <>
      <div className="cflexss gap-[1em] py-[2em] sm:px-[1.5rem] font-[400]">
        <h1 className="font-[800] text-[#012B1D] text-[1rem]">
          Courses to get you started:
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
  );
};

export default GetStarted;
