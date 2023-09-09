import Overview from "./Overview";
import { useState, useEffect } from "react";
import { FiGrid, FiBell, FiChevronDown } from "react-icons/fi";
import {
  ChevronDown,
  ChevronUp,
  UserCircleOutline,
  CogOutline,
  QuestionMarkCircleOutline,
  LogoutOutline,
} from "heroicons-react";
import Notification from "./Notification";
const Dashboard = () => {
  const [view, setView] = useState("Overview")
  const Nav = [
    {
      name: "Overview",
      icon: <FiGrid size="16px" />,
    },
    {
      name: "Student",
      icon: <FiGrid size="16px" />,
    },
    {
      name: "Courses",
      icon: <FiGrid size="16px" />,
    },
    {
      name: "Chat",
      icon: <FiGrid size="16px" />,
    },
    {
      name: "Gamification",
      icon: <FiGrid size="16px" />,
    },
    {
      name: "Leadership Board",
      icon: <FiGrid size="16px" />,
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
      <div className="w-full flexss">
        <div className="w-[23vw] pt-[61px] px-[25px] pb-[475px] border-r-[1px] border-b-[1px] cflexss gap-[37px] bg-white">
          <div className="w-[226px]">
            <img src="/logo.png" alt="curiouz-kidz-logo" />
          </div>
          <div className="w-full cflexss gap-[32px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
            {Nav.map((item, index) => {
              return (
                <>
                  <div className="w-full px-[20px] py-[12px] flexbm cursor-pointer" onClick={()=>{
                    setView(item.name)
                  }}>
                    <div className={`flexmm gap-[10px] ${view === item.name ? "text-primary2" : "text-[#808080]" }`}>
                      {item.icon}
                      <p>{item.name}</p>
                    </div>
                    <ChevronDown />
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="w-[77vw]">
          <div className="w-full p-[30px] font-[700] text-[28px] lg:text-[22px] ls:text-[18px] bg-white flexbs border-b-[1px]">
            <p>Teachers Dashboard Overview</p>
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
                                    <span className={`flexmm`}>
                                      {item.icon}
                                    </span>
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
                {notification && (
                  <Notification setNotification={setNotification} />
                )}
              </div>
            </div>
          </div>

          {
            view === "Overview" && <Overview />
          }

        </div>
      </div>
    </>
  );
};

export default Dashboard;
