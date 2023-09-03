import Button from "@/AtomicComponents/Button";
import Link from "next/link";
import { ArrowRightOutline } from "heroicons-react";
import VideoCard from "@/AtomicComponents/VideoCard";

const Section2 = () => {
  const Videos = [
    {
      image: "baking",
      title: "Baking",
      heading: "Course Title: Baking Delights",
      content:
        "Young aspiring bakers will learn the art of baking delectable treats like cookies, cupcakes, and pastries.",
      author: "Bessie Cooper • 14 Mar 2023",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "50+ Kids enrolled",
    },
    {
      image: "gardener",
      title: "gardening",
      heading: "Course Title: Green Thumb Gardener",
      content:
        "Get your hands dirty and dive into the world of gardening with our Green Thumb Gardener course!",
      author: "Savannah Nguyen • 19 June 2023",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "150+ Kids enrolled",
    },
    {
      image: "signLanguage",
      title: "Sign Language",
      heading: "Course Title: Sign Language Explorers",
      content:
        "Dive into the world of communication without words in our Sign Language Explorers course!",
      author: "Dianne Russell • 19 Oct 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "230+ Kids enrolled",
    },
    {
      image: "visualArt",
      title: "Visual Art",
      heading: "Course Title: Visual Art Odyssey",
      content:
        "This course is a haven for young artists to explore various art forms, including drawing, painting, and sculpting.",
      author: "Devon Lane • 15 Dec 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "180+ Kids enrolled",
    },
  ];
  return (
    <>
      <div className="cflexss gap-[16px] py-[2em] px-xpadding text-[20px] lg:text-[17px] sm:px-[1.5em] font-[400]">
        <div className="w-full flexbm sm:text-[1.1rem] gap-[1em] flex-wrap">
          <div className="w-[40em] cflexss gap-[16px] text-[#333]">
            <h1 className="font-[800] text-[#012B1D] text-[30px] lg:text-[28px] leading-[150%] sm:text-[1.6rem]">
              Recommended Videos for Kids Ages 10-14:
            </h1>
            <p>
              This course will provide the necessary knowledge needed to perform
              tasks. Children in this age category are creative and more hands
              on, it is necessary to provide practical tasks that can challenge
              them to learn more
            </p>
          </div>
          <div className="flexss sm1:justify-center font-[600] text-[19px] lg:text-[15px] ls:text-[13px] flex-wrap sm1:w-full">
            <a href="/price" className="sm:flex flex-grow">
              <Button className="border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
                <p>See more</p> <ArrowRightOutline size="1em" />
              </Button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-4 md1:flex md1:flex-wrap w-full gap-[20px] overflow-x-auto">
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

export default Section2;
