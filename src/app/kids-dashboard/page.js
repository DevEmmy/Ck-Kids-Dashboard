"use client";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import MainPage from "@/Components/Kids-Dashboard/MainPage";
import { notifyError } from "@/services/toastify";

export default function Home() {
  const [studentObject, setStudentObject] = useState()

  useEffect(() => {
    setStudentObject(localStorage.getItem("student"))
  }, []);
  
  return (
    <>
      <PrivateRoute studentObject={studentObject}>
        <MainPage studentObject={studentObject} />
      </PrivateRoute>
    </>
  );
}

export function PrivateRoute({ children, studentObject }) {
  const router = useRouter();
  const isAuthenticated = studentObject;

  if (!isAuthenticated) {
    router.push("/signin");
    notifyError("UnAuthorized");
    return null;
  }

  return children;
}
