import Overview from "./Overview";
import Messages from "./Messages";
import Students from "./Students";
import Gamification from "./Gamification";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import { FiGrid, FiBell, FiChevronDown } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import {
  ChevronDown,
  ChevronUp,
  UserCircleOutline,
  CogOutline,
  QuestionMarkCircleOutline,
  LogoutOutline,
  UsersOutline,
  ChatAlt,
} from "heroicons-react";
import { GiGraduateCap } from "react-icons/gi";
import Notification from "./Notification";


const Dashboard = ({teacher}) => {
  const [view, setView] = useState("Overview");

  
  const Nav = [
    {
      name: "Overview",
      icon: <FiGrid size="20" />,
    },
    {
      name: "Student",
      icon: <UsersOutline size="20" />,
    },
    {
      name: "Courses",
      icon: <GiGraduateCap size="20" />,
    },
    {
      name: "Chat",
      icon: <ChatAlt size="20" />,
    },
    {
      name: "Gamification",
      icon: <FiGrid size="20" />,
    },
    {
      name: "Leadership Board",
      icon: <BsTrophy size="20" />,
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
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <>
      {
        teacher &&
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
                    <ChevronDown color="#808080" size={"0.8em"}/>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="w-4/5 fixed top-0 right-0 z-20">
          <div className="w-full p-4 font-[700] text-[28px] lg:text-[22px] ls:text-[18px] bg-white flexbs border-b-[1px]">
            {view === "Overview" && <p>Teachers Dashboard Overview</p>}
            {view === "Student" && <p>Student Data Management</p>}
            {view === "Courses" && <p>Course Management</p>}
            {view === "Chat" && <p>Chat/Messaging</p>}
            {view === "Gamification" && <p>Gamification Management</p>}
            {view === "Leadership Board" && <p>Leadership Board</p>}
            <div className="flexsm gap-[20px]">
              <div
                className="cursor-pointer border rounded-[8px] p-[8px]"
                onClick={() => {
                  setNotification(!notification);
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
                  src={teacher.profilePicture}
                  className="w-[32px] h-[32px] object-cover rounded-md"
                />
                <p>{teacher.firstName + " " + teacher.lastName}</p>
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
          {view === "Overview" && <Overview teacher={teacher}/>}

          {view === "Student" && <Students />}

          {view === "Courses" && <Courses isTeacher={true}/>}

          {view === "Chat" && <Messages />}

          {view === "Gamification" && <Gamification />}
        </div>
        
      </div>
      }
    </>
  );
};

export default Dashboard;
