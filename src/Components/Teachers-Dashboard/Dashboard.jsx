import Overview from "./Overview";
import { FiGrid } from "react-icons/fi";
import { ChevronDown, ChevronUp } from "heroicons-react";
const Dashboard = () => {
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
  return (
    <>
      <div className="w-full flexss">
        <div className="w-[20%] pt-[61px] px-[25px] pb-[475px] border-r-[1px] cflexss gap-[37px] bg-white">
          <div className="w-[226px]">
            <img src="/logo.png" alt="curiouz-kidz-logo" />
          </div>
          <div className="w-full cflexss gap-[32px] font-[400] text-[20px]">
            {Nav.map((item, index) => {
              return (
                <>
                  <div className="w-full px-[20px] py-[12px] flexbm cursor-pointer">
                    <div className="flexmm gap-[10px]">
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

        <div className="w-[80%]">
            <div className="w-full p-[37px] bg-white flexbs">

            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
