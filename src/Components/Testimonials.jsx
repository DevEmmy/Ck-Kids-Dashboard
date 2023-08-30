import { useState, useEffect } from "react";
import { motion } from "framer-motion"
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
    if(id === 0){
      setNext(true)
      setPrev(false)
    }
    else if(id === ParentRiviews.length-1){
      setNext(false)
      setPrev(true)
    }
    else{
      setNext(true)
      setPrev(true)
    }
  }, [id]);
  return (
    <>
      <div className="bg-[#FAFAFA] w-full cflexsm gap-[3em] sm:gap-[2em] px-xpadding py-[4em] sm:px-[1.5em] sm:py-[2em]">
        <div className="w-full cflexsm sm:items-start gap-[0.5em] font-[400] text-[0.9rem] sm:text-[1.1rem]">
          <p className="font-[700] sm:font-[800] sm:text-[1.7rem] text-[1.5rem] text-[#012B1D]">
            Parent Testimonials
          </p>
          <p className="text-[#333]">
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
          <div className="flexbs gap-[4em] w-full flex-wrap">
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
                if (id !== ParentRiviews.length-1) {
                  setId(id + 1);                  
                } 
              }}
              color={next ? "black" : "gray"}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flexss sm1:justify-center gap-[1em] font-[700] text-[0.8rem] flex-wrap sm1:w-full">
          <Link href="/price" className="sm:flex flex-grow">
            <Button className="border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full sm:w-full">
              <p>Enroll now</p> <ArrowRightOutline size="1em" />
            </Button>
          </Link>
          <Link href="/" className="sm:flex flex-grow">
            <Button className="border-[0.2em] border-sec1 text-sec1 flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full sm:w-full">
              <p>Login as a guest</p>
            </Button>
          </Link>
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
        className="cflexss gap-[1em] w-[30em] flex-grow font-[600] text-[#090914] text-[0.8rem] sm:text-[1rem] leading-[1.7rem] sm:min-h-[25em]">
        <div className="flexmm w-[7em] sm:w-[10em]">
          <Image src={`${star}.svg`} width={100} height={100} alt={`${star}`} />
        </div>
        <p>"{content1}</p>
        <p>{content2}"</p>
        <div className="flexsm gap-[0.5em] w-full">
          <div className="w-[3em]">
            <Image
              src={`${image}.svg`}
              width={100}
              height={100}
              alt={`${image}`}
            />
          </div>
          <p className="font-[800]">{name}</p>
        </div>
      </motion.div>
    </>
  );
};
