"use client";
import { useRouter } from "next/navigation";
import MainPage from "@/Components/Kids-Dashboard/MainPage";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

export default function Home() {
  const [student, setStudent] = useState();
  const router = useRouter();

  const isAuthorized = useSelector((state) => state.studentDetails);
  const loginType = useSelector((state) => state.loginType);
  useEffect(() => {    
    if (!isAuthorized && loginType === "user") {
      router.push("/signin");
      notifyError("unAuthorized you are being redirected");
    } else if (isAuthorized && loginType === "user") {
      setStudent(isAuthorized.student || isAuthorized);      
    } else if (!isAuthorized && loginType === "guest") {
      setStudent("guest");
    }
  }, []);

  return (
    <>
      <MainPage studentObject={student} loginType={loginType} />
    </>
  );
}
