import Button from "@/AtomicComponents/Button";
import Link from "next/link";
import { ArrowRightOutline } from "heroicons-react";
import VideoCard from "@/AtomicComponents/VideoCard";
import { getAllVideos } from "@/services/request";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";

const Section3 = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    let data = await getAllVideos();
    console.log(data);
    setCourses(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const Videos = [
    {
      image: "astronomy",
      title: "Astronomy",
      heading: "Course Title: Astronomy Explorers",
      content:
        "In this course, young astronomers will delve into the mysteries of the universe, studying stars, planets, galaxies, and beyond.",
      author: "Cody Fisher • 14 August 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "146+ Kids enrolled",
    },
    {
      image: "biology",
      title: "Biology",
      heading: "Course Title: Biology Unleashed",
      content:
        "This course is designed to explore the intricacies of living organisms, from microorganisms to ecosystems.",
      author: "Jenny Wilson • 24 July 2023",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "95+ Kids enrolled",
    },
    {
      image: "gameDevelopment",
      title: "Game development",
      heading: "Course Title: Game Development Pro",
      content:
        "In this course, aspiring game developers will learn the fundamentals of game design, programming, and digital art.",
      author: "Courtney Henry • 17 Nov 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "30+ Kids enrolled",
    },
    {
      image: "engineering",
      title: "Software and application",
      heading: "Course Title: Software and Application Engineering",
      content:
        "This course is a gateway to the dynamic field of software development, focusing on programming languages,",
      author: "Kathryn Murphy • 20 Dec 2022",
      images: ["kid1", "kid2", "kid3", "kid4"],
      enrolled: "160+ Kids enrolled",
    },
  ];
  return (
    <>
      <div className="cflexss gap-[16px] relative bg-primary3 py-[70px] px-[130px] sm:py-[2em] text-[20px] lg:text-[17px] sm:px-[1.5em] font-[400]">
        <div className="block flexmm absolute bottom-[250px] left-[20px] w-[60px] sm:hidden">
          <img src={"/lst.svg"} alt="lastStar" />
        </div>
        <div className="w-full flexbm sm:text-[1.1rem] gap-[1em] flex-wrap">
          <div className="w-[40em] relative cflexss gap-[16px] text-[#FFF]">
            <div className="flexmm absolute bottom-[25px] sm:top-[-30px] sm:bottom-auto right-[-155px] w-[80px] sm:w-[40px] sm:right-[50px]">
              <img src={"/crown.svg"} alt="crown" />
            </div>
            <h1 className="font-[800] text-[30px] lg:text-[28px] leading-[150%] sm:text-[1.6rem]">
              Recommended Videos for Kids Ages 15-18:
            </h1>
            <p>
              This will focus on knowledge, creativity and practical. We help a
              personal connection and values to help them to become active
              participants in the society.
            </p>
          </div>
          <div className="flexss sm1:justify-center font-[600] text-[19px] lg:text-[15px] ls:text-[13px] flex-wrap sm1:w-full">
            <a href="/signin" className="sm:flex flex-grow">
              <Button className="border-[0.2em] bg-[#FFF] text-[#222] flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
                <p>See more</p> <ArrowRightOutline size="1em" />
              </Button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-4 md1:flex md1:flex-wrap w-full gap-[20px] overflow-x-auto">
          {loading ? (
            <>
              <div className="w-full flexmm">
                <SpinnerCircular
                  color="#00AC76"
                  className="mr-4"
                  secondaryColor={"#eeeeee"}
                  size={50}
                  thickness={150}
                />
              </div>
            </>
          ) : (
            <>
              {courses?.map((video, i) => {
                return (
                  <>
                    {i < 4 && (
                      <VideoCard key={i} {...video} background="#E8E1F5" />
                    )}
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Section3;
