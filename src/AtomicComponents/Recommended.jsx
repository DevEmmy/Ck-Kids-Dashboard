import CourseCard from "./CourseCard";

const Recommended = () => {
  const Videos = [
    {
      image: "history",
      title: "Globalization",
      heading: "Stories from Afar: Folktales and Legends",
      content: "32 Lessons | 64 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "43+ Kids enrolled",
      link:""
    },
    {
      image: "creative",
      title: "Map + Knowledge",
      heading: "Exploring Continents and Oceans",
      content: "12 Lessons | 24 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "59+ Kids enrolled",
      link:""
    },
    {
      image: "imagination",
      title: "Nursery Rhymes",
      heading: "Creating Your Own Nursery Rhyme Storybook",
      content: "31 Lessons | 62 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "430+ Kids enrolled",
      link:""
    },
    {
      image: "creative",
      title: "Gardening",
      heading: "From Seed to Sprout: Understanding Plant Life Cycles",
      content: "8 Lessons | 16 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "140+ Kids enrolled",
      link:""
    },
  ];
  return (
    <>
      <div className="w-full cflexss gap-[20px] font-[400]">
        <h1 className="font-[700] text-[#012B1D] text-[24px] lg:text-[18px] ls:text-[16px]">
          Recommended Courses
        </h1>
        <div className="w-full flexss gap-[20px] overflow-x-auto py-[10px] sm:flex-wrap">
          {Videos.map((video, i) => {
            return (
              <>
                <CourseCard key={i} {...video}/>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recommended;
