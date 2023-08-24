import Image from 'next/image'
import React from 'react'
import { FiArrowDown, FiBell, FiChevronDown, FiGrid } from "react-icons/fi"
import {BsChatSquareText} from "react-icons/bs"
import { GiChatBubble, GiGraduateCap, GiTrophy } from "react-icons/gi"
import Link from 'next/link'

const Nav = ({active = 0}) => {

    
    const navItems = [
        {
            name: "Overview",
            icon: <FiGrid color="white" size={15}/>,
            baseColor: "bg-[#F5AE1E]",
            color: "bg-[#FAD68E]",
            link: "/"
        },
        {
            name: "Courses",
            icon: <GiGraduateCap color="white" size={15}/>,
            baseColor: "bg-[#00AC76]",
            color: "bg-[#80D5BA]",
            link: "/courses"
        },
        {
            name: "Messages",
            icon: <BsChatSquareText color="white" size={15}/>,
            baseColor: "bg-[#8D67CE]",
            color: "bg-[#C6B3E6]",
            link: "/messages"
        },
        {
            name: "Leadership",
            icon: <GiTrophy color="white" size={15}/>,
            baseColor: "bg-[#FE5972]",
            color: "bg-[#FEACB8]",
            link: "/leadership-board"
        }
    ]
  return (
    <div className='flex px-xPadding items-center justify-between mt-[10px] border-b-gray-300 border-b pb-[20px]'>
        <Image src="/logo.svg" width={0} height={0} alt="logo" className='w-[20%] h-[auto]'/>

        <div className='flex gap-[30px] w-[50%]'>
             {
            navItems.map((item, index)=>{
                return(
                    <Link key={index} href={item.link}>
                        <div className={`flex items-center gap-[5px] p-[10px] rounded-lg cursor-pointer ${active === index && item.color}`}>
                            <span className={`p-[5px] rounded-md ${item.baseColor}`}>{item.icon}</span>
                            <p className='text-[0.8em]'>{item.name}</p>
                        </div>
                    </Link>
                    
                )
            })
        }
        </div>
       
        <div className='flex items-center gap-[20px]'>
            <div className='cursor-pointer border rounded-md p-2'>
                <FiBell />
            </div>

            <div className='flex gap-[7px] items-center cursor-pointer'>
                <img src="https://www.looper.com/img/gallery/inosukes-powers-from-demon-slayer-explained/intro-1620465501.jpg" className='w-10 h-10 object-cover rounded-md'/>
                <FiChevronDown />
            </div>
        </div>

    </div>
  )
}

export default Nav