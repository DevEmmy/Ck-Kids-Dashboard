import Nav from "@/AtomicComponents/Nav";
import Image from "next/image";
import Link from "next/link";
import SubTopic from "@/AtomicComponents/SubTopic";
import { ArrowLeftOutline } from "heroicons-react";

const CourseVideo = () => {
  return (
    <>
      <Nav />
      <div className="w-full flexss gap-[1em] pt-[2em] px-[5%]">
        <Link href="/courses" className="flexmm">
          <div className="flexss bg-primary2 rounded-[0.5em] p-[0.4em] cursor-pointer">
            <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
              <ArrowLeftOutline size="12px" color="#00AC76" />
            </div>
          </div>
        </Link>
        <div className="cflexss gap-[1em]">
          <p className="font-[700]">Arts and Crafts: Unleashing Imagination</p>
          <p>22 Lessons</p>
        </div>
      </div>

      <div className="w-full flexbs pt-[2em] px-[5%] gap-[1em] flex-wrap">
        <div className="w-[68%] sm:w-full cflexss gap-[2em] font-[400] text-[0.9rem]">
          <div className="w-full h-[35em] sm:h-auto flexmm cursor-pointer">
            <Image
              src={"/CourseImage.svg"}
              width={100}
              height={100}
              alt="course video"
            />
          </div>
        </div>
        <div className="w-[28%] sm:w-full cflexss gap-[1em] border-[0.2em] rounded-xl min-h-[32em] overflow-y-auto">

        </div>
      </div>

      <div className="w-full px-[5%] cflexss py-[2em]"></div>
    </>
  );
};

export default CourseVideo;
