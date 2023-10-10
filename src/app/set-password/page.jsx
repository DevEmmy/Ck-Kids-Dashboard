"use client";
import SetPassword from "@/Components/SetPassword";
import { useRouter } from "next/navigation";

export default function Home() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let token = params.token;
  let type = params.type;   
  return (
    <>
      <SetPassword token={token} type={parseInt(type)} />
    </>
  );
}
