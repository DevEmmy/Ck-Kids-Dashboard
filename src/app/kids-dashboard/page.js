"use client";
import { useRouter } from "next/navigation";
import MainPage from "@/Components/Kids-Dashboard/MainPage";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import { fetchFromLS } from "@/services/request";

import { useSelector } from "react-redux";

export default function Home() {
  const [student, setStudent] = useState();
  const router = useRouter();

  const isAuthorized = useSelector((state) => state.studentDetails);
  useEffect(() => {
    console.log(isAuthorized);
    if (!isAuthorized) {
      router.push("/signin");
      notifyError("unAuthorized you are being redirected");
    }
    setStudent(isAuthorized.student);
  }, []);

  return (
    <>
      <MainPage studentObject={student} />
    </>
  );
}

export const PrivateRoute = ({ children, studentObject }) => {
  // const router = useRouter();
  // const isAuthenticated = studentObject;

  // if (!isAuthenticated) {
  //   router.push("/signin");
  //   notifyError("UnAuthorized");
  //   return null;
  // }

  return children;
};
