import { XCircleOutline } from "heroicons-react";
import React, { useState } from "react";
import { FaCrown } from "react-icons/fa";

const Notification = ({ setNotification }) => {
  const dummy = [
    {
      title: "Congratulations, You've Completed a Course",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio officiis odio repudiandae vitae expedita sapiente sit consectetur quidem facere numquam.",
      type: 1,
    },
    {
      title: "New Course Alert: Game Development Pro!",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio officiis odio repudiandae vitae expedita sapiente sit consectetur quidem facere numquam.",
      type: 2,
    },
  ];
  return (
    <div className="absolute cflexss gap-[0.5em] top-[4em] right-xPadding w-[400px] bg-white rounded-xl shadow-md border-2 p-3 z-50 ">
      <div className="w-full flexbm">
        <h2 className="font-[900] text-[1.1rem]">Notifications</h2>
        <XCircleOutline
          style={{ cursor: "pointer" }}
          onClick={() => {
            setNotification(false);
          }}
          color="gray"
        />
      </div>

      <div className="grid gap-4">
        {dummy.map((data, i) => {
          return <NotificationModule data={data} key={i} />;
        })}
      </div>
    </div>
  );
};

const NotificationModule = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="flex gap-2 justify-between cursor-pointer items-start"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="p-5 bg-primary2 rounded-md text-white">
        <FaCrown />
      </div>

      <div className="w-[80%]">
        <p className="">{data.title}</p>

        {showDetails && (
          <p className="font-[400] text-gray-500">{data.details}</p>
        )}
      </div>

      <div className="h-3 w-3 bg-primary2 rounded-full" />
    </div>
  );
};

export default Notification;
