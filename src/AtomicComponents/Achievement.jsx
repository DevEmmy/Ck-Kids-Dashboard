import React from "react";
import { IoDiamondOutline } from "react-icons/io5";

const Achievement = ({missions}) => {  
  return (
    <div className="w-full">
      <div className="mt-10">        
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
                      className={` h-3 bg-primary4 rounded-tl-3xl rounded-bl-3xl`}
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

export default Achievement;
