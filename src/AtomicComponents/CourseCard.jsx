import Link from "next/link";
import Image from "next/image";
import ImageStacked from "./ImageStacked";

const CourseCard = ({ image, title, heading, content, images, enrolled }) => {
  return (
    <>
      <Link href="/" className="sm:flex-grow">
        <div className="border border-[1px] border-[#E6E6E6] cflexbs gap-[0.5em] p-[0.5em] max-w-[16em] min-h-[20em] rounded-xl cursor-pointer shadow-md">
          <div className="w-full flexmm">
            <Image
              src={`${image}.svg`}
              width={100}
              height={100}
              alt={`${image}`}
            />
          </div>
          <div className="py-[0.3em] px-[0.6em] bg-[#F9F5FF] rounded-full font-[400]">
            <p className="text-purplePrime text-[0.6rem]">
              {title}
            </p>
          </div>
          <p className="text-[0.7rem] font-[800] text-[#101828]">
            {heading}
          </p>
          <p className="text-[0.7rem] text-[#667085]">
            {content}
          </p>
          <div className="flexsm gap-[0.5em] pb-[1em]">
            <ImageStacked images={images} />
            <p className="text-[0.7rem] pl-[5.6em] sm:pl-[4.6em]">
              {enrolled}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
