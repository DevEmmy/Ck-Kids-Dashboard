"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/Components/Teachers-Dashboard/Dashboard";
import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";

export default function Home() {
  const [teacherObject, setTeacherObject] = useState()

  useEffect(() => {
    setTeacherObject(localStorage.getItem("teacher"))
  }, []);

  return (
    <>
      <PrivateRoute teacherObject={teacherObject}>
        <Dashboard teacherObject={teacherObject} />
      </PrivateRoute>
    </>
  );
}

export function PrivateRoute({ children, teacherObject }) {
  const router = useRouter();
  const isAuthenticated = teacherObject;
  console.log(teacherObject);

  if (!isAuthenticated) {
    router.push("/teachers-signin");
    notifyError("UnAuthorized");
    return null;
  }

  return children;
}
