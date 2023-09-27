import Image from 'next/image'
import React from 'react'

const PictureTextDivider = ({imageUrl, imageContainerClassNames, imageClassNames, imageFirst = false, children, bgColor}) => {
  return (
    <div className={`flex mt-[100px] ${imageFirst ? "flex-row md1:flex-col-reverse" : "flex-row-reverse md1:flex-col-reverse"} ${bgColor} px-[10.2%] md1:px-xpadding items-center pt-[5em] md1:pt-0 py-[107px] md1:pb-[2em] gap-[97px] md1:gap-[2em]`}>
        <div className={`${imageContainerClassNames} w-[50%] md1:w-[100%]`}>
          <img src={imageUrl} width={0} height={0} className={`${imageClassNames}`} alt='Image' />
        </div>
        
        <div className='w-[50%] md1:w-[100%]'>
          {children}
        </div>
        
    </div>
  )
}

export default PictureTextDivider