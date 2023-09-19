"use client";

import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import { fetchFromLS } from "@/services/request";
import CoursesPage from "@/Components/Kids-Dashboard/CoursesPage";
import { SpinnerCircular } from "spinners-react";

export default function Home() {
  const [student, setStudent] = useState();
  const router = useRouter()

  useEffect(() => {
    let data = fetchFromLS("student")
    setStudent(data);

    if(!data){
      router.push("/signin")
      notifyError("UnAuthorized")
    }
  }, []);
  return (

    <>      
    {
      student ? 
       <CoursesPage student={student}/> 
       :
       <div className="w-full flexmm">
        <img src="" alt="" />
      </div>
    }
            
    </>
  );
}
