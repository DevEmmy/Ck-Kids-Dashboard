import { ChevronUp, ChevronDown, Users } from "heroicons-react";

const Overview = () => {
  const TopStudents = [
    {
      avatar: "",
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
  return (
    <>
      <div className="w-full cflexss font-[700] gap-[37px] text-[24px] lg:text-[20px] ls:text-[18px] bg-[#F7F7F7] h-full p-[30px]">
        <div className="w-full flexbm">
          <p>Welcome, Savannah Nguyen</p>
          <div className="flexmm gap-[28px]">
            <div className="text-[#808080] font-[400] text-[20px] lg:text-[18px] ls:text-[16px] rounded-[10px] p-[12px] gap-[10px] flexmm bg-white cursor-pointer">
              <p>Class</p>
              <ChevronUp />
            </div>
            <div className="bg-transparent text-[20px] lg:text-[18px] ls:text-[16px] font-[400] text-[#808080] flexmm gap-[4px]">
              <div className="p-[12px] rounded-l-[8px] bg-primary2 text-black cursor-pointer">
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
          <div className="w-full pl-[32px] py-[40px] lg:py-[35px] ls:py-[30px] bg-primary1 text-white flexsm gap-[24px] rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-[20px]">
              <Users size="32px" color="#F5AE1E" />
            </div>
            <div className="cflexss">
              <p className="text-[64px] lg:text-[58px] ls:text-[42px] font-[800]">25</p>
              <p className="text-[24px] lg:text-[20px] ls:text-[18px] font-[400]">Total Students</p>
            </div>
          </div>
          <div className="w-full pl-[32px] py-[40px] lg:py-[35px] ls:py-[30px] bg-primary2 text-white flexsm gap-[24px] rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-[20px]">
              <Users size="32px" color="#00AC76" />
            </div>
            <div className="cflexss">
              <p className="text-[64px] lg:text-[58px] ls:text-[42px] font-[800]">25</p>
              <p className="text-[24px] lg:text-[20px] ls:text-[18px] font-[400]">Total Visit</p>
            </div>
          </div>
          <div className="w-full pl-[32px] py-[40px] lg:py-[35px] ls:py-[30px] bg-primary3 text-white flexsm gap-[24px] rounded-[24px] shadow-md">
            <div className="flexmm bg-white rounded-[8px] p-[20px]">
              <Users size="32px" color="#8D67CE" />
            </div>
            <div className="cflexss">
              <p className="text-[64px] lg:text-[58px] ls:text-[42px] font-[800]">25</p>
              <p className="text-[24px] lg:text-[20px] ls:text-[18px] font-[400]">Total Students Online</p>
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
              <p>Student Streak</p>
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
          <div className="cflexss gap-[10px] w-[419px] border-[1px] rounded-[24px] py-[40px] px-[32px] bg-white flex-shrink">
            <div className="flexsm p-[12px] gap-[10px] rounded-[8px]">
              <p>Top Student</p>
              <ChevronDown size="16px" />
            </div>
            <div className="w-full cflexss text-[17px] font-[400] gap-[10px]">
                <div className="w-full pl-[40px] py-[13px] flexbm text-[16px] font-[600]">
                  <p>Name</p>
                  <p>Learning Gem</p>
                </div>
            </div>
          </div>
          <div className="w-[859px] border-[1px] rounded-[24px] py-[40px] px-[25px] bg-white flex-shrink">
            <div className="flexsm p-[12px] gap-[10px] rounded-[8px]">
              <p>Student Activities</p>
              <ChevronDown size="16px" />
            </div>
          </div>
        </div>

        <div className="w-full border-[1px] rounded-[24px] py-[40px] px-[25px] bg-white flex-shrink">
          <div>
            <p>Teachers Recommendation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
