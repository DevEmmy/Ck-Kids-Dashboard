import { useState, useEffect } from "react";
import { ArrowLeftOutline } from "heroicons-react";

const Payment = ({ type, pay, setPay, body }) => {
  return (
    <>
      <div className="flexmm w-full bg-[#FFF9D2] pt-[180px] sm:pt-[92px] px-xpadding text-[#808080] pb-[3em] text-[20px] lg:text-[18px] ls:text-[16px] font-[400]">
        <div className="px-[35px] py-[50px] w-[603px] flex-shrink rounded-[40px] sm:rounded-[25px] sm:px-[5%] bg-[#FFF] cflexss gap-[24px]">
          <div
            className="flexss bg-sec1 rounded-[0.5em] p-[0.4em] cursor-pointer"
            onClick={() => {
              setPay(false);
            }}
          >
            <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
              <ArrowLeftOutline size="12px" color="#00AC76" />
            </div>
          </div>
          <div className="cflexss gap-[11px]">
            <p>Student Name</p>
            <p className="text-[28px] lg:text-[24px] text-[#090914] ls:text-[20px] font-[700]">
              Annette Black
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
