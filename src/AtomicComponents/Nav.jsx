import Image from "next/image";
import React, { useState } from "react";
import { FiArrowDown, FiBell, FiChevronDown, FiGrid } from "react-icons/fi";
import { BsChatSquareText } from "react-icons/bs";
import { GiChatBubble, GiGraduateCap, GiTrophy } from "react-icons/gi";
import {
  UserCircleOutline,
  CogOutline,
  QuestionMarkCircleOutline,
  LogoutOutline,
} from "heroicons-react";
import Link from "next/link";
import Profile from "./Profile";

const Nav = ({ active = 0, student }) => {
  const [profMenu, setProfMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const navItems = [
    {
      name: "Overview",
      icon: <FiGrid color="white" size={15} />,
      baseColor: "bg-[#F5AE1E]",
      color: "bg-[#FAD68E]",
      link: "/kids-dashboard",
    },
    {
      name: "Courses",
      icon: <GiGraduateCap color="white" size={15} />,
      baseColor: "bg-[#00AC76]",
      color: "bg-[#80D5BA]",
      link: "/kids-dashboard/courses",
    },
    {
      name: "Messages",
      icon: <BsChatSquareText color="white" size={15} />,
      baseColor: "bg-[#8D67CE]",
      color: "bg-[#C6B3E6]",
      link: "/kids-dashboard/messages",
    },
    {
      name: "Leadership",
      icon: <GiTrophy color="white" size={15} />,
      baseColor: "bg-[#FE5972]",
      color: "bg-[#FEACB8]",
      link: "/kids-dashboard/leadership-board",
    },
  ];

  const profMenuItems = [
    {
      name: "Profile",      
      // link: "/profile",
      icon: <UserCircleOutline color="black" size={20} />,
    },
    {
      name: "Settings",
      link: "/kids-dashboard-settings",
      icon: <CogOutline color="black" size={20} />,
    },
    {
      name: "Support",
      link: "/kids-dashboard/support",
      icon: <QuestionMarkCircleOutline color="black" size={20} />,
    },
    {
      name: "Log Out",
      link: "/signin",
      icon: <LogoutOutline color="black" size={20} />,
      action: ()=> {localStorage.clear()}
    },
  ];
  return (
    <div className="flex px-xPadding items-center justify-between mt-[10px] border-b-gray-300 border-b pb-[20px]">
      <img
        src="/logo.png"
        width={0}
        height={0}
        alt="logo"
        className="w-[20%] h-[auto]"
      />

      <div className="flexbm gap-[30px]">
        {navItems.map((item, index) => {
          return (
            <a key={index} href={item.link}>
              <div
                className={`flex items-center gap-[12px] py-[12px] px-[16px] rounded-[8px] cursor-pointer ${
                  active === index && item.color
                }`}
              >
                <span className={`p-[8px] rounded-[8px] ${item.baseColor}`}>
                  {item.icon}
                </span>
                <p className="text-[20px] lg:text-[18px] ls:text-[16px] font-[400]">{item.name}</p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-[20px]">
        <div className="cursor-pointer border rounded-[8px] p-[8px]">
          <FiBell />
        </div>

        <div
          className="relative flex gap-[7px] font-[600] items-center cursor-pointer text-[12px]"
          onClick={() => {
            setProfMenu(!profMenu);
          }}
        >
          <img
            src={student?.profilePicture}
            className="w-[32px] h-[32px] object-cover rounded-md"
          />
          <p>{student?.fullName}</p>
          <FiChevronDown />
          {profMenu && (
            <>
              <div className="absolute cflexss gap-[0.5em] top-[4em] right-xPadding w-[14em] bg-white rounded-xl shadow-md border-2 p-[0.5em] z-50">
                {profMenuItems.map((item, i) => {
                  return (
                    <>
                      {item.name === "Profile" ? (
                        <>
                          <div
                            className="flex w-full items-center gap-[1em] p-[10px] rounded-lg hover:bg-primary2 cursor-pointer hover:text-white transition-all duration-500"
                            onClick={() => {
                              if (item.name === "Profile") {
                                setProfile(true);
                              }
                            }}
                          >
                            <span className={`flexmm`}>{item.icon}</span>
                            <p className="text-[0.9em]">{item.name}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <a href={item.link} className="w-full"  onClick={item.action && item.action}>
                            <div className="flex w-full items-center gap-[1em] p-[10px] rounded-lg hover:bg-primary2 cursor-pointer hover:text-white transition-all duration-500">
                              <span className={`flexmm`}>{item.icon}</span>
                              <p className="text-[0.9em]">{item.name}</p>
                            </div>
                          </a>
                        </>
                      )}
                    </>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      {profile && <Profile setProfile={setProfile} />}
    </div>
  );
};

export default Nav;
