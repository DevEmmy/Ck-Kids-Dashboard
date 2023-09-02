import React from "react";
import { IoDiamondOutline } from "react-icons/io5";

const GemView = ({student}) => {
  const missions = [
    {
      name: "Super Video Watcher",
      description: "Unlock this trophy by watching 10 awesome videos",
      max: 10,
      value: 5,
    },
    {
      name: "Quiz Whiz",
      description:
        "You're on fire! Earn the Quiz Whiz badge by acing 5 quizzes. You're a true mastermind!",
      max: 5,
      value: 2,
    },
    {
      name: "Course Champion",
      description:
        "You've conquered courses like a true champion! Collect this badge as a reward for completing 20 courses.",
      max: 20,
      value: 2,
    },
    {
      name: "Helping Hand",
      description:
        "You're a star in the community! The Helping Hand badge is yours for being an active friend, sharing knowledge, and brightening up discussions.",
      max: 1,
      value: 0,
    },
  ];
  return (
    <div className="sticky top-0 right-0 w-full">
      <div className="balance flex items-center border rounded-3xl gap-2 h-48 justify-center">
        <IoDiamondOutline size={50} className="text-primary3" />
        <div className="font-[600] text-[19px] lg:text-[17px] ls:text-[15px]">
          <p>Learning Gems</p>

          <h2 className="text-[48px] lg:text-[40px] ls:text-[38px] font-[900]">{student.gem} LG</h2>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between mb-2 text-[24px] lg:text-[20px] ls:text-[18px] font-[400]">
          <p>CURIOUSITY MISSION</p>
          <p className="text-gray-500 text-[20px] lg:text-[18px] ls:text-[16px]">View all</p>
        </div>

        <div className="border rounded-2xl p-3 flex flex-col gap-3">
          {missions.map((mission, i) => {
            return (
              <div>
                <p className="text-gray-500 text-[1em] font-[700]">
                  {mission.name}
                </p>
                <p className="text-gray-500 text-[0.8em]">
                  {mission.description}
                </p>
                <div className="flex gap-2 items-center">
                  <div className="w-full h-3 bg-gray-200 rounded-3xl">
                    <div
                      style={{
                        width: (mission.value / mission.max) * 100 + 2 + "%",
                      }}
                      className={` h-3 bg-primary3 rounded-tl-3xl rounded-bl-3xl`}
                    ></div>
                  </div>
                  <p className="text-[0.8em] font-[600]">
                    {mission.value}/{mission.max}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GemView;
