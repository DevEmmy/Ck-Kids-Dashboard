import Loader from "@/AtomicComponents/Loader";
import { useState, useEffect } from "react";
import { fetchCollection } from "@/services/request";

const CreateNewBadge = ({ close, fetchData }) => {
  const [achievementData, setAchievementData] = useState({
    title: "",
    collection: "",
    requirement: "",
    ages: "",
    allocated: "",
    status: "",
  });
  const [collectionItems, setCollectionItems] = useState([]);
  const [changing, setChanging] = useState(false);
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      achievementData["title"].trim().length > 0 &&
      achievementData["collection"].trim().length > 0 &&
      achievementData["collection"] !== "None" &&
      achievementData["requirement"].trim().length > 0 &&
      achievementData["requirement"] !== "how many videos" &&
      achievementData["ages"].trim().length > 0 &&
      achievementData["ages"] !== "None" &&
      achievementData["allocated"].trim().length > 0 &&
      achievementData["status"] &&
      achievementData["status"] !== "None"
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [changing]);

  useEffect(() => {
    fetchCollection(setCollectionItems);
  }, []);

  const acceptNumbersOnly = (name, value, max) => {
    var numeric = /^[0-9]+$/;

    if ((numeric.test(value) && value.length <= max) || value.length === 0) {
      setAchievementData({ ...achievementData, [name]: value });
      setChanging(!changing);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "allocated") {
      acceptNumbersOnly(name, value, 50);
    } else {
      setAchievementData({ ...achievementData, [name]: value });
      setChanging(!changing);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
      console.log(achievementData);
      // setLoading(false);
      // close();
      //   fetchData();
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    close();
  };

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
      <form className="w-full cflexss gap-[20px] text-[20px] px-[40px] lg:px-[30px] lg:pb-[30px] pb-[40px] lg:text-[18px] ls:text-[16px] font-[400] bg-[#FFF] overflow-y-auto">
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
            className="w-[526px] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Select video/collection</p>
          <select
            className="w-[526px] lg:w-[400px] flex-shrink px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
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
            className="w-[526px] lg:w-[400px] flex-shrink px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="requirement"
            onChange={handleChange}
          >
            <option>how many videos</option>
            <option value="1">5</option>
            <option value="2">10</option>
            <option value="3">15</option>
            <option value="4">20</option>
            <option value="5">25</option>
            <option value="6">30</option>
            <option value="7">35</option>
            <option value="8">40</option>
            <option value="9">45</option>
            <option value="10">50</option>
          </select>
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Age group</p>
          <select
            className="w-[526px] lg:w-[400px] flex-shrink px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
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
          <p>Allocated Learning Gem</p>
          <input
            type="text"
            name="allocated"
            placeholder="per video"
            value={achievementData["allocated"]}
            onChange={handleChange}
            className="w-[526px] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Status</p>
          <select
            className="w-[526px] lg:w-[400px] flex-shrink px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
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
            {loading ? <Loader /> : <p>Save Gamification</p>}
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

export default CreateNewBadge;
