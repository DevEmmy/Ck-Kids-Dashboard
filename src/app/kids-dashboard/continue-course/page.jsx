"use client";

import { PrivateRoute } from "../page";
import ContinueCourse from "@/Components/Kids-Dashboard/ContinueCourse";

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <ContinueCourse />
      </PrivateRoute>
    </>
  );
}
