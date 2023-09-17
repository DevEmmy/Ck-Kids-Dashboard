"use client";

import { PrivateRoute } from "../page";
import Leadership from "@/Components/Kids-Dashboard/Leadership";

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <Leadership />
      </PrivateRoute>
    </>
  );
}
