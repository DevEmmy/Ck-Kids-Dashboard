"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/Components/Teachers-Dashboard/Dashboard";
import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import { fetchFromLS } from "@/services/request";


export default function Home() {
  onst [student, setStudent] = useState();
  const router = useRouter()

  useEffect(() => {
    let data = fetchFromLS("teacher")
    setStudent(data);

    if(!data){
      router.push("/teacher-signin")
      notifyError("UnAuthorized")
    }
  }, []); 
 

  return (
    <>      
        <Dashboard teacherObject={storedValue} />      
    </>
  );
}

export function PrivateRoute({ children, teacherObject }) {
  // const router = useRouter();
  // let isAuthenticated = teacherObject;  

  // if (!isAuthenticated) {
  //   router.push("/teachers-signin");
  //   notifyError("UnAuthorized");
  //   return null;
  // }

  return children;
}
