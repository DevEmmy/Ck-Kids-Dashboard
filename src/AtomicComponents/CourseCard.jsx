import Link from "next/link";
import Image from "next/image";
import ImageStacked from "./ImageStacked";

const CourseCard = ({
  cover,
  description,
  category,
  name,
  link,
  _id
}) => {
  return (
    <>
      <a
        href={`/kids-dashboard/courses/${_id}`}
        className="min-w-[340px] lg:min-w-[300px] ls:min-w-[280px] lf:w-full"
      >
        <div className="w-full hover:border-primary2 border-[1px] border-white cflexss gap-[20px] p-2 rounded-[24px] cursor-pointer shadow-lg">
          <div className="w-full flexmm h-[218px] lg:h-[190px]">
            <img
              src={cover}
              // alt={`${image}`}
              className="h-[100%] object-cover rounded-[24px]"
            />
          </div>

          <div className="px-2">
              <div className="py-[2px] px-[10px] bg-[#F9F5FF] text-purplePrime text-[14px] rounded-full font-[400] w-auto">
                {category}
              </div>
              <div className="w-full cflexss my-2">
                <p className="text-[20px] lg:text-[18px] lf:text-[20px] font-[700] text-[#101828]">
                  {name}
                </p>
                <p className="text-[16px] font-[400] text-[#667085] line-clamp-3">
                  {description}
                </p>
                {/* <div className="flexsm gap-[16px] py-[10px]">
                  <ImageStacked images={images} />
                  <p className="text-[14px] sm:text-[16px] pl-[5.6em] text-[#222] font-[400] sm:pl-[4.6em]">
                    {enrolled}10
                  </p>
                </div> */}
              </div>
              
          </div>

          
        </div>
      </a>
    </>
  );
};

export default CourseCard;
