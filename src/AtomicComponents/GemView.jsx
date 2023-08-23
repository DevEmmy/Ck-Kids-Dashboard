import React from 'react'
import {IoDiamondOutline} from "react-icons/io5"

const GemView = () => {
  return (
    <div className='sticky top-0 right-0 w-full'>
        <div className="balance flex items-center border rounded-3xl px-5 gap-3 h-48 justify-center">
            <IoDiamondOutline size={60} className='text-primary3'/>
            <div className=''>
                <p>
                    Learning Gems
                </p>

                <h2 className='text-[2.2em] font-[900]'>
                    7,000 LG
                </h2>
            </div>
        </div>
    </div>
  )
}

export default GemView