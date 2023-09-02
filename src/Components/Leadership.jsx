import Nav from "@/AtomicComponents/Nav";
import { useState } from "react";
import Image from "next/image";
import LeaderBoardOverview from "@/AtomicComponents/LeaderBoardOverview";
import Achievement from "@/AtomicComponents/Achievement";
import { Mission1, Mission2, Mission3 } from "./AchievementData";

const Leadership = () => {
  const [level, setLevel] = useState(3);
  const MasteryLevel = [
    {
      img1: "/masteryLevel/fmst1.png",
      img2: "/masteryLevel/mst1.png",
      level: 1,
      title: "trophy1",
    },
    {
      img1: "/masteryLevel/mst2.png",
      img2: "/masteryLevel/mst2.png",
      level: 2,
      title: "trophy2",
    },
    {
      img1: "/masteryLevel/mst3.png",
      img2: "/masteryLevel/mst3.png",
      level: 3,
      title: "Adventurer",
    },
    {
      img1: "/masteryLevel/fmst4.png",
      img2: "/masteryLevel/mst4.svg",
      level: 4,
      title: "trophy4",
    },
    {
      img1: "/masteryLevel/fmst5.png",
      img2: "/masteryLevel/mst5.svg",
      level: 5,
      title: "trophy5",
    },
    {
      img1: "/masteryLevel/fmst6.png",
      img2: "/masteryLevel/mst6.svg",
      level: 6,
      title: "trophy6",
    },
    {
      img1: "/masteryLevel/fmst7.png",
      img2: "/masteryLevel/mst7.svg",
      level: 7,
      title: "trophy7",
    },
    {
      img1: "/masteryLevel/fmst8.png",
      img2: "/masteryLevel/mst8.svg",
      level: 8,
      title: "trophy8",
    },
  ];
  return (
    <>
      <Nav active={3} />
      <div className="w-full cflexss px-[5%] py-[2em] gap-[2em]">
        <div className="w-full cflexss gap-[20px] text-[20px] lg:text-[18px] ls:text-[16px] font-[600]">
          <p>Mastery Stage</p>
          <div className="flexmm pt-[0.1em] pr-[0.1em] pl-[0.1em] pb-[0.4em] w-full h-[15em] bg-primary2 rounded-xl">
            <div className="flexbm w-full bg-white rounded-xl h-full py-[1em] px-[5%] sm:overflow-x-auto">
              {MasteryLevel.map((item) => {
                return (
                  <>
                    <div
                      className={`relative cflexmm gap-[0.5em] ${
                        level === item.level ? "w-[5em]" : "w-[4em]"
                      }`}
                    >
                      <Image
                        src={level >= item.level ? item.img2 : item.img1}
                        alt={item.level}
                        width={100}
                        height={100}
                      />
                      {item.level === level && (
                        <p className="text-primary4">{item.title}</p>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <LeaderBoardOverview />

        <div className="w-full cflexss gap-[1em]">
          <p>ALL ACHIEVEMENTS</p>
          <div className="w-full flexss gap-[2em]">
            <div className="flexmm w-[25em]">
              <Achievement missions={Mission1} />
            </div>
            <div className="flexmm w-[25em]">
              <Achievement missions={Mission2} />
            </div>
            <div className="flexmm w-[25em]">
              <Achievement missions={Mission3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
