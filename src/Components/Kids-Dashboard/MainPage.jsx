import GemView from "@/AtomicComponents/GemView";
import MainContentOnOverview from "@/AtomicComponents/MainContentOnOverview";
import Nav from "@/AtomicComponents/Nav";
import { fetchFromLS, getMyDetails } from "@/services/request";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [student, setStudent] = useState();

  useEffect(() => {
    setStudent(fetchFromLS());
  }, []);

  return (
    <>
      {student && (
        <div>
          <Nav student={student} />
          <div className="flexbs lf:flex-wrap font-sans px-xPadding mt-[120px] lf:mt-[90px]">
            <div className="w-[72%] lf:w-full cflexss">
              <MainContentOnOverview student={student} />
            </div>

            <div className="fixed lf:hidden top-[110px] z-0 right-[4%] w-[25%] cflexmm">
              <GemView student={student} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
