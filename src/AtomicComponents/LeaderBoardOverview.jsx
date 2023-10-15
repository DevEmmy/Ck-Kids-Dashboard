import Link from "next/link";
import React from "react";
import Board from "./Board";

const LeaderBoardOverview = ({ max }) => {
  return (
    <>
      <>
        <div className="flex justify-between mt-10 mb-3 lf:overflow-x-scroll">
          <div className="flex gap-5">
            <p className="text-primary2 font-[600] cursor-pointer">
              Class Leadership Board
            </p>

            <p className="text-gray-500 cursor-pointer">
              School Leadership Board
            </p>
          </div>

          <a
            href="/kids-dashboard/leadership-board"
            className="text-gray-500 text-[14px cursor-pointer"
          >
            View Board
          </a>
        </div>

        <Board max={max} />
      </>
    </>
  );
};

export default LeaderBoardOverview;
