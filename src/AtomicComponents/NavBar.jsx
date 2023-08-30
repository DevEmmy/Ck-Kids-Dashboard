'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from "./Button"
import React, { useState } from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { HiX} from 'react-icons/hi'

const NavBar = ({active=0, background}) => {
  const nav = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Contact Us",
      link: "/contact"
    },
    {
      title: "Price",
      link: "/price"
    }
  ] 

  const [showNav, setShowNav] = useState(false)

  return (
    <>
        <nav className={`bg-${background ? background : "sec6"} w-full flex justify-between items-center py-[20px] px-xpadding ${showNav && "fixed"}`}>
            <a href="/" className="w-[12em] sm:w-[11em]">
              <Image src="/homeLogo.svg" width={100} height={100} alt="CSkidz" />
            </a>

            <div className='flex gap-[60px] sm:hidden'>
              {
                nav.map((item, i)=>{
                  return(
                    <a href={item.link} key={i} className={active == i ? "font-[800] text-sec1 text-[0.8em]": "text-[0.8em]"}>
                      {item.title}
                    </a>
                  )
                })
              }
            </div>

            <div className='w-fit flex gap-6 sm:hidden'>
              <a href={"/signup"}>
                <Button className="rounded-[2.2em] border-2 border-sec1 bg-transparent px-[2.5em] py-[1em] text-[0.8em] text-sec1 font-[600]" >
                  Create Free Account
                </Button>
              </a>
              

              <a href="/signin">
               <Button className="rounded-[2em] bg-sec1 px-[2.5em] py-[1em] text-[0.8em] font-[600] text-white">
                Login
              </Button>
              </a>
             
            </div>

            <div className="md:hidden">
              {
                showNav ?
                <HiX size={24} onClick={()=>{setShowNav(false)}}/>
                :
                <RiMenuFill size={24} onClick={()=>{setShowNav(true)}}/>
              }
            </div>

            <div className={`fixed top-[70px] sm:top-[60px] w-full md:hidden bg-sec6 h-full p-xpadding ${showNav? "left-0" : "left-[100%]"} transition-all z-[999]`}             
            >
            <div className='flex gap-6 flex-col'>
              {
                nav.map((item, i)=>{
                  return(
                    <a href={item.link} key={i} className={active == i ? "font-[800] text-sec1 text-[0.8em]": "text-[0.8em]"}>
                      {item.title}
                    </a>
                  )
                })
              }
            </div>

            <div className='w-fit flex gap-6 mt-10'>
              <a href={"/signup"}>
                <Button className="rounded-[2em] border-2 border-sec1 bg-transparent px-[2em] py-[0.6em] text-[0.8em] text-sec1 font-[600]" >
                  Create Free Account
                </Button>
              </a>
              

              <a href="/signin">
               <Button className="rounded-[2em] bg-sec1 px-[2.5em] py-[0.7em] text-[0.8em] font-[600] text-white">
                Login
              </Button>
              </a>
             
            </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar