"use client";
import { PrivateRoute } from "../page"
import Contact from "@/Components/Kids-Dashboard/Support";

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <Contact />
      </PrivateRoute>
    </>
  );
}
