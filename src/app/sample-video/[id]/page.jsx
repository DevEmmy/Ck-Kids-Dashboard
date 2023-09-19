"use client";

import { useEffect, useState } from "react";
import { getVideoById } from "@/services/request";
import SampleVideo from "@/Components/SampleVideo";

export default function Home() {    
  const [course, setCourse] = useState("")
  const [loading, setLoading] = useState(true);

  const fetchVideo = async (id)=>{    
    let data = await getVideoById(id)
    console.log(data);
    setCourse(data)
    setLoading(false)
  }

  useEffect(() => {
    // Parse the current URL to extract the courseId
    const pathSegments = window.location.pathname.split('/');
    const courseIdIndex = pathSegments.indexOf('sample-video') + 1;

    if (pathSegments.length > courseIdIndex) {
      const courseId = pathSegments[courseIdIndex];
      console.log(courseId)
      fetchVideo(courseId)
    }   
  }, []);

  return (
    <>      
        <SampleVideo course={course} loading={loading}/>      
    </>
  );
}
