import React from "react";
import Image from "next/image";

const CourseCard = ({ background, image, text }) => {
  return (
    <>
      <div
        className="cflexss gap-[2em] w-[14em] lg:w-[12em] h-[14em] lg:h-[12em] p-[2.5em] sm:w-[13em] sm:h-[13em] sm:p-[2em] rounded-[2em] cursor-pointer"
        style={{ background }}
      >
        <div className="flexmm w-[3em]">
          <img
            src={`${image}.svg`}           
            alt={`${image}`}
          />
        </div>
        <p className="font-[700] text-[24px] lg:text-[20px] ls:text-[17px] text-sec2">{text}</p>
      </div>
    </>
  );
};

export default CourseCard;
