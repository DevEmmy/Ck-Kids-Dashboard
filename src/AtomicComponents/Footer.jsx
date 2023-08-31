import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const nav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];

  const socials = [
    {
      icon: <FaTwitter />,
      link: "/",
    },
    {
      icon: <FaFacebook />,
      link: "/",
    },
    {
      icon: <FaInstagram />,
      link: "/",
    },
    {
      icon: <FaGithub />,
      link: "/",
    },
  ];

  const moreInfo = [
    {
      title: "Headquarters",
      value: "23 Majekodunmi St, Alagbado 102213, Lagos",
    },
    {
      title: "Phone",
      value: "+234 805 988 7668",
    },
  ];
  return (
    <>
      <div className="px-xpadding py-[80px] sm:py-[30px] bg-sec1 text-white flex flex-col gap-5 sm:gap-3">
        <div className="flexbs sm:gap-6 font-[400] sm:flex-wrap">
          <div className="flex w-[297px] sm:w-full flex-col gap-[30px] sm:gap-[15px]">
            <a href={"/"} className="w-[175px] sm:w-[12em]">
              <img src={"logo.svg"} alt="logo" />
            </a>

            <div className="text-white flex flex-col gap-6 sm:gap-[2em] text-[16px] sm:text-[20px]">
              <p>
                CuriousKidz is a digital resource website focused on promoting
                personalized learning and education technology.
              </p>

              <div className="cflexss gap-[6px] sm:gap-[1rem]">
                <p className="font-[700] text-[20px]">Email:</p>

                <p>support@curiouskidz.com.ng</p>
              </div>
            </div>
          </div>

          <div className="flex gap-[30px] sm:gap-[1em] sm:flex-col">
            {nav.map((item, i) => {
              return (
                <a
                  href={item.link}
                  key={i}
                  className="text-[16px] font-[600] sm:text-[20px]"
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-[12px]">
              {socials.map((social, i) => {
                return (
                  <a key={i} href={social.link}>
                    {social.icon}
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-[10px] text-[16px] sm:text-[20px]">
              {moreInfo.map((info, i) => {
                return (
                  <div className="cflexss gap-[10px] sm:gap-[0.8em]" key={i}>
                    <p className="font-[700] text-[20px]">{info.title}:</p>
                    <p>{info.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full bg-white h-[1px] mt-5 sm:hidden" />
        <p className="text-[0.8em] text-center sm:hidden">
          &copy; Copyright 2023, All Rights Reserved by Curious Kidz
        </p>
      </div>
    </>
  );
};

export default Footer;
