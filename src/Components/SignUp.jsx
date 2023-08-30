import { useState, useEffect } from "react";
import StudentAccount from "./StudentAccount";
import SchoolAccount from "./SchoolAccount";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  const [accountType, setAccountType] = useState("none");
  return (
    <>
      <div className="w-full h-[100vh] flexss flex-wrap">
        <div className={`w-[45%] h-full ${accountType === "institution" ? "bg-purplePrime" : "bg-sec1"} pt-[3em] sm:py-[2em] pb-[8em] px-[5em] text-sec2 sm:px-[1.5em] md1:w-full`}>
          <div className="cflexss gap-[1.5em]">
            <Link href="/" className="w-[15em] sm:w-[12em]">
              <Image src="logo.svg" width={100} height={100} alt="CSkidz" />
            </Link>
            <div>
              <h1 className="text-[2.3rem] sm:text-[1.8rem] font-[800]">
                Welcome to CuriousKidz!
              </h1>
              <p className="text-sm sm:text-[1rem] font-[400] pt-[0.5em] leading-[1.7em]">
                By creating an account, you gain access to a diverse range of
                engaging courses, interactive lessons, and hands-on projects
                designed to inspire young minds. Let's nurture curiosity and
                ignite a passion for learning together!
              </p>
            </div>
            <div className="cflexss gap-[1.3em] pt-[7em] sm:pt-[2em] text-sm sm:text-[1rem] font[600] leading-[1.7em]">
              <div className="w-[7em] sm:w-[8em]">
                <Image src="Review.svg" width={100} height={100} alt="review" />
              </div>
              <p>
                "My daughter's experience with CuriousKidz has been nothing
                short of amazing! She used to find science and math daunting,
                but with the interactive lessons and engaging projects, she's
                now excelling in these subjects.
              </p>
              <p>
                The program not only boosted her academic performance but also
                instilled confidence in her abilities. Thank you, CuriousKidz,
                for unlocking her potential!"
              </p>
              <div className="flexsm gap-[0.5em] w-full">
                <div className="w-[3em]">
                  <Image
                    src="estbg.svg"
                    width={100}
                    height={100}
                    alt="profile"
                  />
                </div>
                <p className="font-[800]">Esther Howard</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[55%] h-full bg-white py-[3em] sm:py-[2em] pl-[6em] pr-[7em] sm:px-[1.5em] md1:w-full">
          {accountType === "none" && (
            <>
              <div className="cflexmm gap-[2em] w-full py-[3em]">
                <div
                  className="w-[25em] h-[16em] sm:w-full p-[0.1em] pb-[0.3em] rounded-xl bg-sec1 cursor-pointer"
                  onClick={() => {
                    setAccountType("student");
                  }}
                >
                  <div className="w-full h-full bg-white flexmm text-[1.2rem] font-[700] rounded-xl">
                    <p>Student</p>
                  </div>
                </div>
                <div
                  className="w-[25em] h-[16em] sm:w-full p-[0.1em] pb-[0.3em] rounded-xl bg-purplePrime cursor-pointer"
                  onClick={() => {
                    setAccountType("institution");
                  }}
                >
                  <div className="w-full h-full bg-white flexmm text-[1.2rem] font-[700] rounded-xl">
                    <p>Schools / Institutions</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {accountType === "student" && <StudentAccount setAccountType={setAccountType}/>}
          {accountType === "institution" && <SchoolAccount setAccountType={setAccountType}/>}
        </div>
      </div>
    </>
  );
};

export default SignUp;
