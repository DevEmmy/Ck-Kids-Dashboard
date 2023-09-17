"use client";
import { useRouter } from "next/navigation";
import Contact from "@/Components/Kids-Dashboard/Support";
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
      
        <Contact studentObject={student}/>      
    </>
  );
}
