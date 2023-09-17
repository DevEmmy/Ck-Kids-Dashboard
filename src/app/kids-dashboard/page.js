"use client";
import { useRouter } from "next/navigation";
import MainPage from "@/Components/Kids-Dashboard/MainPage";
import { notifyError } from "@/services/toastify";
import useLocalStorage from "@/AtomicComponents/UseLocalStorage";
import { useEffect, useState } from "react";
import { fetchFromLS } from "@/services/request";

export default function Home() {  
  // const [storedValue, setValue] = useLocalStorage("student", null)  

  const [student, setStudent] = useState();
  const router = useRouter()

  useEffect(() => {
    let data = fetchFromLS("student")
    setStudent(data);

    if(!data){
      router.push("/signin")
    }
  }, []);

  return (
    <>
      {/* <PrivateRoute studentObject={storedValue}> */}
        <MainPage studentObject={student} />
      {/* </PrivateRoute> */}
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
