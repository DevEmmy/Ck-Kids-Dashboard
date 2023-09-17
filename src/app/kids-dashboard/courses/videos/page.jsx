"use client";

import { PrivateRoute } from "../../page";
import CourseVideo from "@/Components/Kids-Dashboard/CourseVideo";

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <CourseVideo />
      </PrivateRoute>
    </>
  );
}
