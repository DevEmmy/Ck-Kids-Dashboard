import React from "react";

const CourseCard = ({ background, image, text }) => {
  return (
    <>
      <div
        className="cflexss gap-[2vw] md1:gap-[23px] pt-[1.8vw] w-[17%] md1:w-[42vw] pb-[2vw] md1:h-[180px] min-h-[14vw] px-[33px] sm:p-[2em] md1:rounded-[24px] rounded-[40px] cursor-pointer"
        style={{ background }}
      >
        <div className="flexmm w-[50px] sm:w-[32px]">
          <img src={`${image}.svg`} alt={`${image}`} />
        </div>
        <p className="font-[700] text-[24px] lg:text-[20px] ls:text-[17px] text-sec2">
          {text}
        </p>
      </div>
    </>
  );
};

export default CourseCard;
