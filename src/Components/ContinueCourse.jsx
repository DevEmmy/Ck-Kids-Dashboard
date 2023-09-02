import Nav from "@/AtomicComponents/Nav";
import { ArrowLeftOutline } from "heroicons-react";

const ContinueCourse = () => {
  return (
    <>
      <Nav active={1} />
      <div className="w-full flexbs py-[2em] px-xPadding flex-wrap">
        <div className="w-[72%] sm:w-full cflexss">
          <div
            onClick={() => {
              window.history.back();
            }}
            className="flexmm gap-[20px]"
          >
            <div className="flexss bg-primary2 rounded-[0.5em] p-[0.4em] cursor-pointer">
              <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                <ArrowLeftOutline size="12px" color="#00AC76" />
              </div>
            </div>
            <h1 className="font-[900] text-[40px] lg:text-[37px] ls:text-[34px] sm:text-[30px]">
              Contact Support
            </h1>
          </div>
        </div>
        <div className="sticky top-[1em] right-0 w-[25%] sm:w-full cflexmm gap-[1em]">
          <GemView />
        </div>
      </div>
    </>
  );
};

export default ContinueCourse;
