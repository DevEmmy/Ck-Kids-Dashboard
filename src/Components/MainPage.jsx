import MainContentOnOverview from '@/AtomicComponents/MainContentOnOverview'
import Nav from '@/AtomicComponents/Nav'
import React from 'react'

const MainPage = () => {
  return (
    <div>
        <Nav />
        <div className="main grid grid-cols-3to1">
            <MainContentOnOverview />
            
            <div>Yes</div>
        </div>
    </div>
  )
}

export default MainPage