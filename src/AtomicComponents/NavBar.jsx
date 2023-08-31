"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { HiX } from "react-icons/hi";

const NavBar = ({ active = 0, background }) => {
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
      <div
        className={`bg-${
          background ? background : "sec6"
        } w-full flex justify-between items-center py-[20px] px-xpadding ${
          showNav && "fixed"
        }`}
      >
        <a href="/" className="w-[14em] sm:w-[11em]">
          <img src="/homeLogo.svg" alt="CSkidz" />
        </a>

        <div className="flexmm gap-[60px] lf:hidden">
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

        <div className="w-fit flex gap-6 lf:hidden">
          <a href={"/signup"}>
            <Button className="rounded-full border-2 border-sec1 bg-transparent px-[52px] py-[20px] text-[19px] lg:px-[42px] lg:text-[15px] ls:px-[35px] ls:py-[18px] text-sec1 font-[600]">
              Create Free Account
            </Button>
          </a>

          <a href="/signin">
            <Button className="rounded-full bg-sec1 px-[52px] py-[20px] text-[19px] lg:px-[42px] lg:text-[15px] font-[600] ls:px-[35px] ls:py-[18px] text-white">
              Login
            </Button>
          </a>
        </div>

        <div className="hidden lf:block">
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
          className={`fixed top-[70px] sm:top-[60px] w-full bg-sec6 h-full p-xpadding ${
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
      </div>
    </>
  );
};

export default NavBar;
