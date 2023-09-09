import Link from "next/link";
import Image from "next/image";
import ImageStacked from "./ImageStacked";

const CourseCard = ({
  image,
  title,
  heading,
  content,
  images,
  enrolled,
  link = "/",
  size,
}) => {
  return (
    <>
      <a
        href={link}
        className="min-w-[340px] lg:min-w-[300px] ls:min-w-[280px] sm:w-full sm:flex-grow"
      >
        <div className="w-full hover:border-primary2 hover:border-[1px] border-[#E6E6E6] cflexss gap-[20px] p-[20px] rounded-[24px] cursor-pointer shadow-lg">
          <div className="w-full flexmm h-[218px] lg:h-[190px]">
            <img
              src={`/${image}.svg`}
              alt={`${image}`}
              className="h-[100%] object-cover rounded-[24px]"
            />
          </div>
          <div className="py-[2px] px-[10px] bg-[#F9F5FF] text-purplePrime text-[14px] sm:text-[16px] rounded-full font-[400]">
            {title}
          </div>
          <div className="w-full cflexss gap-[12px">
            <p className="text-[20px] h-[65px] lg:text-[18px] sm:text-[25px] font-[700] text-[#101828]">
              {heading}
            </p>
            <p className="text-[16px] sm:text-[19px] font-[400] text-[#667085] line-clamp-3">
              {content}
            </p>
            <div className="flexsm gap-[16px] py-[10px]">
              <ImageStacked images={images} />
              <p className="text-[14px] sm:text-[16px] pl-[5.6em] font-[400] sm:pl-[4.6em]">
                {enrolled} 'lsdkl'
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default CourseCard;
