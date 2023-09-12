import { ChevronUp, ChevronDown, Users, ChevronRight } from "heroicons-react";
import { useState } from "react";

const Overview = () => {
  const [drop, setDrop] = useState(false);
  const TopStudents = [
    {
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      gem: "77,080",
    },
    {
      avatar: "teacherAvatar",
      name: "Ngozi Onyeka",
      gem: "60,000",
    },
    {
      avatar: "teacherAvatar",
      name: "Idris Adebayo",
      gem: "59,000",
    },
    {
      avatar: "teacherAvatar",
      name: "Aisha Abdullahi",
      gem: "40,509",
    },
    {
      avatar: "teacherAvatar",
      name: "Babatunde Adeolu",
      gem: "30,240",
    },
    {
      avatar: "teacherAvatar",
      name: "Emeka Eze",
      gem: "10,300",
    },
  ];

  const StudentActivities = [
    {
      medal: "gold",
      title: "Won 1st place in Js2 B",
      content: "Cameron Williamson won first place in Js2B Leadership board",
      time: "2 days ago",
    },
    {
      medal: "award",
      title: "Won a new badge",
      content: "Olufemi Akinwande won a new badge",
      time: "20 hours ago",
    },
    {
      medal: "gem",
      title: "Learning gem",
      content: "Chinwe Eze won 500 new learning gems",
      time: "2 hours ago",
    },
    {
      medal: "award",
      title: "Won a new badge",
      content: "Robert Fox won won a new badge",
      time: "20 mins ago",
    },
  ];

  const Class = [
    {
      class: "JSS 1D",
    },
    {
      class: "JSS 1E",
    },
    {
      class: "JSS 1E",
    },
    {
      class: "JSS 1E",
    },
    {
      class: "JSS 1E",
    },
  ];
  return (
    <>
      <div className="w-full cflexss font-[700] gap-[37px] text-[24px] lg:text-[20px] ls:text-[18px] bg-[#F7F7F7] h-full p-[30px]">

        <div className="w-full flexbm">
          <p className="text-gray-400">Welcome, Savannah Nguyen</p>
          <div className="flexmm gap-[28px]">
            <div
              className="relative text-[#808080] font-[400] text-[20px] lg:text-[18px] ls:text-[14px] rounded-[10px] p-[12px] gap-[10px] flexmm bg-white cursor-pointer"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <p>Class</p>
              {drop ? <ChevronUp size={"18px"}/> : <ChevronDown size={"18px"}/>}
              {drop && (
                <div className="absolute top-[60px] w-[270px] text-[14px] font-[400] left-0 z-25 border-[1px] shadow-md py-[8px] px-[4px] rounded-[12px] bg-white cflexss">
                  {Class.map((items, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          className="flexbm w-full px-[16px] py-[12px] rounded-xl hover:bg-primary2 hover:text-white transition-all duration-400"
                        >
                          <p>{items.class}</p>
                          <ChevronRight />
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="bg-divansparent text-[20px] lg:text-[18px] ls:text-[14px] font-[400] text-[#808080] flexmm gap-[4px]">
              <div className="p-[12px] rounded-l-[8px] bg-primary2  cursor-pointer text-white">
                <p>Today</p>
              </div>
              <div className="p-[12px] bg-white cursor-pointer">
                <p>Weeks</p>
              </div>
              <div className="p-[12px] bg-white cursor-pointer">
                <p>Months</p>
              </div>
              <div className="p-[12px] bg-white cursor-pointer">
                <p>Years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 w-full gap-[16px]">

          {/* <div className="w-full pl-[32px] py-[40px] lg:py-[35px] ls:py-[30px] bg-primary1 text-white flexsm gap-[24px] rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-[20px]">
              <Users size="32px" color="#F5AE1E" />
            </div>
            <div className="cflexss">
              <p className="text-[64px] lg:text-[58px] ls:text-[42px] font-[800]">
                25
              </p>
              <p className="text-[24px] lg:text-[20px] ls:text-[19px] font-[400]">
                Total Students
              </p>
            </div>
          </div>
          <div className="w-full pl-[32px] py-[40px] lg:py-[35px] ls:py-[30px] bg-primary2 text-white flexsm gap-[24px] rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-[20px]">
              <Users size="32px" color="#00AC76" />
            </div>
            <div className="cflexss">
              <p className="text-[64px] lg:text-[58px] ls:text-[42px] font-[800]">
                25
              </p>
              <p className="text-[24px] lg:text-[20px] ls:text-[19px] font-[400]">
                Total Visit
              </p>
            </div>
          </div>
          <div className="w-full pl-[32px] py-[40px] lg:py-[35px] ls:py-[30px] bg-primary3 text-white flexsm gap-[24px] rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-[20px]">
              <Users size="32px" color="#8D67CE" />
            </div>
            <div className="cflexss">
              <p className="text-[64px] lg:text-[58px] ls:text-[42px] font-[800]">
                25
              </p>
              <p className="text-[24px] lg:text-[20px] ls:text-[19px] font-[400]">
                Total Students Online
              </p>
            </div>
          </div> */}

<div className="w-full pl-[32px] py-[40px] lg:py-[35px] items-center ls:py-[50px] bg-primary1 text-white flexsm gap-4 rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-4">
              <Users size="26px" color="#F5AE1E" />
            </div>
            <div className="cflexss leading-8">
              <p className="text-[64px] lg:text-[58px] ls:text-[48px] font-[800]">
                25
              </p>
              <p className="text-[24px] lg:text-[20px] ls:text-[19px] font-[400]">
                Total Classes
              </p>
            </div>
          </div>

          <div className="w-full pl-[32px] py-[40px] lg:py-[35px] items-center ls:py-[50px] bg-primary2 text-white flexsm gap-4 rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-4">
              <Users size="26px" color="#00AC76" />
            </div>
            <div className="cflexss leading-8">
              <p className="text-[64px] lg:text-[58px] ls:text-[48px] font-[800]">
                25
              </p>
              <p className="text-[24px] lg:text-[20px] ls:text-[19px] font-[400]">
                Total Students
              </p>
            </div>
          </div>

          <div className="w-full pl-[32px] py-[40px] lg:py-[35px] items-center ls:py-[50px] bg-primary3 text-white flexsm gap-4 rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-4">
              <Users size="26px" color="#8D67CE" />
            </div>
            <div className="cflexss leading-8">
              <p className="text-[64px] lg:text-[58px] ls:text-[48px] font-[800]">
                25
              </p>
              <p className="text-[24px] lg:text-[20px] ls:text-[19px] font-[400]">
                Total Students Visit
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flexbs gap-[20px]">
          <div className="w-[469px] border-[1px] rounded-[24px] py-[40px] px-[25px] bg-white flex-shrink">
            <p>Student by Gender</p>
          </div>
          <div className="w-[809px] border-[1px] rounded-[24px] py-[40px] px-[25px] bg-white flex-shrink">
            <p>Total Attendance Report</p>
          </div>
        </div>

        <div className="w-full flexbs gap-[20px]">
          <div className="w-[639px] border-[1px] rounded-[24px] py-[40px] px-[25px] bg-white flex-shrink">
            <div className="flexsm p-[12px] gap-[10px] rounded-[8px]">
              <p>Student Sdiveak</p>
              <ChevronDown size="16px" />
            </div>
          </div>
          <div className="w-[639px] border-[1px] rounded-[24px] py-[40px] px-[25px] bg-white flex-shrink">
            <div className="flexsm p-[12px] gap-[10px] rounded-[8px]">
              <p>Total watched videos</p>
              <ChevronDown size="16px" />
            </div>
          </div>
        </div>

        <div className="w-full flexbs gap-[20px]">
          <div className="cflexss gap-[10px] h-[532px] w-[419px] border-[1px] rounded-[24px] py-[40px] px-[32px] bg-white flex-shrink">
            <div className="flexsm p-[12px] gap-[10px] rounded-[8px]">
              <p>Top Student</p>
              <ChevronDown size="16px" />
            </div>
            <div className="w-full cflexbs text-[17px] lg:text-[15px] ls:text-[13px] font-[400] gap-[20px]">
              <div className="w-full pl-[40px] py-[13px] flexbm text-[16px] lg:text-[14px] ls:text-[12px] font-[600]">
                <p>Name</p>
                <p>Learning Gem</p>
              </div>
              {TopStudents.map((student, index) => {
                return (
                  <>
                    <div key={index} className="w-full flexbm">
                      <div className="flexmm gap-[24px]">
                        <p>{index + 1}</p>
                        <div className="text-[#808080] flexmm gap-[8px]">
                          <div className="w-[24px] h-[24px] flexmm">
                            <img src={`/${student.avatar}.svg`} alt="avatar" />
                          </div>
                          <p>{student.name}</p>
                        </div>
                      </div>
                      <p className="text-[16px] lg:text-[14px] ls:text-[12px]">
                        {student.gem}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="cflexss gap-[16px] w-[859px] h-[532px] border-[1px] rounded-[24px] py-[40px] px-[25px] bg-white flex-shrink">
            <div className="flexsm p-[12px] gap-[10px] rounded-[8px]">
              <p>Student Activities</p>
              <ChevronDown size="16px" />
            </div>
            <div className="w-full cflexss gap-[12px]">
              {StudentActivities.map((activity) => {
                return (
                  <>
                    <div className="w-full py-[10px] flexbm text-[16px] lg:text-[14px] ls:text-[12px] font-[400] text-[#222]">
                      <div className="flexsm gap-[27px]">
                        {activity.medal === "gold" && (
                          <div className="p-[12px] flexmm rounded-[6px] bg-[#FDECBF]">
                            <img src="/Gold.svg" alt="gold" />
                          </div>
                        )}
                        {activity.medal === "award" && (
                          <div className="p-[12px] flexmm rounded-[6px] bg-[#FFDEE3]">
                            <img src="/award-fill.svg" alt="award" />
                          </div>
                        )}
                        {activity.medal === "gem" && (
                          <div className="p-[12px] flexmm rounded-[6px] bg-[#E8E1F5]">
                            <img src="/gem.svg" alt="gem" />
                          </div>
                        )}
                        <div className="cflexss text-[16px] lg:text-[14px] ls:text-[12px] font-[400] gap-[8px]">
                          <p className="font-[700]">{activity.title}</p>
                          <p>{activity.content}</p>
                        </div>
                      </div>
                      <p>{activity.time}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full cflexss gap-[20px] border-[1px] rounded-[24px] py-[40px] px-[25px] bg-white flex-shrink">
          <p>Teachers Recommendation</p>
          <div className="w-full cflexss gap-[12px] px-[20px] text-[20px] lg:text-[18px] ls:text-[16px] font-[400]">
            <div className="w-full flexsm border-b-[1px] py-[12px]">
              <div className="w-[25%] flexsm">Title</div>
              <div className="w-[25%] flexsm">Category</div>
              <div className="w-[25%] flexsm">Teacher Name</div>
              <div className="w-[25%] flexsm">Views</div>
              <div className="w-[25%] flexsm">Completed</div>
            </div>
            <div className="w-full flexsm text-[14px] lg:text-[12px]">
              <div className="w-[25%] flexsm font-[700]">
                Exploring Classic Nursery Rhymes
              </div>
              <div className="w-[25%] flexsm text-primary3">Nursery Rhyme</div>
              <div className="w-[25%] flexsm">Darlene Robertson</div>
              <div className="w-[25%] flexsm">120</div>
              <div className="w-[25%] flexsm">30</div>
            </div>
            <div className="w-full flexsm text-[14px] lg:text-[12px]">
              <div className="w-[25%] flexsm font-[700]">
                Sweet diveats: Baking Delightful Desserts
              </div>
              <div className="w-[25%] flexsm text-primary1">Cooking</div>
              <div className="w-[25%] flexsm">Eleanor Pena</div>
              <div className="w-[25%] flexsm">80</div>
              <div className="w-[25%] flexsm">50</div>
            </div>
            <div className="w-full flexsm text-[14px] lg:text-[12px]">
              <div className="w-[25%] flexsm font-[700]">
                From Seed to Sprout: Understanding Plant Life Cycles
              </div>
              <div className="w-[25%] flexsm text-primary2">Gardening</div>
              <div className="w-[25%] flexsm">Darrell Steward</div>
              <div className="w-[25%] flexsm">102</div>
              <div className="w-[25%] flexsm">43</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
