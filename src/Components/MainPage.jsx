import GemView from '@/AtomicComponents/GemView'
import MainContentOnOverview from '@/AtomicComponents/MainContentOnOverview'
import Nav from '@/AtomicComponents/Nav'
import { fetchFromLS, getMyDetails } from '@/services/request'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const MainPage = () => {
  const [student, setStudent] = useState(fetchFromLS())  

  // useEffect(()=>{
  //   setStudent(fetchFromLS())
  // },[])

  return (
    <div>
        <Nav student={student}/>
        <div className="main flexbs lf:flex-wrap mx-xPadding mt-[60px] gap-6 ">
            <div className='w-[72%] lf:w-full cflexss'>
               <MainContentOnOverview student={student}/>
            </div>
           
            
            <div className="sticky top-[1em] right-0 lf:w-full w-[25%] cflexmm gap-[1em]">
              <GemView student={student}/>
            </div>
        </div>
    </div>
  )
}




export default MainPage