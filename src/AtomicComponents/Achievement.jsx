import React from "react";
import { IoDiamondOutline } from "react-icons/io5";

const Achievement = ({missions}) => {  
  return (
    <div className="w-full">
      <div className="flexmm">        
        <div className="border rounded-[24px] pt-[32px] px-[24px] pb-[74px] flex flex-col gap-3">
          {missions.map((mission, i) => {
            return (
              <div>
                <p className="text-gray-500 text-[17px] font-[700]">
                  {mission.name}
                </p>
                <p className="text-gray-500 text-[14px] font-[400]">
                  {mission.description}
                </p>
                <div className="flex gap-2 items-center">
                  <div className="w-full h-[21px] bg-gray-200 rounded-3xl">
                    <div
                      style={{
                        width: (mission.value / mission.max) * 100 + 2 + "%",
                      }}
                      className={` h-[21px] bg-primary4 rounded-tl-3xl rounded-bl-3xl`}
                    ></div>
                  </div>
                  <p className="text-[17px] font-[700]">
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
