"use client";

import { PrivateRoute } from "../page"
import Messages from "@/Components/Kids-Dashboard/Messages";

export default function Home() {
  return (
    <>
      <PrivateRoute>
        <Messages />
      </PrivateRoute>
    </>
  );
}
