"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { useEffect } from "react";

const NavBar = ({ active = 0, background }) => {
  // const [size, setSize] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setSize(window.innerWidth);
  //   });

  //   window.removeEventListener("resize", () => {
  //     setSize(window.innerWidth);
  //   });
  //   console.log(size);
  // }, [size]);
  const nav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Price",
      link: "/price",
    },
  ];

  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav
        className={`bg-${
          background ? background : "sec6"
        } w-full flex justify-between items-center py-[20px] px-xpadding ${
          showNav && "fixed"
        }`}
      >
        <a href="/" className="w-[14em] sm:w-[11em]">
          <Image src="/homeLogo.svg" width={100} height={100} alt="CSkidz" />
        </a>

        <div className="flex gap-[60px] sm:hidden">
          {nav.map((item, i) => {
            return (
              <a
                href={item.link}
                key={i}
                className={
                  active == i
                    ? "font-[800] text-sec1 text-[16px] lg:text-[14px]"
                    : "text-[16px] font-[600] lg:text-[14px]"
                }
              >
                {item.title}
              </a>
            );
          })}
        </div>

        <div className="w-fit flex gap-6 sm:hidden">
          <a href={"/signup"}>
            <Button className="rounded-full border-2 border-sec1 bg-transparent px-[52px] py-[20px] text-[19px] lg:px-[42px] lg:text-[15px] text-sec1 font-[600]">
              Create Free Account
            </Button>
          </a>

          <a href="/signin">
            <Button className="rounded-full bg-sec1 px-[52px] py-[20px] text-[19px] lg:px-[42px] lg:text-[15px] font-[600] text-white">
              Login
            </Button>
          </a>
        </div>

        <div className="hidden sm:block">
          {showNav ? (
            <HiX
              size={24}
              onClick={() => {
                setShowNav(false);
              }}
            />
          ) : (
            <RiMenuFill
              size={24}
              onClick={() => {
                setShowNav(true);
              }}
            />
          )}
        </div>

        <div
          className={`fixed top-[70px] sm:top-[60px] w-full md:hidden bg-sec6 h-full p-xpadding ${
            showNav ? "left-0" : "left-[100%]"
          } transition-all z-[999]`}
        >
          <div className="flex gap-6 flex-col">
            {nav.map((item, i) => {
              return (
                <a
                  href={item.link}
                  key={i}
                  className={
                    active == i
                      ? "font-[800] text-sec1 text-[0.8em]"
                      : "text-[0.8em]"
                  }
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <div className="w-fit flex gap-6 mt-10">
            <a href={"/signup"}>
              <Button className="rounded-[2em] border-2 border-sec1 bg-transparent px-[2em] py-[0.6em] text-[0.8em] text-sec1 font-[600]">
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
  );
};

export default NavBar;
