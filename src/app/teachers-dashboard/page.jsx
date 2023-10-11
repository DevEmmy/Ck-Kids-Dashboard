"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/Components/Teachers-Dashboard/Dashboard";
import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import { useSelector } from "react-redux";

export default function Home() {
  // const [teacher, setTeacher] = useState({});
  const router = useRouter();

  useSelector((state) => {
    if (!state.teacherDetails) {
      router.push("/teachers-signin");
      notifyError("UnAuthorized you are being redirected");
    }
  }, []);

  // useEffect(() => {
  //   let data = fetchFromLS("teacher");
  //   setTeacher(data);
  //   console.log(data);

  //   if (!data) {
  //     router.push("/teachers-signin");
  //     // notifyError("UnAuthorized")
  //   }
  // }, []);

  return (
    <>
      <Dashboard teacher={teacher} />
    </>
  );
}
