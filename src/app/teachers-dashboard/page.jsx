"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/Components/Teachers-Dashboard/Dashboard";
import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import { fetchFromLS } from "@/services/request";


export default function Home() {
  const [teacher, setTeacher] = useState();
  const router = useRouter()

  useEffect(() => {
    let data = fetchFromLS("teacher")
    setTeacher(data);
    console.log(data)

    if(!data){
      router.push("/teachers-signin")
      // notifyError("UnAuthorized")
    }
  }, []); 
 

  return (
    <>      
        <Dashboard teacher={teacher} />      
    </>
  );
}
