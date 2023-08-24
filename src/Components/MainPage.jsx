import GemView from '@/AtomicComponents/GemView'
import MainContentOnOverview from '@/AtomicComponents/MainContentOnOverview'
import Nav from '@/AtomicComponents/Nav'
import React from 'react'

const MainPage = () => {
  return (
    <div>
        <Nav />
        <div className="main grid grid-cols-3to1 mx-xPadding  mt-[60px] gap-10 ">
            <MainContentOnOverview suppressHydrationWarning={true}/>
            
            <div className='w-[auto] h-[100vh] relative'>
              <GemView />
            </div>
            
        </div>
    </div>
  )
}

export default MainPage