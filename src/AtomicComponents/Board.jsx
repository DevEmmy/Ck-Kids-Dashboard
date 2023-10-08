import React, { useEffect, useState } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import Line from "./Line";
import { getLB } from "@/services/request";

const Board = ({max = 3}) => {
  // const ld = [
  //   {
  //     rank: 1,
  //     avatar:
  //       "https://www.looper.com/img/gallery/inosukes-powers-from-demon-slayer-explained/intro-1620465501.jpg",
  //     name: "Chinwe Eze Ogoluwa",
  //     courses: 180,
  //     hours: 340,
  //     gem: 70000,
  //   },
  //   {
  //     rank: 2,
  //     avatar:
  //       "https://www.looper.com/img/gallery/inosukes-powers-from-demon-slayer-explained/intro-1620465501.jpg",
  //     name: "Chinwe Eze",
  //     courses: 180,
  //     hours: 340,
  //     gem: 70000,
  //   },
  //   {
  //     rank: 3,
  //     avatar:
  //       "https://www.looper.com/img/gallery/inosukes-powers-from-demon-slayer-explained/intro-1620465501.jpg",
  //     name: "Chinwe Eze",
  //     courses: 180,
  //     hours: 340,
  //     gem: 70000,
  //   },
  // ];

  let [ld, setLd] = useState()

  const fetchData = async ()=>{
    let data = await getLB()
    console.log(data);
    setLd(data)
  }

  useEffect(()=>{
    fetchData()
  }, [])
  
  return (
    <div className="text-black w-full flex flex-col border rounded-3xl p-6">
      <div>
        <div className="flex justify-between text-start tHead">
          <div className="text-start w-[10%]">Rank</div>
          <div className="text-start w-[50%]">Name</div>
          <div className="text-center w-[10%]">Courses</div>
          <div className="text-center w-[10%]">Hours</div>
          <div className="flex gap-2 w-[20%] justify-end text-end">
            {" "}
            <IoDiamondOutline size={20} className="text-primary3" /> Learning
            Gem
          </div>
        </div>
      </div>

      <Line />
      <div className="flex flex-col gap-3 text-gray-500">
        {ld?.slice(0,max).map((data, i) => {
          return (
            // <TableData key={i} values={Object.values(data)}/>
            <div
              className={`tRow py-3 px-2 rounded-lg flex justify-between ${
                i === 0 && "bg-primary2 text-white"
              }`}
              key={i}
            >
              <div className="w-[10%]">{i+1}</div>
              <div className="flex gap-3 w-[50%]">
                <img src={data.profilePicture} alt="" className="w-6 h-6 rounded-lg" />
                {data.fullName}
              </div>
              <div className="text-center w-[10%]">{data.completedCourses}</div>
              <div className="w-[10%] text-center">0</div>
              <div
                className={`w-[20%] text-[600] text-end  ${
                  i === 0 ? "text-primary1" : "text-primary2"
                }`}
              >
                {data.gem}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
