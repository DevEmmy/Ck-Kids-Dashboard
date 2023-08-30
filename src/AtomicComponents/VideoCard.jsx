import Link from "next/link";
import Image from "next/image";
import ImageStacked from "./ImageStacked";

const VideoCard = ({ image, title, heading, content, author, images, enrolled }) => {
  return (
    <>
      <Link href="/" className="sm:flex-grow">
        <div className=" border-[1px] border-[#E6E6E6] cflexss gap-[0.5em] p-[0.5em] w-[16em] min-h-[25em] rounded-xl cursor-pointer sm:w-full">
          <div className="w-full flexmm">
            <Image
              src={`${image}.svg`}
              width={100}
              height={100}
              alt={`${image}`}
            />
          </div>
          <div className="py-[0.3em] px-[0.6em] bg-[#F9F5FF] text-purplePrime text-[0.7rem] sm:text-[0.9rem] rounded-full font-[400]">
            {title}
          </div>
          <p className="text-[1rem] sm:text-[1.3rem] font-[700] text-[#101828]">{heading}</p>
          <p className="text-[0.8rem] sm:text-[1.1rem] text-[#667085]">{content}</p>
          <p className="text-[0.7rem] sm:text-[0.9rem] text-purplePrime font-[600]">{author}</p>
          <div className="flexsm gap-[0.5em] sm:py-[1em]">
            <ImageStacked images={images} />
            <p className="text-[0.7rem] sm:text-[0.9rem] pl-[5.6em] sm:pl-[4.6em]">{enrolled}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
