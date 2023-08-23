import Image from "next/image";

const ImageStacked = ({ images }) => {
  return (
    <>
      <div className="relative flexmm z-[-1]">
        <div className="absolute flexmm w-[1.5em] z-[100] left-0">
          <Image
            src={`${images[0]}.svg`}
            width={100}
            height={100}
            alt={`${images[0]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[75] left-[0.8em]">
          <Image
            src={`${images[1]}.svg`}
            width={100}
            height={100}
            alt={`${images[1]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[50] left-[1.6em]">
          <Image
            src={`${images[2]}.svg`}
            width={100}
            height={100}
            alt={`${images[2]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[25] left-[2.4em]">
          <Image
            src={`${images[3]}.svg`}
            width={100}
            height={100}
            alt={`${images[3]}`}
          />
        </div>
      </div>
    </>
  );
};

export default ImageStacked;
