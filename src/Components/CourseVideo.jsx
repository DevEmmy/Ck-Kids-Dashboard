import Nav from "@/AtomicComponents/Nav";
import Image from "next/image";
import Link from "next/link";
import SubTopic from "@/AtomicComponents/SubTopic";
import { ArrowLeftOutline } from "heroicons-react";
import Recommended from "@/AtomicComponents/Recommended";
import { useState } from "react";

const CourseVideo = () => {
  const Topic = [
    {
      topic: "Introduction to Arts and Crafts",
      contents: [
        {
          track: "Discover the importance of creativity and self-expression.",
          completed: true,
        },
        {
          track:
            "Explore various art forms and techniques, setting the stage for your artistic journey.",
          completed: true,
        },
      ],
    },
    {
      topic: "Getting Started with Basic Materials",
      contents: [
        {
          track:
            "Learn about essential supplies for successful arts and crafts projects.",
          completed: true,
        },
        {
          track:
            "Set up your own creative workspace for a comfortable and inspiring environment.",
          completed: false,
        },
      ],
    },
    {
      topic: "Exploring Colors and Textures",
      contents: [
        {
          track: "Discover the importance of creativity and self-expression.",
          completed: true,
        },
        {
          track:
            "Explore various art forms and techniques, setting the stage for your artistic journey.",
          completed: false,
        },
      ],
    },
  ];
  const [selected, setSelected] = useState("about");
  return (
    <>
      <Nav />
      <div className="w-full flexss gap-[1em] pt-[2em] px-[5%]">
        <Link href="/courses" className="flexmm">
          <div className="flexss bg-primary2 rounded-[0.5em] p-[0.4em] cursor-pointer">
            <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
              <ArrowLeftOutline size="12px" color="#00AC76" />
            </div>
          </div>
        </Link>
        <div className="cflexss gap-[1em]">
          <p className="font-[700]">Arts and Crafts: Unleashing Imagination</p>
          <p>22 Lessons</p>
        </div>
      </div>

      <div className="w-full flexbs pt-[2em] px-[5%] gap-[1em] flex-wrap">
        <div className="w-[68%] sm:w-full cflexss gap-[2em] font-[400] text-[0.9rem]">
          <div className="w-full h-[35em] sm:h-auto flexmm cursor-pointer">
            <Image
              src={"/CourseImage.svg"}
              width={100}
              height={100}
              alt="course video"
            />
            {/* <div>
              <div className="image">
                <video width="300px" height="300px" controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-[28%] sm:w-full cflexss gap-[1em] border-[0.2em] rounded-xl h-[31em] p-[1em] overflow-y-auto">
          {Topic.map((topic, i) => {
            return <SubTopic {...topic} key={i} />;
          })}
        </div>
      </div>

      <div className="w-full px-[5%] cflexss gap-[3em] py-[2em]">
        <div className="w-full flexsm gap-[1em]">
          <div
            className={
              selected === "about"
                ? "text-[400] text-[0.7rem] rounded-full py-[1.5em] w-[15em] flex-shrink flexmm bg-primary2 text-white cursor-pointer"
                : "text-[400] text-[0.7rem] cursor-pointer py-[1.5em] w-[15em] flex-shrink flexmm"
            }
            onClick={() => {
              setSelected("about");
            }}
          >
            <p> About this course</p>
          </div>
          <div
            className={
              selected === "transcript"
                ? "text-[400] text-[0.7rem] rounded-full py-[1.5em] w-[15em] flex-shrink flexmm bg-primary2 text-white cursor-pointer"
                : "text-[400] text-[0.7rem] cursor-pointer py-[1.5em] w-[15em] flex-shrink flexmm"
            }
            onClick={() => {
              setSelected("transcript");
            }}
          >
            <p> Transcript</p>
          </div>
          <div
            className={
              selected === "question"
                ? "text-[400] text-[0.7rem] rounded-full py-[1.5em] w-[15em] flex-shrink flexmm bg-primary2 text-white cursor-pointer"
                : "text-[400] text-[0.7rem] cursor-pointer py-[1.5em] w-[15em] flex-shrink flexmm"
            }
            onClick={() => {
              setSelected("question");
            }}
          >
            <p> Ask question</p>
          </div>
        </div>
        <div className="w-full cflexss gap-[1em]">

        </div>
      </div>
      <div className="w-full px-[5%] flexmm">
        <Recommended />
      </div>
    </>
  );
};

export default CourseVideo;
