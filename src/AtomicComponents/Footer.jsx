import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa"


const Footer = () => {
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
        }
      ]

      const socials = [
        {
            icon: <FaTwitter />,
            link: "/",
        },
        {
            icon: <FaFacebook />,
            link: "/"
        },
        {
            icon: <FaInstagram />,
            link: "/"
        },
        {
          icon: <FaGithub />,
          link: "/"
        }
      ]

      const moreInfo = [
        {
          title: "Headquarters",
          value: "23 Majekodunmi St, Alagbado 102213, Lagos"
        },
        {
          title: "Phone",
          value: "+234 805 988 7668"
        }
      ]
  return (
    <>
    <div className='px-xpadding py-[80px] sm:py-[30px] bg-sec1 text-white flex flex-col gap-5 sm:gap-3'>
        <div className='grid grid-cols-3 sm:grid-cols-none gap-[120px] sm:gap-6 justify-between'>
            <div className='flex flex-col gap-4 sm:gap-[2em]'>
                <Link href={"/"} className='sm:w-[12em]'>
                    <Image src={"logo.svg"} alt="logo" width={'0'} height={"0"}/>
                </Link>
                  
                <div className='text-white flex flex-col gap-6 sm:gap-[2em] text-[0.8rem] sm:text-[1.2rem]'>
                    <p>
                    CuriousKidz is a digital resource website focused on promoting personalized learning and education technology.
                  </p>

                  <div className='cflexss sm:gap-[1rem]'>
                      <p className='font-[700]'>
                          Email:
                      </p>

                      <p>
                          support@curiouskidz.com.ng
                      </p>
                  </div>
                </div>
            </div>

            <div className='flex gap-[30px] sm:gap-[1em] sm:flex-col'>
              {
                nav.map((item, i)=>{
                  return(
                    <Link href={item.link} key={i} className='text-[0.8em] font-[700] sm:font-[600] sm:text-[1.2rem]'>
                      {item.title}
                    </Link>
                  )
                })
              }
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex gap-4'>
              {
                socials.map((social, i)=>{
                  return(
                    <Link key={i} href={social.link}>
                      {social.icon}
                    </Link>
                  )
                })
              }
              </div>

              <div className='flex flex-col gap-3 text-[0.8em] sm:text-[1.2rem]'>
              {
                moreInfo.map((info, i)=>{
                  return(
                    <div className='cflexss sm:gap-[0.8em]' key={i}> 
                      <p className="font-[700]">
                        {info.title}:
                      </p>
                      <p>
                        {info.value}
                      </p>
                    </div>
                  )
                })
              }
            </div>
            </div>
            
        </div>

        <div className='w-full bg-white h-[1px] mt-5 sm:hidden' />
        <p className="text-[0.8em] text-center sm:hidden">
          &copy; Copyright 2023, All Rights Reserved by Curious Kidz
        </p>
    </div>
        
    </>
  )
}

export default Footer