import GemView from "@/AtomicComponents/GemView";
import LoadScreen from "@/AtomicComponents/LoadScreen";
import MainContentOnOverview from "@/AtomicComponents/MainContentOnOverview";
import Nav from "@/AtomicComponents/Nav";
import { fetchFromLS, getMyDetails } from "@/services/request";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MainPage = ({studentObject}) => {
  // const [student, setStudent] = useState();
  // const router = useRouter()

  // useEffect(() => {
  //   let data = fetchFromLS("student")
  //   setStudent(data);

  //   if(!data){
  //     router.push("/signin")
  //   }
  // }, []);

  return (
    <>
      {studentObject ? (
        <div>
          <Nav student={studentObject} />
          <div className="flexbs lf:flex-wrap font-sans px-xPadding mt-[120px] lf:mt-[90px]">
            <div className="w-[72%] lf:w-full cflexss">
              <MainContentOnOverview student={studentObject} />
            </div>

            <div className="fixed lf:hidden top-[110px] z-0 right-[4%] w-[25%] cflexmm ">
              <GemView student={studentObject} />
            </div>
          </div>
        </div>
      )
        :
        <LoadScreen />
    }
    </>
  );
};

export default MainPage;
