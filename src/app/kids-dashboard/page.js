"use client";
import { useRouter } from "next/navigation";
import MainPage from "@/Components/Kids-Dashboard/MainPage";

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    </>
  );
}

export function PrivateRoute({ children }) {
  const router = useRouter();
  const isAuthenticated = /* Check if the user is authenticated */ false;

  if (!isAuthenticated) {
    router.push("/signin");
    return null;
  }

  return children;
}
