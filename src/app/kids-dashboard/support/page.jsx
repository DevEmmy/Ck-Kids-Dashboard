"use client";
import { useRouter } from "next/navigation";
import Contact from "@/Components/Kids-Dashboard/Support";
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
    setStudent(isAuthorized.student || isAuthorized);
  }, []);

  return (
    <>
      <Contact student={student} />
    </>
  );
}
