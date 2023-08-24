import CourseCard from "@/AtomicComponents/CourseCard";

const Recommended = () => {
  const Videos = [
    {
      image: "history",
      title: "Globalization",
      heading: "Stories from Afar: Folktales and Legends",
      content: "32 Lessons | 64 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "43+ Kids enrolled",
    },
    {
      image: "creative",
      title: "Map + Knowledge",
      heading: "Exploring Continents and Oceans",
      content: "12 Lessons | 24 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "59+ Kids enrolled",
    },
    {
      image: "imagination",
      title: "Nursery Rhymes",
      heading: "Creating Your Own Nursery Rhyme Storybook",
      content: "31 Lessons | 62 hours",

      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "430+ Kids enrolled",
    },
  ];
  return (
    <>
      <div className="w-full cflexss gap-[1em] sm:px-[1.5rem] font-[400]">
        <h1 className="font-[800] text-[#012B1D] text-[1rem]">
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
  );
};

export default Recommended;
