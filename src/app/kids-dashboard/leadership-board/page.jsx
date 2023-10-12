"use client";

import { useRouter } from "next/navigation";
import Leadership from "@/Components/Kids-Dashboard/Leadership";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import { fetchFromLS } from "@/services/request";
import LoadScreen from "@/AtomicComponents/LoadScreen";
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
  return <>{student ? <Leadership student={student} /> : <LoadScreen />}</>;
}
