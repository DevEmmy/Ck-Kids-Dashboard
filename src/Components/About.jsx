import Button from "@/AtomicComponents/Button";
import Footer from "@/AtomicComponents/Footer";
import NavBar from "@/AtomicComponents/NavBar";
import PictureTextDivider from "@/AtomicComponents/PictureTextDivider";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <NavBar active={1} />

      <PictureTextDivider
        imageUrl={"/about-1.jpeg"}
        bgColor="bg-sec6"
        imageClassNames={
          "w-[100%] rounded-[1.5em] margin-auto object-cover h-[100%]"
        }
        imageContainerClassNames={
          "h-[674px] lg:h-[650px] ls:h-[620px] sm:h-[500px] p-[10px] bg-white rounded-[1.8em]"
        }
        imageFirst={true}
      >
        <div className="flex flex-col font-sans font-[400] gap-[32px] sm:gap-[0.5em] leading-[1.7em] text-[20px] lg:text-[17px] ls:text-[16px] text-[#333]">
          <p className="text-[24px] sm:font-[700] sm:text-[17px]  ">About Us</p>

          <h3 className="text-[40px] lg:text-[35px] ls:text-[30px] sm:text-[28px] leading-[150%] font-[700] sm:font-[800] text-sec1 sm:leading-[1.5em]">
            Unleashing Curiosity and Empowering Young Minds
          </h3>

          <p>
            Welcome to CuriousKidz, an innovative educational method that
            bridges the gap between conventional education and the exciting
            world of STEAM (Science, Technology, Engineering, Arts, and
            Mathematics).
          </p>

          <p>
            At CuriousKidz, we believe that every young mind holds boundless
            potential, waiting to be unleashed through curiosity, creativity,
            and problem-solving skills.
          </p>

          <div className="flexss sm1:justify-center gap-[10px] font-[600] text-[19px] lg:text-[15px] ls:text-[14px] flex-wrap sm:pt-[1em] sm1:w-full">
            <a href="/pricing" className="sm:flex-grow">
              <Button className="w-full border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
                <p>Enroll now</p> <FaArrowRight size="1em" />
              </Button>
            </a>
            <a href="/" className="sm:flex-grow">
              <Button className="w-full border-[1px] border-sec1 text-sec1 flexmm px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
                <p>Login as a guest</p>
              </Button>
            </a>
          </div>
        </div>
      </PictureTextDivider>

      <PictureTextDivider
        imageUrl={"/about-2.png"}
        bgColor={"bg-transparent"}
        imageContainerClassNames={
          "bg-primary2 p-[2px] pr-[20px] pb-[20px] sm:pr-[15px] sm:pb-[15px] sm:rounded-[30px] rounded-[40px]"
        }
        imageFirst={false}
      >
        <div className="flex flex-col font-[400] gap-[32px] sm:gap-[0.5em] leading-[1.7em] text-[20px] lg:text-[17px] ls:text-[16px] text-[#333] sm:pt-[2em]">
          <h3 className="text-[36px] lg:text-[32px] ls:text-[30px] sm:text-[28px] leading-[150%] font-[700] sm:font-[800] text-sec1 sm:leading-[1.5em]">
            Our Vision
          </h3>

          <p>
            Our vision is to empower young learners in Nigeria and beyond with
            the tools they need to excel in rare and high-paying disciplines.
          </p>

          <p>
            The STEAM program at CuriousKidz is meticulously designed to engage
            young minds in conventional education settings, while simultaneously
            igniting a passion for innovation and exploration.
          </p>
        </div>
      </PictureTextDivider>

      <div className="bg-[#FAFAFA]">
        <PictureTextDivider
          imageUrl={"/about-3.png"}
          bgColor={"bg-transparent"}
          imageContainerClassNames={
            "bg-primary1 p-[2px] pl-[20px] pb-[20px] sm:pl-[15px] sm:pb-[15px] sm:rounded-[30px] rounded-[40px]"
          }
          imageFirst={true}
        >
          <div className="flex flex-col font-[400] gap-[32px] sm:gap-[0.5em] leading-[1.7em] pt-[2em] text-[20px] lg:text-[17px] ls:text-[16px] text-[#333]">
            <h3 className="text-[36px] lg:text-[32px] ls:text-[30px] sm:text-[28px] leading-[150%] font-[700] sm:font-[800] text-primary1 sm:leading-[1.5em]">
              Overcoming Challenges
            </h3>

            <p>
              In Nigeria, we recognize two major factors that hinder the
              progress of the STEM/STEAM program: cost and limited engaging
              environments. Creating enriching experiences like acoustically
              friendly music labs, fully tooled technical workshops, and 3D
              printers can be expensive.
            </p>

            <p>
              These resources are often readily available in developed
              societies, making it easier for children in those regions to
              explore fields like aerospace, astronomy, robotics, computer
              programming, and systems theory.
            </p>
            <Link href="/pricing" className="flex-grow">
              <Button
                className={
                  "flex items-center w-fit gap-[10px] rounded-full px-[2.5em] py-[1em] text-white bg-primary1 sm:w-full sm:justify-center"
                }
              >
                <p>Enroll now</p> <FaArrowRight />
              </Button>
            </Link>
          </div>
        </PictureTextDivider>
      </div>

      <PictureTextDivider
        imageUrl={"/about-4.png"}
        bgColor={"bg-transparent"}
        imageClassNames={
          "w-[100%] rounded-[1.5em] margin-auto object-cover h-[100%]"
        }
        imageContainerClassNames={
          "h-[680px] lg:h-[640px] ls:h-[600px] sm:h-[500px] bg-primary3 p-[2px] pr-[20px] pb-[20px] sm:pr-[15px] sm:pb-[15px] sm:rounded-[30px] rounded-[40px]"
        }
        imageFirst={false}
      >
        <div className="flex flex-col font-[400] gap-[32px] sm:gap-[0.5em] leading-[1.7em] text-[20px] lg:text-[17px] ls:text-[16px] text-[#333] pt-[2em]">
          <h3 className="text-[36px] lg:text-[32px] ls:text-[30px] sm:text-[28px] leading-[150%] font-[700] sm:font-[800] text-primary3 sm:leading-[1.5em]">
            Fostering Curiousity, Curbing Boredom
          </h3>

          <p>
            We understand that traditional instructional methods can leave young
            minds feeling bored and disconnected from their studies. To address
            this, CuriousKidz leverages mediums like TV, movies, and the
            internet – platforms that naturally captivate children's attention.
          </p>

          <p>
            We firmly believe that by incorporating these mediums into the
            learning process, we can create an engaging, research-based,
            peer-to-peer learning environment.
          </p>
        </div>
      </PictureTextDivider>

      <div className="bg-[#FAFAFA]">
        <PictureTextDivider
          imageUrl={"/about-5.png"}
          imageFirst={true}
          imageContainerClassNames={
            "bg-primary4 p-[2px] pl-[20px] pb-[20px] sm:pl-[15px] sm:pb-[15px] sm:rounded-[30px] rounded-[40px]"
          }
        >
          <div className="flex flex-col font-[400] gap-[32px] sm:gap-[0.5em] leading-[1.7em] text-[20px] lg:text-[17px] ls:text-[16px] text-[#333] pt-[2em]">
            <h3 className="text-[36px] lg:text-[32px] ls:text-[30px] sm:text-[28px] leading-[150%] font-[700] sm:font-[800] text-primary4 sm:leading-[1.5em]">
              Nuturing a Passion for Knowledge
            </h3>

            <p className="text-[1.0em]">
              Our platform is specifically designed to drive creativity,
              encourage self-driven research, and instill a thirst for advanced
              sciences and arts.
            </p>

            <p className="text-[1.0em]">
              By seamlessly integrating real-world applications and
              purpose-driven knowledge from conventional subjects, we create a
              dynamic educational experience that empowers students to flourish
              academically and personally.
            </p>
          </div>
        </PictureTextDivider>

        <PictureTextDivider
          imageUrl={"/about-6.png"}
          imageFirst={false}
          imageContainerClassNames={
            "bg-primary2 p-[2px] pr-[20px] pb-[20px] sm:pr-[15px] sm:pb-[15px] sm:rounded-[30px] rounded-[40px]"
          }
        >
          <div className="flex flex-col font-[400] gap-[32px] sm:gap-[0.5em] leading-[1.7em] text-[20px] lg:text-[17px] ls:text-[16px] text-[#333] pt-[2em]">
            <h3 className="text-[36px] lg:text-[32px] ls:text-[30px] sm:text-[28px] leading-[150%] font-[700] sm:font-[800] text-sec1 sm:leading-[1.5em]">
              Our Commitment
            </h3>

            <p className="text-[1.0em]">
              At CuriousKidz, we are committed to cultivating a generation of
              young learners who possess a genuine love for knowledge. By
              providing an entertaining and insightful approach to learning, we
              aim to inspire students to reach for the stars and pursue advanced
              disciplines in higher education.
            </p>

            <p className="text-[1.0em]">
              Join us on this thrilling journey of discovery and growth.
              Together, let's unlock the potential within each young mind,
              nurturing curious minds that will shape the future of our world.
            </p>
            <div className=" block flexsm gap-3 text-[0.8em] font-[700] sm:items-start pt-[1em] sm:w-full flex-wrap sm:hidden">
              <a href="/pricing" className="flex-grow">
                <Button className="w-full border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
                  <p>Enroll now</p> <FaArrowRight size="1em" />
                </Button>
              </a>
              <a href="/" className="flex-grow">
                <Button className="w-full border-[1px] border-sec1 text-sec1 flexmm px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
                  <p>Login as a guest</p>
                </Button>
              </a>
            </div>
          </div>
        </PictureTextDivider>
        <div className="hidden sm:block w-full sm:px-xpadding">
          <div className="flexss sm1:justify-center gap-[10px] font-[600] text-[19px] lg:text-[15px] ls:text-[14px] flex-wrap bg-[#FAFAFA] pb-[5em] sm1:w-full">
            <a href="/pricing" className="flex-grow">
              <Button className="w-full border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
                <p>Enroll now</p> <FaArrowRight size="1em" />
              </Button>
            </a>
            <a href="/" className="flex-grow">
              <Button className="w-full border-[1px] border-sec1 text-sec1 flexmm px-[52px] py-[20px] lg:px-[42px] ls:px-[30px] rounded-full sm:w-full">
                <p>Login as a guest</p>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
