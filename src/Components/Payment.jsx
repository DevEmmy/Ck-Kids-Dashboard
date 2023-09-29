import { useState, useEffect } from "react";
import { ArrowLeftOutline, ChevronUpOutline } from "heroicons-react";

const Payment = ({ type, pay, setPay, amount, body }) => {
  return (
    <>
      <div className="flexmm w-full bg-[#FFF9D2] pt-[180px] sm:pt-[92px] px-xpadding text-[#808080] pb-[3em] text-[20px] lg:text-[18px] ls:text-[16px] font-[400]">
        <form className="px-[35px] py-[50px] w-[603px] flex-shrink rounded-[40px] sm:rounded-[25px] sm:px-[5%] bg-[#FFF] cflexss gap-[24px]">
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
          <div className="w-full flexbs">
            <div className="cflexss gap-[11px]">
              {type === "month" ? (
                <p>Monthly Payment</p>
              ) : (
                <p>Yearly Payment</p>
              )}
              <p className="font-[700] text-[#090914]">
                {type === "month" ? (
                  <>₦ {amount}</>
                ) : (
                  <>₦ {amount} x 12 months</>
                )}
              </p>
            </div>
            <div className="cflexss gap-[10px]">
              {body === 0 ? <p>/ One Student</p> : <p>/ Per Student</p>}
              <p className="font-[700] text-[#090914]">
                {type === "month" ? <>₦ {amount}</> : <>₦ {amount * 12}</>}
              </p>
            </div>
          </div>

          <div className="font-[700] text-[#090914] w-full flexsm gap-[20px]">
            <p>Do you have a promo code? </p>
            <ChevronUpOutline size="16px" />
          </div>

          {body === 1 && (
            <div className="cflexss gap-[11px] w-full">
              <p>Number of students</p>
              <div className="inputCont2">
                <input
                  className="input"
                  type="text"
                  name="noOfStudents"
                  placeholder="Number of students"
                  //   value={userDetails["email"]}
                  //   onChange={handleChange}
                />
              </div>
              {/* {emailError && (
                <p className="err">* Fill in a valid email address</p>
              )} */}
            </div>
          )}

          {type === "annum" && (
            <div className="w-full cflexss gap-[11px]">
              <p>Discount</p>
              <div className="flexbs w-full font-[700] text-[#090914] gap-[10px]">
                <p>3%</p>
                <p>₦ {body === 0 ? "" : ""}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Payment;
