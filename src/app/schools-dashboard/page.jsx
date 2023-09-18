'use client'

import Dashboard from '@/Components/Schools-Dashboard/Dashboard'
import { fetchFromLS } from '@/services/request'
import { notifyError } from '@/services/toastify'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

  const router = useRouter()

  const [school, setSchool] = useState()

  useEffect(() => {
    let data = fetchFromLS("school")
    setSchool(data);

    if(!data){
      router.push("/signin")
      notifyError("UnAuthorized")
    }
  }, []); 

  return (
    <Dashboard school={school}/>
  )
}

export default page