import CourseCard from "@/AtomicComponents/CourseCard";

const PopularCourses = ({courses}) => {
  const Videos = [
    {
      image: "history",
      title: "Music-Dance",
      heading: "Music and Movement: Express Yourself",
      content: "15 Lessons | 30 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "53+ Kids enrolled",
      link:""
    },
    {
      image: "creative",
      title: "Gardening",
      heading: "Edible Gardens: Growing Fruits and Vegetables",
      content: "34 Lessons | 38 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "19+ Kids enrolled",
      link:""
    },
    {
      image: "imagination",
      title: "Drawing and Painting",
      heading: "Masterpiece Gallery: Art Appreciation for Kids",
      content: "28 Lessons | 56 hours",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "430+ Kids enrolled",
      link:""
    },
  ];
  return (
    <>
      <div className="w-full cflexss gap-[20px] font-[400]">
        <h1 className="font-[700] text-[#012B1D] text-[24px] lg:text-[18px] ls:text-[16px]">
          Most Popular courses
        </h1>
        <div className="w-full flexss gap-[20px] py-[10px] overflow-x-auto sm:flex-wrap">
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

export default PopularCourses;
