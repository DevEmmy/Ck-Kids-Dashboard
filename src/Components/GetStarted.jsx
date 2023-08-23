import CourseCard from "@/AtomicComponents/CourseCard";

const GetStarted = () => {
  const Videos = [
    {
      image: "history",
      title: "History",
      heading: "History Adventures: Exploring the Past",
      content:
        "Step into the captivating world of history and embark on a thrilling adventure through time!",
      author: "Wade Warren • 14 Jan 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "43+ Kids enrolled",
    },
    {
      image: "creative",
      title: "Drawing and Painting",
      heading: "Unleashing Creative Expression",
      content:
        "Discover the joy of artistic expression in our Drawing and Painting Mastery course!",
      author: "Leslie Alexander • 16 Feb 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "59+ Kids enrolled",
    },
    {
      image: "imagination",
      title: "Arts and Craft",
      heading: "Arts and Crafts: Unleashing Imagination",
      content:
        "Children will explore a wide range of materials and techniques, turning their imagination into tangible creations.",
      author: "Robert Fox • 23 April 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "430+ Kids enrolled",
    },
    {
      image: "history",
      title: "History",
      heading: "History Adventures: Exploring the Past",
      content:
        "Step into the captivating world of history and embark on a thrilling adventure through time!",
      author: "Wade Warren • 14 Jan 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "140+ Kids enrolled",
    },
  ];
  return (
    <>
      <div className="cflexss gap-[1em] py-[2em] sm:px-[1.5rem] font-[400]">
        <div className="w-full flexbm text-[0.9rem] sm:text-[1.1rem] gap-[1em] flex-wrap">
          <h1 className="font-[800] text-[#012B1D] text-[1.5rem] sm:text-[1.6rem]">
            Recommended Videos for Kids Ages 6-9:
          </h1>
        </div>
        <div className="w-full flexbm gap-[0.5em] flex-wrap">
          {Videos.map((video, i) => {
            return (
              <>
                <CourseCard
                  key={i}
                  {...video}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GetStarted;
