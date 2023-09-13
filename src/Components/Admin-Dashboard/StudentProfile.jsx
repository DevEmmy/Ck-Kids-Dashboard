import { BsBadgeSd, BsFire, BsTrophy } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";

import {} from "react-icons/ri";
import { Graduate } from "next/font/google";

import { ChevronRight } from "heroicons-react";

const StudentProfile = ({ profile, setProfile, data }) => {
  return (
    <>
      <div
        className={`absolute top-0 z-25 w-[35.75rem] bg-[#FFF] text-[0.75rem] lg:text-[0.6rem] font-[400] border-l-[1px] border-b-[1px] text-[#808080] px-[20px] ${
          profile ? "right-0" : "right-[-100%]"
        } py-[30px] flex-shrink cflexss gap-[15px] transition-all duration-1000`}
      >
        <div
          className="p-[0.75em] flexmm border-[1px] rounded-[0.5rem] cursor-pointer"
          onClick={() => {
            setProfile(false);
          }}
        >
          <ChevronRight size="16px" />
        </div>
        <div className="w-full flexmm">
          <div className="cflexmm gap-[1.25em]">
            <div className="relative w-[9.375em] h-[9.375em] rounded-full">
              <img
                src={`/${data.avatar}.svg`}
                className="rounded-full"
                alt="profileAvatar"
              />
              <div className="absolute bottom-0 right-0 bg-primary2 w-[1.5625rem] h-[1.5625rem] border-[4px] border-white rounded-full" />
            </div>
            <div className="cflexmm gap-[0.25em]">
              <p className="font-[700] text-[1.25rem] lg:text-[1.1rem]">
                {data.name}
              </p>
              <p>@{data.username}</p>
              <p>{data.email}</p>
              <div className="border-[1px] py-[0.25rem] px-[0.625rem] flexmm rounded-[0.25rem]">
                {data.class}
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-[20px]">
              <div className="w-[252px] h-[130px] rounded-[0.75rem] p-[2px] pb-[8px] text-primary3 bg-primary3">
                <div className="bg-white rounded-t-[0.75rem] h-full rounded-b-[0.25rem] flexmm gap-[16px]">
                  <IoDiamondOutline size="2.5rem" />
                  <div className="cflexsm gap-[0.125rem]">
                    <p>Learning Gems</p>
                    <p className="font-marker text-[1.625rem] lg:text-[1.425rem] ls:text-[1.2rem]">
                      50,000 LG
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[252px] h-[130px] rounded-[12px] pb-[8px] text-white bg-[#A37414]">
                <div className="bg-primary1 w-full rounded-t-[12px] h-full pl-[20px] rounded-b-[0.25rem] cflexms gap-[8px]">
                  <div className="flexmm gap-[13px]">
                    <div className="p-[10px] rounded-[6.498px] text-primary1 bg-white">
                      <BsFire size="23px" />
                    </div>
                    <p className="font-[800] text-[40px] lg:text-[36px] ls:text-[30px]">
                      200
                    </p>
                  </div>
                  <p className="text-[#222] text-[16px] lg:text-[14px] ls:text-[12px]">
                    Day Streak
                  </p>
                </div>
              </div>
              <div className="w-[15.75rem] h-[8.125rem] rounded-[0.75rem] pb-[8px] text-white bg-[#00734F]">
                <div className="bg-primary2  w-full rounded-t-[12px] h-full pl-[20px] rounded-b-[0.25rem] cflexms gap-[8px]">
                  <div className="flexmm gap-[13px]">
                    <div className="p-[10px] rounded-[6.498px] text-primary2 bg-white">
                      <GiGraduateCap size="23px" />
                    </div>
                    <p className="font-[800] text-[40px] lg:text-[36px] ls:text-[30px]">
                      100
                    </p>
                  </div>
                  <p className="text-[#FFF] text-[16px] lg:text-[14px] ls:text-[12px]">
                    Completed Courses
                  </p>
                </div>
              </div>
              <div className="w-[15.75rem] h-[8.125rem] rounded-[0.75rem] pb-[8px] text-white bg-[#5E4589]">
                <div className="bg-primary3 rounded-t-[0.75rem] h-full rounded-b-[0.25rem] pl-[20px] flexsm gap-[13px]">
                  <div className="p-[10px] rounded-[6.498px] text-primary3 bg-white">
                    <BsTrophy size="23px" />
                  </div>
                  <div className="cflexmm">
                    <p className="text-[#FFF] text-[16px] lg:text-[14px] ls:text-[12px]">
                      Mastery Stages
                    </p>
                    <p className="font-[800] text-[26px] lg:text-[24px] ls:text-[20px]">
                      Innovator
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full cflexss gap-[20px] font-[600]">
              <p className="text-[20px] lg:text-[18px] ls:text-[16px] text-[#222]">
                All Achievement
              </p>
              <div className="grid grid-cols-4 w-full gap-[20px] text-[14px] lg:text-[12px]">
                <div className="w-full h-[130px] rounded-[8px] pb-[8px] text-white bg-[#00734F]">
                  <div className="bg-primary2 w-full pt-[10px] rounded-t-[8px] h-full cflexmm gap-[15px]">
                    <div className="flexmm w-[50px]">
                      <img src="/quizWhiz.svg" alt="quizwhiz" />
                    </div>
                    <p>Quiz Whiz</p>
                  </div>
                </div>
                <div className="w-full h-[130px] rounded-[8px] pb-[8px] text-white bg-[#A37414]">
                  <div className="bg-primary1 w-full pt-[10px] rounded-t-[8px] h-full cflexmm gap-[15px]">
                    <div className="flexmm w-[50px]">
                      <img src="/subjectHero.svg" alt="subjecthero" />
                    </div>
                    <p>Subject Hero</p>
                  </div>
                </div>
                <div className="w-full h-[130px] rounded-[8px] pb-[8px] text-white bg-[#00734F]">
                  <div className="bg-primary2 w-full pt-[10px] rounded-t-[8px] h-full cflexmm gap-[15px]">
                    <div className="flexmm w-[50px]">
                      <img src="/helpingHand.svg" alt="helpinghand" />
                    </div>
                    <p>Helping Hand</p>
                  </div>
                </div>
                <div className="w-full h-[130px] rounded-[8px] pb-[8px] text-white bg-[#5E4589]">
                  <div className="bg-primary3 w-full pt-[10px] rounded-t-[8px] h-full cflexmm gap-[15px]">
                    <div className="flexmm w-[50px]">
                      <img src="/champion.svg" alt="champion" />
                    </div>
                    <p>Champion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;