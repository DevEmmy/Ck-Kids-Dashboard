import Image from "next/image";
import React, { useState } from "react";
import { FiArrowDown, FiBell, FiChevronDown, FiGrid } from "react-icons/fi";
import { BsChatSquareText } from "react-icons/bs";
import { GiChatBubble, GiGraduateCap, GiTrophy } from "react-icons/gi";
import { RiMenuFill } from "react-icons/ri";
import {
  UserCircleOutline,
  CogOutline,
  QuestionMarkCircleOutline,
  LogoutOutline,
  X,
  SearchOutline,
} from "heroicons-react";
import Profile from "./Profile";
import Notification from "@/Components/Notification";
import { logOutStudents } from "@/redux/features/register/registerSlice";
import { useDispatch } from "react-redux";

const Nav = ({ active = 0, student }) => {
  const dispatch = useDispatch();
  const [profMenu, setProfMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      name: "Overview",
      icon: <FiGrid color="white" size="16px" />,
      baseColor: "bg-[#F5AE1E]",
      color: "bg-[#FAD68E]",
      link: "/kids-dashboard",
    },
    {
      name: "Courses",
      icon: <GiGraduateCap color="white" size="16px" />,
      baseColor: "bg-[#00AC76]",
      color: "bg-[#80D5BA]",
      link: "/kids-dashboard/courses",
    },
    {
      name: "Messages",
      icon: <BsChatSquareText color="white" size="16px" />,
      baseColor: "bg-[#8D67CE]",
      color: "bg-[#C6B3E6]",
      link: "/kids-dashboard/messages",
    },
    {
      name: "Leadership",
      icon: <GiTrophy color="white" size="16px" />,
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
      name: "Support",
      link: "/kids-dashboard/support",
      icon: <QuestionMarkCircleOutline color="black" size={20} />,
    },
    {
      name: "Log Out",
      link: "/signin",
      icon: <LogoutOutline color="black" size={20} />,
      action: () => {
        dispatch(logOutStudents());
      },
    },
  ];
  return (
    <div className="fixed w-full z-50 top-0 left-0 flex font-sans px-xPadding py-[20px] bg-white items-center justify-between border-b-gray-300 border-b pb-[20px]">
      <img
        src="/logo.png"
        width={0}
        height={0}
        alt="logo"
        className="w-[20%] md:w-[141px] h-[auto]"
      />

      {menu && (
        <div className="fixed w-full top-[80px] z-50 px-[20px] left-0">
          <div className="w-full bg-white border py-[17px] px-[20px] flexbm gap-[29px] rounded-[8px] shadow-md">
            {navItems.map((item, index) => {
              return (
                <a key={index} href={item.link}>
                  <div className={`p-[8px] cflexmm gap-[4px]`}>
                    <span className={`${item.baseColor}`}>{item.icon}</span>
                    <p className="text-[8px] font-[600]">{item.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className="block lf:hidden flexbm gap-[30px]">
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
                <p className="text-[20px] lg:text-[18px] ls:text-[16px] font-[400]">
                  {item.name}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-[20px]">
        {active === 1 && (
          <div className="hidden lf:block">
            <SearchOutline size="16px" />
          </div>
        )}

        <div className="block lf:hidden relative flexsm gap-[7px] font-[600] text-[12px]">
          <div
            className="cursor-pointer border lf:border-none rounded-[8px] p-[8px]"
            onClick={() => {
              setNotification(true);
            }}
          >
            <FiBell />
          </div>

          {notification && <Notification setNotification={setNotification} />}
        </div>

        <div
          className="hidden lf:block"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? (
            <X size="25px" className="cursor-pointer" />
          ) : (
            <RiMenuFill size="25px" className="cursor-pointer" />
          )}
        </div>

        <div
          className="block lf:hidden relative flexsm gap-[7px] font-[600] cursor-pointer text-[12px]"
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
              <div className="absolute z-[999] cflexss gap-[0.5em] top-[4em] right-xPadding w-[14em] bg-white rounded-xl shadow-md border-2 p-[0.5em]">
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
                          <a
                            href={item.link}
                            className="w-full"
                            onClick={item.action && item.action}
                          >
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
      {profile && <Profile setProfile={setProfile} student={student} />}
    </div>
  );
};

export default Nav;
