"use client";
import SetPassword from "@/Components/SetPassword";
import { useRouter } from "next/router";

export default function Home() { 
  const router = useRouter()
  function parseURLParameters(url) {
    const params = {};
    const searchParams = url.split('?')[1];
    if (searchParams) {
      searchParams.split('&').forEach(param => {
        const [key, value] = param.split('=');
        params[key] = value;
      });
    }
    return params;
  }
  
  const currentURL = router.asPath;
  const parameters = parseURLParameters(currentURL);
  
  const token = parameters['token'];
  const type = parameters['type'];
  
  return (
    <>
      <SetPassword token={token} type={parseInt(type)} />      
    </>
  );
}
