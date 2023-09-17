"use client";

import { PrivateRoute } from "../page";
import CoursesPage from "@/Components/Kids-Dashboard/CoursesPage";

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <CoursesPage />
      </PrivateRoute>
    </>
  );
}
