import Loader from "@/AtomicComponents/Loader";
import { addToCollection } from "@/services/request";
import { useState, useEffect } from "react";
import { fetchCollection } from "@/services/request";
import FileBase64 from "react-file-base64";

const CreateAchievement = ({ close, fetchData }) => {
  const [achievementData, setAchievementData] = useState({
    title: "",
    collection: "",
    requirement: "",
    ages: "",
    status: "",    
  });
  const [collectionItems, setCollectionItems] = useState([]);
  const [changing, setChanging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState(false);
  const [valid, setValid] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const urlRegex = /^(https?|http|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (
//       achievementData["courseDetails"].trim().length > 0 &&
//       achievementData["courseName"].trim().length > 0 &&
//       !urlError &&
//       achievementData["courseLink"].trim().length > 0 &&
//       achievementData["category"].trim().length > 0 &&
//       achievementData["ages"].trim().length > 0 &&
//       achievementData["coursePhoto"]
//     ) {
//       setValid(true);
//       setUrlError(false);
//     }

//     if (
//       achievementData["courseLink"].trim().length > 0 &&
//       urlRegex.test(achievementData["courseLink"])
//     ) {
//       setUrlError(false);
//     }

//     if (
//       achievementData["courseLink"].trim().length > 0 &&
//       !urlRegex.test(achievementData["courseLink"])
//     ) {
//       setUrlError(true);
//       setValid(false);
//     } else {
//       setUrlError(false);
//     }
//   }, [changing]);

  useEffect(() => {
    fetchCollection(setCollectionItems);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAchievementData({ ...achievementData, [name]: value });
    setChanging(!changing);
  };

  const upload = (file) => {
    if (
      parseInt(file.size.substring(0, 4)) <= 10240 &&
      (file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/jfif" ||
        file.type === "image/svg")
    ) {
      setAchievementData({ ...achievementData, coursePhoto: file });
      setFileError(false);
      setChanging(!changing);
    } else {
      setFileError(true);
      console.log(file.type);
      console.log(file.size);
      setChanging(!changing);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(achievementData);
    await addToCollection(
      achievementData["courseName"],
      achievementData["courseLink"],
      achievementData["coursePhoto"],
      achievementData["category"],
      achievementData["ages"],
      achievementData["courseDetails"],
      null
    );
    setLoading(false);
    close();
    fetchData();
    if (valid) {
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    close();
  };

  const Categories = [
    {
      category: "Film & Animation",
    },
    {
      category: "Autos & Vehicles",
    },
    {
      category: "Music",
    },
    {
      category: "Pets & Animals",
    },
    {
      category: "Sports",
    },
    {
      category: "Travel & Events",
    },
    {
      category: "Gaming",
    },
    {
      category: "People & Blogs",
    },
    {
      category: "Comedy",
    },
    {
      category: "Entertainment",
    },
    {
      category: "News & Politics",
    },
    {
      category: "How to & Style",
    },
    {
      category: "Education",
    },
    {
      category: "Science & Technology",
    },
    {
      category: "Nonprofits & Activism",
    },
  ];

  const Ages = [
    {
      age: "6 - 9",
    },
    {
      age: "10 - 14",
    },
    {
      age: "15 - 18",
    },
  ];

  return (
    <>
      <form className="w-full cflexss gap-[20px] text-[20px] px-[40px] pb-[40px] lg:text-[18px] ls:text-[16px] font-[400] bg-[#FFF] overflow-y-auto">
        <p className="text-[24px] font-[800] lg:text-[22px] ls:text-[20px]">
          Create an achievement
        </p>
        <div className="w-full cflexss gap-[12px]">
          <p>Title</p>
          <input
            type="text"
            name="title"
            placeholder="Course name"
            value={achievementData["title"]}
            onChange={handleChange}
            className="w-[526px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Select video/collection</p>
          <select
            className="w-[526px] px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="collection"
            onChange={handleChange}
          >
            <option>None</option>
            {collectionItems.map((item) => {
              return <option value={item._id}>{item.title}</option>;
            })}
          </select>
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Requirement</p>
          <select
            className="w-[526px] px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="requirement"
            onChange={handleChange}
          >
            <option>how many videos</option>
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">30</option>
            <option value="4">40</option>
            <option value="5">50</option>
            <option value="6">60</option>
            <option value="7">70</option>
            <option value="8">80</option>
            <option value="9">90</option>
            <option value="10">100</option>
          </select>
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Age group</p>
          <select
            className="w-[526px] px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="ages"
            onChange={handleChange}
          >
            <option>None</option>
            {Ages.map((ages) => {
              return <option>{ages.age}</option>;
            })}
          </select>
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Status</p>
          <select
            className="w-[526px] px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="status"
            onChange={handleChange}
          >
            <option>None</option>
            <option>Publish</option>
            <option>Unpublish</option>
          </select>
        </div>
        {!valid && (
          <p className="flexmm text-[12px] text-red-700">
            * All fields are required!
          </p>
        )}
        <div className="w-full flexsm gap-[20px] text-[19px] lg:text-[17px] font-[600]">
          <button
            type="submit"
            className="py-[18px] px-[52px] rounded-full bg-primary2 text-[#FFF]"
            onClick={handleSubmit}
          >
            {loading ? <Loader /> : <p>Submit</p>}
          </button>
          <button
            className="py-[18px] px-[52px] rounded-full bg-[#FFF] text-primary2 border-[1px] border-primary2"
            onClick={handleClose}
          >
            <p>Cancel</p>
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateAchievement;
