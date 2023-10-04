import Link from 'next/link'
import React from 'react'
import Board from './Board'

const LeaderBoardOverview = ({max}) => {
  return (
    <>
        <>
        <div className='flex justify-between mt-10 mb-3 lf:overflow-x-scroll'>
            <div className='flex gap-5'>
                <p className='text-primary2 font-[600]'>
                    Class Leadership Board
                </p>

                <p className='text-gray-500'>
                    School Leadership Board
                </p>
            </div>

            <Link href="/" className='text-gray-500 text-[14px]'>
                View Board
            </Link>
        </div>

        <Board max={max}/>
        
    </>
    </>
  )
}

export default LeaderBoardOverview