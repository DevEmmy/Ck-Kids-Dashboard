import React from 'react'
import { BsFire, BsTrophy } from 'react-icons/bs'
import { GiGraduateCap } from 'react-icons/gi'
import CoursesOverview from './CoursesOverview'

const MainContentOnOverview = () => {
  return (
    <>
        <div className=' text-white'>
            <p className='text-black py-[10px] font-[600]'>Overview</p>

            <div className='flex gap-[10px]'>

                <div className="streak bg-primary1 p-[20px] rounded-3xl w-[25%]">
                    <div className='flex gap-[10px] items-center'>
                        <span className='p-[10px] bg-white rounded-md text-primary1'><BsFire size={24}/> </span>
                        <p className='text-[3em] font-[900]'>
                            20
                        </p>
                    </div>
                    <p className='pt-[6px]'>Your Streak</p>
                </div>

                <div className="streak bg-primary2 p-[20px] rounded-3xl w-[25%]">
                    <div className='flex gap-[10px] items-center'>
                        <span className='p-[10px] bg-white rounded-md text-primary2'><GiGraduateCap size={24}/> </span>
                        <p className='text-[3em] font-[900]'>
                            100
                        </p>
                    </div>
                    <p className='pt-[6px]'>Completed Courses</p>
                </div>

                <div className="streak bg-primary3 p-[20px] rounded-3xl w-[25%] flex items-center justify-center">
                    <div className='flex gap-[10px] items-center justify-center'>
                        <span className='p-[10px] bg-white rounded-md text-primary3'><BsTrophy size={24}/> </span>
                        <div>
                            <p>
                                Mastery Stages
                            </p>
                            <p className='text-[1.4em] font-[900]'>
                                Adventurer
                            </p>
                        </div>
                        
                    </div>
                    {/* <p className='pt-[10px]'>Adventurer</p> */}
                </div>

                <div className="streak bg-primary4 p-[20px] rounded-3xl w-[25%]">
                    <div className='flex gap-[10px] items-center'>
                        <span className='p-[10px] bg-white rounded-md text-primary1'><BsFire size={24}/> </span>
                        <p className='text-[3em] font-[900]'>
                            20
                        </p>
                    </div>
                    <p className='pt-[6px]'>Your Streak</p>
                </div>
            </div>

            <CoursesOverview />
        </div>
    </>
  )
}

export default MainContentOnOverview