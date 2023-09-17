"use client";
import { useRouter } from "next/navigation";
import MainPage from "@/Components/Kids-Dashboard/MainPage";
import { notifyError } from "@/services/toastify";
import useLocalStorage from "@/AtomicComponents/UseLocalStorage";

export default function Home() {  
  const [storedValue, setValue] = useLocalStorage("student", null)  

  return (
    <>
      <PrivateRoute studentObject={storedValue}>
        <MainPage studentObject={storedValue} />
      </PrivateRoute>
    </>
  );
}

export const  PrivateRoute = ({ children, studentObject }) => {
  // const router = useRouter();
  // const isAuthenticated = studentObject;

  // if (!isAuthenticated) {
  //   router.push("/signin");
  //   notifyError("UnAuthorized");
  //   return null;
  // }

  return children;
}
