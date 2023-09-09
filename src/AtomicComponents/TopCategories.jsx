import Link from "next/link";

const TopCategories = () => {
  const Categories = [
    {
      category: "History",
      background: "#F5AE1E",
      color: "black",
      link: "",
    },
    {
      category: "Nursery Rhymes",
      background: "#00AC76",
      color: "white",
      link: "",
    },
    {
      category: "Music-Dance",
      background: "#8D67CE",
      color: "white",
      link: "",
    },
    {
      category: "Gardening",
      background: "#FE5972",
      color: "white",
      link: "",
    },
    {
      category: "Cooking",
      background: "#00AC76",
      color: "white",
      link: "",
    },
    {
      category: "Sign Language",
      background: "#00AC76",
      color: "white",
      link: "",
    },
    {
      category: "Arts and Craft",
      background: "#F5AE1E",
      color: "black",
      link: "",
    },
    {
      category: "Baking",
      background: "#FE5972",
      color: "white",
      link: "",
    },
    {
      category: "Leadership",
      background: "#8D67CE",
      color: "white",
      link: "",
    },
    {
      category: "Law Enterprise",
      background: "#F5AE1E",
      color: "black",
      link: "",
    },
  ];
  return (
    <>
      <div className="w-full cflexss gap-[1em] sm:px-[1.5rem] font-[400]">
        <h1 className="font-[700] text-[#012B1D] text-[24px] lg:text-[18px] ls:text-[16px]">
          Top categories recommended for you
        </h1>
        <div className="w-full grid grid-cols-5 md1:flexss md1:overflow-x-auto gap-[20px]">
          {Categories.map((category) => {
            return (
              <>
                <Link href={category.link} className="w-full md1:w-[212px]">
                  <div
                    className={`py-[24px] lg:py-[20px] ls:py-[18px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px] w-full rounded-[8px] flexmm bg-[${category.background}] text-${category.color}`}
                  >
                    <p>{category.category}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopCategories;
