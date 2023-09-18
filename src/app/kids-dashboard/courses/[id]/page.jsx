"use client";

import { useRouter } from "next/navigation";
import { notifyError } from "@/services/toastify";
import { useEffect, useState } from "react";
import { fetchFromLS, getVideoById } from "@/services/request";
import CourseVideo from "@/Components/Kids-Dashboard/CourseVideo";

export default function Home() {
  const [student, setStudent] = useState();
  const router = useRouter()
  const [courseId, setCourseId] = useState(null);
  const [course, setCourse] = useState(null)

  const fetchVideo = async (id)=>{
    let data = await getVideoById(id)
    console.log(data);
    setCourse(data)
  }

  useEffect(() => {
    // Parse the current URL to extract the courseId
    const pathSegments = window.location.pathname.split('/');
    const courseIdIndex = pathSegments.indexOf('courses') + 1;

    if (pathSegments.length > courseIdIndex) {
      const courseId = pathSegments[courseIdIndex];
      console.log(courseId)
      fetchVideo(courseId)
    }

    let data = fetchFromLS("student")
    setStudent(data);

    if(!data){
      router.push("/signin")
      notifyError("UnAuthorized")
    }
  }, []);

  return (
    <>      
        <CourseVideo student={student} course={course}/>      
    </>
  );
}
