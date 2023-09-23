import Button from "@/AtomicComponents/Button";
import Link from "next/link";
import { ArrowRightOutline } from "heroicons-react";
import VideoCard from "@/AtomicComponents/VideoCard";
import { getAllVideos } from "@/services/request";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";

const Section1 = () => {
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
      <div className="cflexss bg-primary1 gap-[16px] py-[2em] pt-[15em] sm:pt-[10em] px-xpadding text-[20px] lg:text-[17px] sm:px-[1.5em] font-[400]">
        <div className="w-full flexbm sm:text-[1.1rem] gap-[16px] flex-wrap">
          <div className="w-[40em] cflexss gap-[16px] text-[#FFF]">
            <h1 className="font-[800] text-[30px] lg:text-[28px] leading-[150%] sm:text-[1.6rem]">
              Recommended Videos for Kids Ages 6-9:
            </h1>
            <p>
              This course will guide the children towards creativity and
              critical thinking. Formative ages should provide engaging topics
              to increase focus and drive motivation.
            </p>
          </div>
          <div className="flexss sm1:justify-center font-[600] text-[19px] lg:text-[15px] ls:text-[13px] flex-wrap sm1:w-full">
            <a href="/price" className="sm:flex flex-grow">
              <Button className="border-[0.2em] border-[#FFF] bg-[#FFF] text-[#222] flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
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
                      <VideoCard key={i} {...video} background="#FFF" />
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

export default Section1;
