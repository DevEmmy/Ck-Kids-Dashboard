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
      <div className="cflexss gap-[1em] sm:px-[1.5rem] font-[400]">
        <h1 className="font-[800] text-[#012B1D] text-[1rem]">
          Top categories recommended for you
        </h1>
        <div className="w-full flexsm gap-[0.5em] flex-wrap">
          {Categories.map((category) => {
            return (
              <>
                <Link href={category.link} className="w-[10em]">
                  <div
                    className={`py-[1.5em] font-[400] text-[0.8rem] w-full rounded-xl flexmm bg-[${category.background}] text-${category.color}`}
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
