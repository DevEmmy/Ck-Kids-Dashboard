"use client";

import Dashboard from "@/Components/Schools-Dashboard/Dashboard";
import { fetchFromLS } from "@/services/request";
import { notifyError } from "@/services/toastify";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();

  const [school, setSchool] = useState();
  const isAuthorized = useSelector(state => state.schoolDetails); 
  useEffect(() => {       
    console.log(isAuthorized)
    if (!isAuthorized) {
      router.push("/signin");
      notifyError("unAuthorized you are being redirected");
    }
    setSchool(isAuthorized.school);
  }, []);

  return (
    <>
      <Dashboard school={school} />
    </>
  );
};

export default page;
