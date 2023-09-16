import { DotsVertical, PencilAltOutline, TrashOutline } from "heroicons-react";
import React, { useState } from "react";

const EachCourse = ({ video, setCat, setType, setAdd, setDrop }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="w-full rounded-[12px] border-[1px] flex">
      <div className="w-3/5 border-r-[1px] p-[15px] flex gap-[20px] justify-between">
        <div className="flex gap-5 ">
          <div className="flexmm w-full min-h-[200px] flex-shrink rounded-[12px]">
            <img
              src={video.cover}
              alt="courseImage"
              className="rounded-[12px] h-full object-cover"
            />
          </div>

          <div className="pt-[20px] w-full cflexss font-[700] text-[#101828]">
            <p>{video.name}</p>
            <p className="text-[#AAA]">{video.description}</p>
          </div>
        </div>

        <div
          className="relative flex"
          onClick={() => {
            setEdit(!edit);
            setDrop(false);
            setCat(false);
            setType(false);
            setAdd(false);
          }}
        >
          <DotsVertical
            size="16px"
            color="#808080"
            className="cursor-pointer"
          />
          {edit && (
            <div className="absolute top-[30px] z-50 font-[400] text-[17px] text-[#808080] cflexss p-[6px] border-[1px] rounded-[12px] bg-[#FFF] flex-shrink shadow-md">
              <div className="w-[228px] py-[12px] px-[16px] gap-[10px] flexsm rounded-[4px] flex-shrink hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400">
                <PencilAltOutline size="16px" />
                <p>Edit</p>
              </div>
              <div className="w-[228px] py-[12px] px-[16px] gap-[10px] flexsm rounded-[4px] flex-shrink hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400">
                <TrashOutline size="16px" />
                <p>Delete</p>
              </div>
            </div>
          )}
        </div>
      </div>

                      <div className="w-2/5 py-[20px] px-[25px] gap-[10%] flexss text-[#AAA]">
                        <div className="cflexss gap-[20px]">
                          <p>Views</p>
                          <p className="text-[#333]">{video.views}</p>
                        </div>
                        <div className="cflexss gap-[20px]">
                          <p>Watched</p>
                          <p className="text-[#333]">{video.watched}</p>
                        </div>
                        {/* <div className="cflexss gap-[20px]">
                          <p>Views</p>
                          <p className="text-[#333]">20</p>
                        </div> */}
                      </div>
                    </div>
  )
}

export default EachCourse;
