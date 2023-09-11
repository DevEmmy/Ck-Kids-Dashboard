import { SearchOutline, ArrowLeft, ArrowRight } from "heroicons-react";

import {} from "react-icons/ri";

const Students = () => {
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
      <div className="w-full p-[30px] cflexss gap-[28px]">
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
                  className={`w-full flexsm py-[10px] px-[20px] ${
                    (index + 1) % 2 === 0 ? "bg-[#F7F7F7]" : "bg-white"
                  }`}
                >
                  <div className="w-[9%] flexsm gap-[15px]">
                    <input type="checkbox" checked={data.checked} />
                    <div className="flexmm w-[24px]">
                      <img src={`/${data.avatar}.svg`} alt="avatar" />
                    </div>
                  </div>
                  <div className="w-[14%] flexsm">{data.name}</div>
                  <div className="w-[20%] flexsm">{data.email}</div>
                  <div className="w-[14%] flexsm">{data.username}</div>
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
