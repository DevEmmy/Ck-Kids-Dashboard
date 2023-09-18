import ImageStacked from "./ImageStacked";

const VideoCard = ({ cover, description, category, name, link, _id }) => {
  
  return (
    <>
      <a href={`/sample-video/${_id}`} className="w-full md1:w-[330px] sm:w-full md1:flex-grow">
        <div className="w-full border-[1px] border-[#E6E6E6] cflexbs gap-[20px] lg:min-h-[26em] p-[10px] rounded-[24px] cursor-pointer">
          <div className="w-full flexmm h-[13vw] md1:h-[218px] self-stretch">
            <img
              src={cover}
              alt={`image`}
              className="h-[100%] w-full object-cover rounded-[24px]"
            />
          </div>
          <div className="py-[2px] px-[10px] bg-[#F9F5FF] text-purplePrime text-[14px] sm:text-[16px] rounded-full font-[400]">
            {category}
          </div>
          <div className="w-full cflexss gap-[12px]">
            <p className="text-[20px] lg:text-[18px] sm:text-[25px] leading-[30px] font-[700] text-[#101828]">
              {name}
            </p>
            <p className="text-[16px] leading=[22px] sm:text-[19px] font-[400] text-[#667085] line-clamp-2">
              {description}
            </p>
            <p className="text-[14px] sm:text-[16px] text-purplePrime font-[600]">
              author
            </p>
            <div className="flexsm gap-[16px] py-[10px]">
              <ImageStacked images={["kid1", "kid2", "kid3", "kid4"]} />
              <p className="text-[14px] sm:text-[16px] pl-[5.6em] text-[#222] font-[400] sm:pl-[4.6em]">
                0 kids enrolled
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default VideoCard;
