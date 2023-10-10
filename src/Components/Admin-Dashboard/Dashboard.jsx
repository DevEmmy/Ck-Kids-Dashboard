"use client";

import { useState, useEffect } from "react";
import { FiGrid, FiBell, FiChevronDown } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import {
  ChevronDown,
  CogOutline,
  QuestionMarkCircleOutline,
  LogoutOutline,
  UsersOutline,
  ArrowLeftOutline,
} from "heroicons-react";
import { GiGraduateCap } from "react-icons/gi";
import Notification from "../Kids-Dashboard/Notification";

import Messages from "../Kids-Dashboard/Messages";
import Overview from "./Overview";
import Gamification from "./Gamification";
import Courses from "../Teachers-Dashboard/Courses";
import Schools from "./Schools";
import { getAdminDetails } from "@/services/request";

const Dashboard = () => {
  const [viewSchool, setViewSchool] = useState(false);
  const [viewStudents, setViewStudents] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [view, setView] = useState("Overview");
  const [mainView, setMainView] = useState("schools");
  const [mainData, setMainData] = useState([]);

  const getDetails = async () => {
    let data = await getAdminDetails();
    setMainData(data);  
  };

  useEffect(() => {
    getDetails();
  },[]);

  const Nav = [
    {
      name: "Overview",
      icon: <FiGrid size="16px" />,
    },
    {
      name: "Schools",
      icon: <UsersOutline size="16px" />,
    },
    {
      name: "Courses",
      icon: <GiGraduateCap size="16px" />,
    },
    {
      name: "Gamification",
      icon: <FiGrid size="16px" />,
    },
  ];

  const profMenuItems = [
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
      action: () => {
        localStorage.clear();
      },
    },
  ];

  const [profMenu, setProfMenu] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <>
      <div className="w-full flexss bg-[#F7F7F7]">
        <div className="w-1/5 pt-[61px] px-3 pb-[475px] border-r-[1px] border-b-[1px] cflexss gap-[37px] bg-white fixed top-0 left-0">
          <div className="w-[226px]">
            <img src="/logo.png" alt="curiouz-kidz-logo" />
          </div>
          <div className="w-full cflexss gap-[32px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
            {Nav.map((item, index) => {
              return (
                <>
                  <div
                    className="w-full px-[20px] flexbm cursor-pointer"
                    onClick={() => {
                      setView(item.name);
                      if (item.name !== "Schools") {
                        setViewSchool(false);
                        setViewStudents(false);
                        setMainView("schools");
                      }
                    }}
                    key={index}
                  >
                    <div
                      className={`flexmm gap-[10px] ${
                        view === item.name ? "text-primary2" : "text-[#808080]"
                      }`}
                    >
                      {item.icon}
                      <p>{item.name}</p>
                    </div>
                    <ChevronDown color="#808080" size={"0.8em"} />
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="w-4/5 fixed top-0 right-0 z-20">
          <div className="w-full p-4 font-[700] text-[28px] lg:text-[22px] ls:text-[18px] bg-white flexbs border-b-[1px]">
            {mainView === "teachers" && (
              <div
                className="flexss bg-sec1 rounded-[0.5em] p-[0.4em] cursor-pointer"
                onClick={() => {
                  setMainView("schools");
                  setViewSchool(false);
                }}
              >
                <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                  <ArrowLeftOutline size="12px" color="#00AC76" />
                </div>
              </div>
            )}
            {mainView === "students" && (
              <div
                className="flexss bg-sec1 rounded-[0.5em] p-[0.4em] cursor-pointer"
                onClick={() => {
                  setMainView("teachers");
                  setViewStudents(false);
                }}
              >
                <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                  <ArrowLeftOutline size="12px" color="#00AC76" />
                </div>
              </div>
            )}
            {view === "Overview" && <p>Curious Kid's Dashboard Overview</p>}
            {view === "Schools" && !viewSchool && (
              <p>Schools Data Management</p>
            )}
            {view === "Courses" && <p>Course Management</p>}
            {view === "Gamification" && <p>Gamification Management</p>}
            {view === "Schools" && viewSchool && !viewStudents && (
              <p>{schoolName} Teachers Data</p>
            )}
            {view === "Schools" && viewSchool && viewStudents && (
              <p>{schoolName} Students Data</p>
            )}

            <div className="flexsm gap-[20px]">
              <div
                className="cursor-pointer border rounded-[8px] p-[8px]"
                onClick={() => {
                  setNotification(true);
                }}
              >
                <FiBell />
              </div>

              <div
                className="relative flex gap-[7px] font-[600] items-center cursor-pointer text-[12px]"
                onClick={() => {
                  setProfMenu(!profMenu);
                }}
              >
                <img
                  src="/teacherAvatar.svg"
                  className="w-[32px] h-[32px] object-cover rounded-md"
                />
                <p>Savannah Nguyen</p>
                <FiChevronDown />
                {profMenu && (
                  <>
                    <div className="absolute cflexss gap-[0.5em] top-[4em] right-xPadding w-[14em] bg-white rounded-xl shadow-md border-2 p-[0.5em] z-50">
                      {profMenuItems.map((item, i) => {
                        return (
                          <>
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
                        );
                      })}
                    </div>
                  </>
                )}
                {notification && (
                  <Notification setNotification={setNotification} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="main__content absolute w-4/5 right-0 z-10 top-[70px]">
          {view === "Overview" && <Overview mainData={mainData}/>}

          {view === "Chat" && <Messages />}

          {view === "Schools" && (
            <Schools
              setViewSchool={setViewSchool}
              setSchoolName={setSchoolName}
              setViewStudents={setViewStudents}
              setMainView={setMainView}
              mainView={mainView}
            />
          )}

          {view === "Courses" && <Courses />}

          {view === "Gamification" && <Gamification />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
