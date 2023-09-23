import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/AtomicComponents/Button";
import { ArrowRightOutline, ChevronLeft, ChevronRight } from "heroicons-react";
const ParentRiviews = [
  {
    star: "5star",
    content1:
      "My daughter's experience with CuriousKidz has been nothing short of amazing! She used to find science and math daunting, but with the interactive lessons and engaging projects, she's now excelling in these subjects.",
    content2:
      "The program not only boosted her academic performance but also instilled confidence in her abilities. Thank you, CuriousKidz, for unlocking her potential!",
    image: "estbg",
    name: "Esther Howard",
  },
  {
    star: "5star",
    content1:
      "As a parent, seeing my son enthusiastic about learning is the greatest joy. Since enrolling in the Drawing and Painting Mastery course, his creativity has blossomed.",
    content2:
      "The personalized feedback from the instructors has been instrumental in his growth as an artist. The progress he's made is evident in the beautiful artworks he creates. CuriousKidz, you've made a lasting impact on his artistic journey!",
    image: "RonaldRichard",
    name: "Ronald Richards",
  },
  {
    star: "4star",
    content1:
      "CuriousKidz's History Adventures course has been a game-changer for my son's academic journey. He was struggling with history, finding it dull and hard to comprehend. However, with the engaging videos and interactive quizzes, he's developed a deep interest in historical events and personalities",
    content2:
      "Now, he often shares fascinating historical facts with us, and his grades have significantly improved. Thank you, CuriousKidz, for making history come alive!",
    image: "leslie",
    name: "Leslie Alexander",
  },
  {
    star: "3halfStar",
    content1:
      "Enrolling our daughter in the Arts and Crafts Extravaganza was the best decision we made! She has always been a creative soul, but this course has taken her crafting skills to a whole new level. The projects are diverse and well-structured, allowing her to explore various artistic techniques.",
    content2:
      "Not only has she grown artistically, but she's also more confident in expressing her ideas. We're grateful to CuriousKidz for nurturing her imagination and boosting her self-esteem!",
    image: "dianne",
    name: "Dianne Russell",
  },
];

const Testimonials = () => {
  const [id, setId] = useState(0);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  useEffect(() => {
    if (id === 0) {
      setNext(true);
      setPrev(false);
    } else if (id === ParentRiviews.length - 1) {
      setNext(false);
      setPrev(true);
    } else {
      setNext(true);
      setPrev(true);
    }
  }, [id]);
  return (
    <>
      <div className="bg-sec6 w-full cflexsm gap-[3em] sm:gap-[2em] sm1:pb-[2em] flex-wrap px-xpadding py-[4em] sm:px-[1.5em] sm:py-[2em]">
        <div className="relative w-[40em] md:w-full text-center cflexsm sm:items-start gap-[16px] font-[400] text-[20px] lg:text-[17px] ls:text-[15px] sm:text-[1.1rem]">
          <div className="flexmm absolute top-[-40px] sm:top-[-30px] sm:bottom-auto right-[-130px] w-[60px] sm:w-[40px] sm:right-[50px]">
            <img src={"/lst0.svg"} alt="lst0" />
          </div>
          <div className="block flexmm absolute bottom-0 left-[-150px] w-[60px] sm:hidden">
            <img src={"/goldCr.svg"} alt="goldCrown" />
          </div>
          <p className="font-[800] sm:text-[30px] text-[30px] lg:text-[28px] text-[#012B1D]">
            Parent Testimonials
          </p>
          <p className="text-[#333] font-[600]">
            Hear from parents whose children have experienced the magic of
            CuriousKidz. See the impact on their confidence and academic growth.
          </p>
        </div>
        <div className="block flexbs gap-[4em] w-full flex-wrap sm:hidden">
          {ParentRiviews.map((review, i) => {
            return (
              <>
                <Reviews {...review} key={i} />
              </>
            );
          })}
        </div>
        <div className="hidden sm:block w-full">
          <div className="flexbs gap-[4em] w-full md:flex-wrap">
            {ParentRiviews.map((review, i) => {
              return <>{i == id && <Reviews {...review} key={i} />}</>;
            })}
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flexmm w-full gap-[1em] pt-[2em]">
            <ChevronLeft
              onClick={() => {
                if (id !== 0) {
                  setId(id - 1);
                }
              }}
              color={prev ? "black" : "gray"}
              className="cursor-pointer"
            />

            <ChevronRight
              onClick={() => {
                if (id !== ParentRiviews.length - 1) {
                  setId(id + 1);
                }
              }}
              color={next ? "black" : "gray"}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="relative flexss sm1:justify-center gap-[1em] font-[600] text-[19px] lg:text-[15px] flex-wrap sm1:w-full">
          <div className="block flexmm absolute right-[-250px] top-[-10px] w-[80px] sm:hidden">
            <img src={"/cloudL.svg"} alt="cloud" />
          </div>
          <a href="/price" className="sm:flex flex-grow">
            <Button className="border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[10px] px-[52px] py-[20px] lg:px-[42px] rounded-full sm:w-full">
              <p>Enroll now</p> <ArrowRightOutline size="1em" />
            </Button>
          </a>
          <a href="/" className="sm:flex flex-grow">
            <Button className="border-[1px] border-sec1 text-sec1 flexmm px-[52px] py-[20px] rounded-full sm:w-full">
              <p>Login as a guest</p>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

const Reviews = (props) => {
  const { star, content1, content2, image, name } = props;
  const graduallyAppear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={graduallyAppear}
        initial="hidden"
        animate="visible"
        className="cflexss gap-[20px] w-[45%] md:w-full font-[600] text-[#090914] text-[16px] sm:text-[20px] leading-[28px] sm:min-h-[25em]"
      >
        <div className="flexmm w-[130px] sm:w-[140px]">
          <img src={`${star}.svg`} alt={`${star}`} />
        </div>
        <p>"{content1}</p>
        <p>{content2}"</p>
        <div className="flexsm gap-[0.5em] w-full">
          <div className="w-[44px]">
            <img src={`${image}.svg`} alt={`${image}`} />
          </div>
          <p className="font-[800]">{name}</p>
        </div>
      </motion.div>
    </>
  );
};
