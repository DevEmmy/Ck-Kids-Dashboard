import Nav from "@/AtomicComponents/Nav";
import Image from "next/image";
import Link from "next/link";
import SubTopic from "@/AtomicComponents/SubTopic";
import { ArrowLeftOutline, HeartOutline } from "heroicons-react";
import CourseCard from "@/AtomicComponents/CourseCard";
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
  const [selected, setSelected] = useState("question");
  return (
    <>
      <Nav active={1}/>
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
          {selected === "about" && (
            <>
              <h1>ABOUT THIS COURSE</h1>
            </>
          )}
          {selected === "transcript" && (
            <>
              <h1>COURSE TRANSCRIPT</h1>
            </>
          )}
          {selected === "question" && (
            <>
              <div className="w-full cflexsm gap-[1em] overflow-y-auto h-[80vh] px-[2em]">
                <div className="flexbs w-full flex-wrap font-[400] text-[0.7rem]">
                  <div className="flexss gap-[1em]">
                    <div className="flexmm w-[5em]">
                      <Image
                        src="/kid1.svg"
                        width={100}
                        height={100}
                        alt="jacob jones"
                      />
                    </div>
                    <div className="w-full cflexss gap-[1em]">
                      <div className="w-full cflexss">
                        <p className="font-[800]">Jacob Jones</p>
                        <p className="text-[#808080]">@jjones12</p>
                      </div>
                      <p>
                        Can I use my own art supplies, or do I need to purchase
                        the materials recommended in the course?
                      </p>
                      <p className="text-primary2 cursor-pointer">Answer</p>
                    </div>
                  </div>
                  <div className="cflexss gap-[1em]">
                    <p className="text-[#808080]">10 days ago</p>
                    <HeartOutline
                      color="#00AC76"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>

                <div className="flexbs w-full flex-wrap font-[400] text-[0.7rem]">
                  <div className="flexss gap-[1em]">
                    <div className="flexmm w-[5em]">
                      <Image
                        src="/kid2.svg"
                        width={100}
                        height={100}
                        alt="jacob jones"
                      />
                    </div>
                    <div className="w-full cflexss gap-[1em]">
                      <div className="w-full cflexss">
                        <p className="font-[800]">Annette Black</p>
                        <p className="text-[#808080]">@black.anne</p>
                      </div>
                      <p>
                        I'm not very confident in my artistic abilities. Will I
                        be able to keep up with the course?
                      </p>
                      <p className="text-primary2 cursor-pointer">Answer</p>
                    </div>
                  </div>
                  <div className="cflexss gap-[1em]">
                    <p className="text-[#808080]">2 days ago</p>
                    <HeartOutline
                      color="#00AC76"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flexmm">
                <div className="w-[60em] flex-shrink p-[2em] cflexms gap-[1em] bg-[#CCEEE4] rounded-[0.5em] font-[400] text-[0.7rem]">
                  <p className="text-primary2 font-[600]">Response</p>
                  <textarea
                    type="text"
                    name="response"
                    className="p-[1.5em] w-full rounded-[0.5em] outline-none resize-none"
                    placeholder="Type your response here..."
                  />
                  <div className="w-full flexem">
                    <button className="py-[1.5em] px-[2em] bg-primary2 text-white rounded-full">
                      Send response
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-full px-[5%] flexsm">
        <Recommended />
      </div>
    </>
  );
};

export default CourseVideo;
