import React from "react";
import NavBar from "@/AtomicComponents/NavBar";
import Button from "@/AtomicComponents/Button";
import CheckCircle from "@/AtomicComponents/CheckCircle";
import Courses from "@/AtomicComponents/Courses";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Image from "next/image";
import { ArrowRightOutline } from "heroicons-react";
import Link from "next/link";
import Testimonials from "./Testimonials";
import Footer from "@/AtomicComponents/Footer";

const LandingPage = () => {
  const CoursesD = [
    {
      image: "film",
      background: "#F5AE1E",
      text: "Film & Animation",
    },
    {
      image: "automotive",
      background: "#8D67CE",
      text: "Autos & Vehicles",
    },
    {
      image: "gaming",
      background: "#FE5972",
      text: "Gaming",
    },
    {
      image: "travel",
      background: "#00AC76",
      text: "Travel & Events",
    },
  ];
  return (
    <>
      <NavBar active={0} />
      <div className="flexbm px-xpadding bg-sec6 py-[6em] text-[20px] lg:text-[17px] lg:py-[5em] sm:px-[1.5em] sm1:pb-[2em] sm:pt-[0em] flex-wrap">
        <div className="cflexms font-[600] gap-[32px] text-sec5 md:gap-[1em] w-[35em] flex-grow pb-[2em]">
          <h1 className="font-[800] text-[52px] lg:text-[45px] sm:text-[1.7rem]">
            Unlock Your Child's Potential through{" "}
            <span className="text-sec1">Innovative Education</span>
          </h1>
          <p className="sm:text-[1rem] sm:text-justify leading-[150%]">
            We believe that education should be exciting, engaging, and filled
            with boundless possibilities. We are a leading educational platform
            that sparks curiosity, fosters creativity, and inspires young minds
            to explore the wonders of the world.
          </p>
          <div className="flexss sm1:justify-center gap-[1em] font-[600] text-[19px] lg:text-[15px] flex-wrap sm1:w-full">
            <Link href="/price" className="sm:flex flex-grow">
              <Button className="border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] rounded-full sm:w-full">
                <p>Enroll now</p> <ArrowRightOutline size="1em" />
              </Button>
            </Link>
            <Link href="/" className="sm:flex flex-grow">
              <Button className="border-[1px] border-sec1 text-sec1 flexmm px-[52px] py-[20px] rounded-full sm:w-full">
                <p>Login as a guest</p>
              </Button>
            </Link>
          </div>
          <div className="flexsm gap-[1em] flex-wrap sm:text-[1.1rem]">
            <div className="flexsm gap-[0.5em]">
              <CheckCircle
                className="flexmm w-[18px] h-[18px] rounded-full bg-sec1 "
                size="14px"
              />
              <p>Experienced mentor</p>
            </div>
            <div className="flexsm gap-[0.5em]">
              <CheckCircle
                className="flexmm w-[18px] h-[18px] rounded-full bg-sec1 "
                size="14px"
              />
              <p>Quality videos</p>
            </div>
            <div className="flexsm gap-[0.5em]">
              <CheckCircle
                className="flexmm w-[18px] h-[18px] rounded-full bg-sec1 "
                size="14px"
              />
              <p>Affordable prices</p>
            </div>
          </div>
        </div>

        <div className="flexes w-[37em] md1:w-full md1:justify-center flex-shrink">
          <div className="flexmm w-[85%] sm:w-[100%]">
            <Image
              src="/boyImage.svg"
              width={100}
              height={100}
              alt="boyImage"
            />
          </div>
        </div>
      </div>

      <div className="flexbm px-xpadding bg-[#FAFAFA] py-[6em] text-[20px] lg:text-[17px] lg:py-[5em] sm:px-[1.5em] sm1:pb-[2em] sm:pt-[0em] flex-wrap">
        <div className="cflexms gap-[24px] w-[35em] pt-[2em] flex-grow">
          <h1 className="font-[800] text-[36px] sm:text-[1.7rem] sm:w-[10em]">
            Why Choose CuriousKidz?
          </h1>
          <div className="flexss gap-[0.5em]">
            <div className="flexmm w-[5em] sm:w-[10em]">
              <Image
                src="innovative.svg"
                width={100}
                height={100}
                alt="innovative"
              />
            </div>
            <p>
              <span className="font-[800] leading-[34px]">Innovative Learning: </span>We blend
              education with entertainment, making learning a fun and exciting
              adventure. Through interactive lessons and hands-on experiences,
              we ensure that every child stays engaged and enthusiastic about
              exploring new concepts.
            </p>
          </div>
          <div className="flexss gap-[0.5em] leading-[34px]">
            <div className="flexmm w-[6em]  sm:w-[10em]">
              <Image src="steam.svg" width={100} height={100} alt="steam" />
            </div>
            <p>
              <span className="font-[800]">STEAM Enthusiasm: </span> Our
              STEAM-focused approach allows children to delve into the worlds of
              Science, Technology, Engineering, Arts, and Mathematics. From
              coding and robotics to art and astronomy, we offer a diverse range
              of disciplines to ignite their interests.
            </p>
          </div>
          <div className="flexss gap-[0.5em] leading-[34px]">
            <div className="flexmm w-[5em] sm:w-[10em]">
              <Image
                src="educators.svg"
                width={100}
                height={100}
                alt="educators"
              />
            </div>
            <p>
              <span className="font-[800]">Qualified Educators: </span>Qualified
              Educators: Our team of passionate educators are experts in their
              fields, dedicated to inspiring and mentoring curious young minds.
              With their guidance, your child will reach their full potential
              and develop critical thinking skills.
            </p>
          </div>
          <div className="flexss sm1:justify-center font-[600] text-[19px] lg:text-[15px] flex-wrap sm1:w-full">
            <Link href="/price" className="sm:flex flex-grow">
              <Button className="border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] rounded-full sm:w-full">
                <p>Enroll now</p> <ArrowRightOutline size="1em" />
              </Button>
            </Link>           
          </div>          
        </div>

        <div className="flexes w-[35em] md1:w-full md1:justify-center flex-shrink">
          <div className="flexmm w-[82%] sm:w-[100%]">
            <Image
              src="/girlImage.svg"
              width={100}
              height={100}
              alt="girlImage"
            />
          </div>
        </div>
      </div>

      <div className="bg-white cflexss gap-[4em] sm:gap-[1.5em] px-xpadding py-[6em] text-[20px] lg:text-[17px] lg:py-[5em] sm:px-[1.5em] sm1:pb-[2em]">
        <h1 className="align-center sm:justify-start w-full flexmm font-[800] text-[36px]">
          What We Offer:
        </h1>
        <div className="flexbm w-full sm:flex-wrap font-[400]">
          <div className="border-r-2 cflexss gap-[22px] w-[33%] px-[2em] sm:w-full sm:px-0 md1:border-0">
            <div className="flexmm text-white bg-sec1 w-[35px] h-[35px] rounded-[10px] font-[800] text-[16px]">
              1
            </div>
            <p className="font-[700]">Curiosity-Driven Programs:</p>
            <p className="text-[#52525B]">
              Our programs encourage children to ask questions, think
              critically, and find solutions. We foster a love for learning that
              goes beyond the classroom.
            </p>
          </div>
          <div className="border-r-2 cflexss gap-[22px] w-[33%] px-[2em] sm:w-full sm:px-0 md1:border-0">
            <div className="flexmm text-white bg-sec1 w-[35px] h-[35px] rounded-[10px] font-[800] text-[16px]">
              2
            </div>
            <p className="font-[700]">Hands-On Exploration:</p>
            <p className="text-[#52525B]">
              Through interactive projects and experiments, kids gain practical
              experience and see real-world applications of the concepts they
              learn.
            </p>
          </div>
          <div className="cflexss gap-[22px] w-[33%] px-[2em] sm:w-full sm:px-0 md1:border-0">
            <div className="flexmm text-white bg-sec1 w-[35px] h-[35px] rounded-[10px] font-[800] text-[16px]">
              3
            </div>
            <p className="font-[700]">Safe and Engaging Environment:</p>
            <p className="text-[#52525B]">
              CuriousKidz provides a secure online platform where children can
              connect with peers, collaborate, and share their discoveries.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] cflexss gap-[5em] sm:gap-[2em] py-[5em] px-xpadding sm:px-[1.5em] sm:py-[2em] text-[0.8rem]">
        <div className="w-full cflexmm gap-[1em] font-[400] text-[0.9rem] sm:text-[1.1rem]">
          <h1 className="w-full flexmm sm:justify-start font-[800] text-[1.5rem] text-[#012B1D]">
            Explore Our Programs:
          </h1>
          <p className="max-w-[40em] flex-shrink text-center sm:text-start">
            Browse through our exciting range of courses designed to cater to
            various age groups and interests. From 3D printing to astronomy,
            there's something for every curious kid!
          </p>
        </div>
        <div className="flexmm w-full sm:gap-[1em] gap-[2em] flex-wrap">
          {CoursesD.map((course, i) => {
            return (
              <>
                <Courses
                  background={course.background}
                  image={course.image}
                  text={course.text}
                  key={i}
                />
              </>
            );
          })}
          <div className="cflexss sm1:flex-row gap-[0.5em] text-[1rem] cursor-pointer">
            <div className="bg-sec7 w-[1.5em] h-[1.5em] rounded-full flexmm">
              <ArrowRightOutline size="1em" color="white" />
            </div>
            <p>See more</p>
          </div>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
