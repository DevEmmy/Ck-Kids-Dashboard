import CourseCard from "@/AtomicComponents/CourseCard";

const PopularCourses = () => {
  const Videos = [
    {
      image: "history",
      title: "Music-Dance",
      heading: "Music and Movement: Express Yourself",
      content: "15 Lessons | 30 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "53+ Kids enrolled",
    },
    {
      image: "creative",
      title: "Gardening",
      heading: "Edible Gardens: Growing Fruits and Vegetables",
      content: "34 Lessons | 38 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "19+ Kids enrolled",
    },
    {
      image: "imagination",
      title: "Drawing and Painting",
      heading: "Masterpiece Gallery: Art Appreciation for Kids",
      content: "28 Lessons | 56 hours",

      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "430+ Kids enrolled",
    },
  ];
  return (
    <>
      <div className="cflexss gap-[1em] sm:px-[1.5rem] font-[400]">
        <h1 className="font-[800] text-[#012B1D] text-[1rem]">
          Most Popular courses
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

export default PopularCourses;
