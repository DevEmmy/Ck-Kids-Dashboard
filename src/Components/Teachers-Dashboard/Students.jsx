import {
  SearchOutline,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "heroicons-react";
import { useState } from "react";
import { BsBadgeSd, BsFire, BsTrophy } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";

import {} from "react-icons/ri";
import { Graduate } from "next/font/google";

const Students = () => {
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState({});
  const StudentData = [
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: true,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
    {
      checked: false,
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      email: "emekaeze@gmail.com",
      username: "emekaeze",
      dateJoined: "20/10/2023",
      class: "JSS 1D",
    },
  ];
  return (
    <>
      <div className="relative w-full p-[30px] cflexss gap-[28px]">
        {profile && (
          <StudentProfile
            profile={profile}
            setProfile={setProfile}
            data={data}
          />
        )}
        <div className="w-full flexes">
          <div className="flexmm gap-[10px] rounded-[8px] border-[1px] p-[16px] w-[526px] bg-white">
            <SearchOutline size="16px" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border-none outline-none"
            />
          </div>
        </div>
        <div className="w-full font-[400] text-[17px] lg:text-[15px] py-[20px] border-[1px] ls:text-[13px] rounded-[24px] text-[#808080] shadow-md bg-[#FFF]">
          <div className="w-full flexsm py-[10px] px-[20px] border-b-[1px]">
            <div className="w-[9%] flexsm gap-[15px]">
              <input type="checkbox" />
              <p>Avatar</p>
            </div>
            <div className="w-[14%] flexsm gap-[10px]">
              <p>Name</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </div>
            <div className="w-[20%] flexsm">Email</div>
            <div className="w-[14%] flexsm">Username</div>
            <div className="w-[14%] flexsm">Date Joined</div>
            <div className="w-[14%] flexsm">Class</div>
            <div className="w-[14%] flexsm">Actions</div>
          </div>
          {StudentData.map((data, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`w-full flexsm py-[10px] px-[20px] cursor-pointer ${
                    (index + 1) % 2 === 0 ? "bg-[#F7F7F7]" : "bg-white"
                  }`}
                  onClick={() => {
                    setProfile(true);
                    setData(data);
                  }}
                >
                  <div className="w-[9%] flexsm gap-[15px]">
                    <input type="checkbox" checked={data.checked} />
                    <div className="flexmm w-[24px]">
                      <img src={`/${data.avatar}.svg`} alt="avatar" />
                    </div>
                  </div>
                  <div className="w-[14%] flexsm">{data.name}</div>
                  <div className="w-[20%] flexsm">{data.email}</div>
                  <div className="w-[14%] flexsm">@{data.username}</div>
                  <div className="w-[14%] flexsm">{data.dateJoined}</div>
                  <div className="w-[14%] flexsm">{data.class}</div>
                  <div className="w-[14%] flexsm">Actions</div>
                </div>
              </>
            );
          })}
          <br />
          <div className="w-full text-[14px] lg:text-[12px] px-[20px] pt-[20px] border-t-[1px] flexbm">
            <div className="flexmm gap-[8px] cursor-pointer">
              <ArrowLeft size="16px" />
              <p>Previous</p>
            </div>
            <div className="flexmm gap-[8px] cursor-pointer">
              <p>Next</p>
              <ArrowRight size="16px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;

const StudentProfile = ({ profile, setProfile, data }) => {
  return (
    <>
      <div
        className={`absolute top-0 z-50 w-[35.75rem] bg-[#FFF] text-[0.75rem] lg:text-[0.6rem] font-[400] border-l-[1px] border-b-[1px] text-[#808080] px-[20px] ${
          profile ? "right-0" : "right-[-100%]"
        } py-[30px] flex-shrink cflexss gap-[15px] transition-all duration-500`}
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
            <div className="w-[9.375em] h-[9.375em] rounded-full">
              <img
                src={`/${data.avatar}.svg`}
                className="rounded-full"
                alt="profileAvatar"
              />
            </div>
            <div className="cflexmm gap-[0.25em]">
              <p className="font-[700] text-[1.25rem] lg:text-[1.1rem]">{data.name}</p>
              <p>@{data.username}</p>
              <p>{data.email}</p>
              <div className="border-[1px] py-[0.25rem] px-[0.625rem] flexmm rounded-[0.25rem]">
                {data.class}
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-[20px]">
              <div className="w-[15.75rem] h-[8.125rem] rounded-[0.75rem] p-[2px] pb-[8px] text-primary3 bg-primary3">
                <div className="bg-white rounded-t-[0.75rem] h-full rounded-b-[0.25rem] flexmm gap-[16px]">
                  <IoDiamondOutline size="2.5rem" />
                  <div className="cflexsm gap-[0.125rem]">
                    <p>Learning Gems</p>
                    <p className="font-marker text-[1.625rem] lg:text-[1.425rem] ls:text-[1.2rem]">50,000 LG</p>
                  </div>
                </div>
              </div>
              <div className="w-[15.75rem] h-[8.125rem] rounded-[0.75rem] p-[2px] pb-[8px] text-white bg-[#A37414]">
                <div className="bg-primary1 rounded-t-[0.75rem] h-full rounded-b-[0.25rem] flexmm gap-[16px]">
                  <BsFire size="1.4375rem" />
                  <div className="cflexsm gap-[0.125rem]">
                    <p>Learning Gems</p>
                    <p className="font-marker text-[1.625rem] lg:text-[1.425rem] ls:text-[1.2rem]">50,000 LG</p>
                  </div>
                </div>
              </div>
              <div className="w-[15.75rem] h-[8.125rem] rounded-[0.75rem] p-[2px] pb-[8px] text-white bg-[#00734F]">
                <div className="bg-primary2 rounded-t-[0.75rem] h-full rounded-b-[0.25rem] flexmm gap-[16px]">
                  <GiGraduateCap size="1.4375rem" />
                  <div className="cflexsm gap-[0.125rem]">
                    <p>Learning Gems</p>
                    <p className="font-marker text-[1.625rem] lg:text-[1.425rem] ls:text-[1.2rem]">50,000 LG</p>
                  </div>
                </div>
              </div>
              <div className="w-[15.75rem] h-[8.125rem] rounded-[0.75rem] p-[2px] pb-[8px] text-white bg-[#5E4589]">
                <div className="bg-primary3 rounded-t-[0.75rem] h-full rounded-b-[0.25rem] flexmm gap-[16px]">
                  <BsTrophy size="1.4375rem" />
                  <div className="cflexsm gap-[0.125rem]">
                    <p>Learning Gems</p>
                    <p className="font-marker text-[1.625rem] lg:text-[1.425rem] ls:text-[1.2rem]">50,000 LG</p>
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
