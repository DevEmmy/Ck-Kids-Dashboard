import Nav from "@/AtomicComponents/Nav";
import { ArrowLeftOutline } from "heroicons-react";
import GemView from "@/AtomicComponents/GemView";
import { getMyDetails } from "@/services/request";
import { useState, useEffect } from "react";

const ContinueCourse = () => {
  const [student, setStudent] = useState("");
  useEffect(() => {
    let student = getMyDetails();
    setStudent(student);
  }, [student]);
  const courses = [
    {
      category: "Music-Dance",
      title: "Music and Movement: Express Yourself",
      progress: "79%",
    },
    {
      category: "Gardening",
      title: "Miniature Fairy Gardens: A Magical Adventure",
      progress: "24%",
    },
    {
      category: "Arts and Crafts",
      title: "Creative Collages: Mixed Media Art for Kids",
      progress: "19%",
    },
  ];
  return (
    <>
      <Nav active={1} student={student}/>
      <div className="w-full flexbs py-[2em] px-xPadding flex-wrap">
        <div className="w-[72%] sm:w-full cflexss">
          <div
            onClick={() => {
              window.history.back();
            }}
            className="flexmm gap-[12   px]"
          >
            <div className="flexss bg-primary2 rounded-[0.5em] p-[0.4em] cursor-pointer">
              <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                <ArrowLeftOutline size="12px" color="#00AC76" />
              </div>
            </div>
            <h1 className="font-[600] text-[20px] lg:text-[18px] ls:text-[16px] sm:text-[18px]">
              Continue Course
            </h1>
          </div>
          <div className="w-full flexmm gap-[15px]"></div>
        </div>
        <div className="sticky top-[1em] right-0 w-[25%] sm:w-full cflexmm gap-[1em]">
          <GemView />
        </div>
      </div>
    </>
  );
};

export default ContinueCourse;
