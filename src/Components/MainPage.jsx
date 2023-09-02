import GemView from '@/AtomicComponents/GemView'
import MainContentOnOverview from '@/AtomicComponents/MainContentOnOverview'
import Nav from '@/AtomicComponents/Nav'
import { getMyDetails } from '@/services/request'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const MainPage = ({isAuthorized}) => {

  // useEffect(()=>{
  //   getMyDetails()
  // }, [])
  let student = getMyDetails()
  const router = useRouter();

  useEffect(() => {
    if (!isAuthorized) {
      router.push('/signin'); // Redirect to the login page if not authorized
    }
  }, [isAuthorized]);

  return (
    <div>
        <Nav student={student}/>
        <div className="main flexbs flex-wrap mx-xPadding  mt-[60px] gap-6 ">
            <div className='w-[72%] sm:w-full cflexss'>
               <MainContentOnOverview student={student}/>
            </div>
           
            
            <div className="sticky top-[1em] right-0 sm:w-full w-[25%] cflexmm gap-[1em]">
              <GemView student={student}/>
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Implement your condition check here, e.g., check if the user is authenticated
  let student = getMyDetails()
  let isAuthorized = false
  if(student){
    isAuthorized = true
  }

  return {
    props: {
      isAuthorized,
    },
  };
}

export default MainPage