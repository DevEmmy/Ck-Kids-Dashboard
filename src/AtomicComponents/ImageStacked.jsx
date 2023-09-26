import Image from "next/image";

const ImageStacked = ({ images }) => {
  return (
    <>
      <div className="relative flexmm z-[10]">
        <div className="absolute flexmm w-[1.5em] z-[100] left-0">
          <img
            src={`/${images[0]}.svg`}            
            alt={`${images[0]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[75] left-[0.8em]">
          <img
            src={`/${images[1]}.svg`}                      
            alt={`${images[1]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[50] left-[1.6em]">
          <img
            src={`/${images[2]}.svg`}            
            alt={`${images[2]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[25] left-[2.4em]">
          <img
            src={`/${images[3]}.svg`}           
            alt={`${images[3]}`}
          />
        </div>
      </div>
    </>
  );
};

export default ImageStacked;
