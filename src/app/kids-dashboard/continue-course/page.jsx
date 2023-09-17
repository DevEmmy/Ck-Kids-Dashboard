"use client";

import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import ContinueCourse from "@/Components/Kids-Dashboard/ContinueCourse";

export default function Home() {
  const [student, setStudent] = useState();
  const router = useRouter()

  useEffect(() => {
    let data = fetchFromLS("student")
    setStudent(data);

    if(!data){
      router.push("/signin")
      notifyError("UnAuthorized")
    }
  }, []);

  return (
    <>      
        <ContinueCourse />      
    </>
  );
}
