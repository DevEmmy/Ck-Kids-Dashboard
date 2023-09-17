"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/Components/Teachers-Dashboard/Dashboard";
import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import useLocalStorage from "@/AtomicComponents/UseLocalStorage";

export default function Home() {
  const [storedValue, setValue] = useLocalStorage("teacher", null)  
 

  return (
    <>
      <PrivateRoute teacherObject={storedValue}>
        <Dashboard teacherObject={storedValue} />
      </PrivateRoute>
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
