import React from 'react'
import {IoDiamondOutline} from "react-icons/io5"

const GemView = () => {
    const missions = [
        {
            name: "Super Video Watcher",
            description: "Unlock this trophy by watching 10 awesome videos",
            max: 10,
            value: 5,
        },
        {
            name: "Quiz Whiz",
            description: "You're on fire! Earn the Quiz Whiz badge by acing 5 quizzes. You're a true mastermind!",
            max: 5,
            value: 2,
        },
        {
            name: "Course Champion",
            description: "You've conquered courses like a true champion! Collect this badge as a reward for completing 20 courses.",
            max: 20,
            value: 2,
        },
        {
            name: "Helping Hand",
            description: "You're a star in the community! The Helping Hand badge is yours for being an active friend, sharing knowledge, and brightening up discussions.",
            max: 1,
            value: 0,
        }
    ]
  return (
    <div className='sticky top-0 right-0 w-full'>
        <div className="balance flex items-center border rounded-3xl gap-2 h-48 justify-center">
            <IoDiamondOutline size={50} className='text-primary3'/>
            <div className=''>
                <p>
                    Learning Gems
                </p>

                <h2 className='text-[2.2em] font-[900]'>
                    7,000 LG
                </h2>
            </div>
        </div>

        <div>
            <div>
                <p>CURIOUSITY MISSION</p>
                <p>View all</p>
            </div>

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default GemView