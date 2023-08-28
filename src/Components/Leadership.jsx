import Nav from "@/AtomicComponents/Nav";
import { useState } from "react";
import Image from "next/image";

const Leadership = () => {

  return (
    <>
      <Nav active={3} />
      <div className="w-full cflexss px-[5%] py-[2em] gap-[2em]">
        <div className="w-full cflexss gap-[1em] text-[0.9rem] font-[600]">
          <p>Mastery Stage</p>
          <div className="flexmm pt-[0.1em] pr-[0.1em] pl-[0.1em] pb-[0.4em] w-full bg-primary2 h-[12em] rounded-xl">
            <div className="flexbm w-full bg-white rounded-xl h-full py-[1em] px-[5%]">
              <div className="flexmm w-[4em]">
                <Image src="/masteryLevel/mst1.png" alt="mst1" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
