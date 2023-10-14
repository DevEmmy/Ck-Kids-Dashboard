"use client";
import SetPassword from "@/Components/SetPassword";
import { useSearchParams, usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}?${searchParams}`;

  function parseURLParameters(url) {
    const params = {};
    const searchParams = url.split("?")[1];
    if (searchParams) {
      searchParams.split("&").forEach((param) => {
        const [key, value] = param.split("=");
        params[key] = value;
      });
    }
    return params;
  }
  const token = parseURLParameters(url)["token"];
  const type = parseURLParameters(url)["type"];    

  return ( 
    <>
      <SetPassword token={token} type={parseInt(type)} />      
    </>
  );
}
