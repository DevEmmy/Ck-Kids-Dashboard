"use client";
import { useRouter } from "next/navigation";
import MainPage from "@/Components/Kids-Dashboard/MainPage";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import { fetchFromLS } from "@/services/request";

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
        <MainPage studentObject={student} />      
    </>
  );
}

export const  PrivateRoute = ({ children, studentObject }) => {
  // const router = useRouter();
  // const isAuthenticated = studentObject;

  // if (!isAuthenticated) {
  //   router.push("/signin");
  //   notifyError("UnAuthorized");
  //   return null;
  // }

  return children;
}
