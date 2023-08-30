import Button from "@/AtomicComponents/Button";
import Link from "next/link";
import { ArrowRightOutline } from "heroicons-react";
import VideoCard from "@/AtomicComponents/VideoCard";

const Section1 = () => {
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
      <div className="cflexss gap-[1em] py-[2em] px-xpadding sm:px-[1.5rem] font-[400]">
        <div className="w-full flexbm text-[0.9rem] sm:text-[1.1rem] gap-[1em] flex-wrap">
          <div className="w-[40em] cflexss gap-[0.7em] text-[#333]">
            <h1 className="font-[800] text-[#012B1D] text-[1.5rem] sm:text-[1.6rem]">
              Recommended Videos for Kids Ages 6-9:
            </h1>
            <p>
              This course will guide the children towards creativity and
              critical thinking. Formative ages should provide engaging topics
              to increase focus and drive motivation.
            </p>
          </div>
          <Link href="/">
            <Button className="bg-sec1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full font-[700] sm:font-[400]">
              <p>See more</p> <ArrowRightOutline size="1em" />
            </Button>
          </Link>
        </div>
        <div className="w-full flexbm gap-[0.5em] flex-wrap">
          {Videos.map((video, i) => {
            return (
              <>
                <VideoCard
                  key={i}
                  image={video.image}
                  title={video.title}
                  heading={video.heading}
                  content={video.content}
                  author={video.author}
                  images={video.images}
                  enrolled={video.enrolled}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section1;
