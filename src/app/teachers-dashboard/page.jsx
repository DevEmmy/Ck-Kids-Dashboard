"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/Components/Teachers-Dashboard/Dashboard";
import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import { useSelector } from "react-redux";

export default function Home() {
  const [teacher, setTeacher] = useState();
  const router = useRouter();

  const isAuthorized = useSelector((state) => state.teacherDetails);
  useEffect(() => {
    console.log(isAuthorized);
    if (!isAuthorized) {
      router.push("/teachers-signin");
      notifyError("unAuthorized you are being redirected");
    }
    setTeacher(isAuthorized.teacher);
  }, []);

  return (
    <>
      <Dashboard teacher={teacher} />
    </>
  );
}
