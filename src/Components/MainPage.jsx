import GemView from '@/AtomicComponents/GemView'
import MainContentOnOverview from '@/AtomicComponents/MainContentOnOverview'
import Nav from '@/AtomicComponents/Nav'
import React from 'react'

const MainPage = () => {
  return (
    <div>
        <Nav />
        <div className="main flexbs flex-wrap mx-xPadding  mt-[60px] gap-6 ">
            <div className='w-[70%] sm:w-full cflexss'>
               <MainContentOnOverview/>
            </div>
           
            
            <div className="sticky top-[1em] right-0 sm:w-full w-[25%] cflexmm gap-[1em]">
              <GemView />
            </div>
            
        </div>
    </div>
  )
}

export default MainPage