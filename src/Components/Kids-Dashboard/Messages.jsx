import Nav from "@/AtomicComponents/Nav";
import { getMyDetails } from "@/services/request";
import { useState, useEffect } from "react";
import { Search, DotsVertical } from "heroicons-react";

const Messages = ({student}) => {  

  const MessageNotification = [
    {
      avatar: "Avatar",
      name: "Chikaobi Okafor",
      tag: "@chika-okafor",
      lastMessage:
        "Definitely! I found this step-by-step tutorial video on the course page super helpful. Also, folding slowly ...",
      unread: 1,
      online: false,
      time: "2 days ago",
    },
    {
      avatar: "Avatar",
      name: "Chikaobi Okafor",
      tag: "@chika-okafor",
      lastMessage:
        "Definitely! I found this step-by-step tutorial video on the course page super helpful. Also, folding slowly ...",
      unread: 1,
      online: false,
      time: "2 days ago",
    },
    {
      avatar: "Avatar",
      name: "Chikaobi Okafor",
      tag: "@chika-okafor",
      lastMessage:
        "Definitely! I found this step-by-step tutorial video on the course page super helpful. Also, folding slowly ...",
      unread: 1,
      online: true,
      time: "2 days ago",
    },
  ];

  return (
    <>
      <Nav active={2} student={student} />
      <div className="w-full flexbm mt-[100px] h-[90vh] px-xPadding py-[2em]">
        <div className="w-[30%] h-full md:w-full cflexss gap-[12px]">
          <div className="flexbm text-[17px] lg:text-[15px] w-full p-[16px] font-[400]  rounded-[8px] border-[1px] border-[#D8D8D8]">
            <div className="flexmm gap-[10px] w-full">
              <Search size="25px" />
              <input
                type="text"
                name="search"
                width="100%"
                className="w-full border-none outline-none"
                placeholder="Search"
              />
            </div>
            <DotsVertical size="25px" />
          </div>

          <div className="cflexsm gap-[20px] text-[17px] lg:text-[15px] w-full h-full p-[20px] font-[400]  rounded-[8px] border-[1px] bg-[#FAFAFA] border-[#D8D8D8] overflow-y-auto">
            {MessageNotification.map((messages) => {
              return (
                <>
                  <div className="flexss w-full border-[1px] border-[#E5E5E5] bg-white py-[20px] px-[10px] gap-[24px] rounded-[8px] cursor-pointer">
                    <div className="w-[52px] h-[52px]">
                      <img src={`/${messages.avatar}.svg`} alt="avatar" />
                    </div>
                    <div className="w-full cflexss gap-[10px]">
                      <div className="w-full flexbm">
                        <div>
                          <p className="font-[700] text-[20px] lg:text-[17px]">
                            {messages.name}
                          </p>
                          <p className="font-[400] text-[16px] text-[#808080]">
                            {messages.tag}
                          </p>
                        </div>
                        <p className="font-[400] text-[16px] lg:text-[14px]">
                          {messages.online ? "Online" : messages.time}
                        </p>
                      </div>
                      <div className="w-full flexbm">
                        <div className="w-full">
                          <p className="font-[400] text-[16px] lg:text-[14px]">
                            {messages.lastMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="cflexss w-[65%] border-[1px] border-[#D8D8D8] bg-[#FAFAFA] h-full rounded-[8px]">
          <div className="flexss w-full rounded-[8px] bg-white p-[20px] gap-[24px]">
            <div className="flexmm w-[52px] h-[52px]">
              <img src="/Avatar.svg" alt="" />
            </div>
            <div className="cflexss text-[16px] lg:text-[14px] font-[400]">
              <div className="flexmm gap-[10px]">
                <p className="font-[700] text-[20px]">Chikaobi Okafor</p>
                <p className="text-[#808080]">@chika okafor</p>
              </div>
              <p>2 days ago</p>
            </div>
          </div>

          {/* Send Message Box! */}
          <div className="relative w-full cflexss p-[20px] h-full overflow-y-auto">
            <div className="absolute bottom-[20px] flexbm gap-[20px] border-[1px] bg-white rounded-[8px] p-[20px]">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
