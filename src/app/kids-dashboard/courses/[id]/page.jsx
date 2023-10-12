"use client";

import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import { fetchFromLS, getVideoById } from "@/services/request";
import CourseVideo from "@/Components/Kids-Dashboard/CourseVideo";
import { useSelector } from "react-redux";

export default function Home() {
  const [student, setStudent] = useState();
  const router = useRouter();
  const [courseId, setCourseId] = useState(null);
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchVideo = async (id) => {
    let data = await getVideoById(id);
    setCourse(data);
    setLoading(false);
  };

  const isAuthorized = useSelector((state) => state.studentDetails);
  useEffect(() => {
    // Parse the current URL to extract the courseId
    const pathSegments = window.location.pathname.split("/");
    const courseIdIndex = pathSegments.indexOf("courses") + 1;

    if (pathSegments.length > courseIdIndex) {
      const courseId = pathSegments[courseIdIndex];
      fetchVideo(courseId);
    }
    
    if (!isAuthorized) {
      router.push("/signin");
      notifyError("unAuthorized you are being redirected");
    }
    setStudent(isAuthorized.student);
  }, []);

  return (
    <>
      <CourseVideo student={student} course={course} loading={loading} />
    </>
  );
}
