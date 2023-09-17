"use client";

import { useRouter } from "next/navigation";
import Messages from "@/Components/Kids-Dashboard/Messages";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import { fetchFromLS } from "@/services/request";

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
        <Messages studentObject={student}/>      
    </>
  );
}
