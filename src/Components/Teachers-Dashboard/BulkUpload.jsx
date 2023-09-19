import Loader from "@/AtomicComponents/Loader";
import { addToCollection, bulkUploadOfVideos } from "@/services/request";
import { useState, useEffect } from "react";

const BulkUpload = ({ close, fetchData }) => {
  const [bulkVideoData, setBulkVideoData] = useState({
    courseLink: "",
    category: "",
    ages: "",
    status: "",
  });
  const [changing, setChanging] = useState(false);
  const [valid, setValid] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const urlRegex = /^(https?|http|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      !urlError &&
      bulkVideoData["courseLink"].trim().length > 0 &&
      bulkVideoData["category"].trim().length > 0 &&
      bulkVideoData["ages"].trim().length > 0 &&
      bulkVideoData["status"]
    ) {
      setValid(true);
      setUrlError(false);
    }

    // if (
    //   bulkVideoData["courseLink"].trim().length > 0 &&
    //   urlRegex.test(bulkVideoData["courseLink"])
    // ) {
    //   setUrlError(false);
    // }

    // if (
    //   bulkVideoData["courseLink"].trim().length > 0 &&
    //   !urlRegex.test(bulkVideoData["courseLink"])
    // ) {
    //   setUrlError(true);
    //   setValid(false);
    // } else {
    //   setUrlError(false);
    // }
    // addToCollection(bulkVideoData);
  }, [changing]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBulkVideoData({ ...bulkVideoData, [name]: value });
    setChanging(!changing);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
      console.log(bulkVideoData);
      await bulkUploadOfVideos(bulkVideoData.courseLink, bulkVideoData.ages, bulkVideoData.category)
      setLoading(false);
      close();
      fetchData();
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    close();
  };

  const Categories = [
    {
      category: "History",
      content: [],
    },
    {
      category: "Nursery Rhymes",
      content: [],
    },
    {
      category: "Music-Dance",
      content: [],
    },
    {
      category: "Gardening",
      content: [],
    },
    {
      category: "Drawing and Painting",
      content: [],
    },
    {
      category: "Cooking",
      content: [],
    },
    {
      category: "Arts and Craft",
      content: [],
    },
    {
      category: "Globalization",
      content: [],
    },
  ];

  const Ages = [
    {
      age: "3 - 5",
    },
    {
      age: "6 - 8",
    },
    {
      age: "9 - 10",
    },
    {
      age: "11 - 13",
    },
    {
      age: "14 - 16",
    },
  ];

  return (
    <>
      <form className="w-full cflexss gap-[20px] text-[20px] px-[40px] pb-[40px] lg:text-[18px] ls:text-[16px] font-[400] bg-[#FFF] overflow-y-auto">
        <p className="text-[24px] font-[800] lg:text-[22px] ls:text-[20px]">
          Bulk Video Upload
        </p>
        <div className="w-full cflexss gap-[12px]">
          <p>Video link</p>
          <input
            type="text"
            name="courseLink"
            placeholder="Paste all the videos link here"
            value={bulkVideoData["courseLink"]}
            onChange={handleChange}
            className="w-[526px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
          {urlError && (
            <p className="flexmm text-[12px] text-red-700">* invalid URL!</p>
          )}
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Category</p>
          <select
            className="w-[526px] px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="category"
            onChange={handleChange}
          >
            <option>None</option>
            {Categories.map((category) => {
              return <option>{category.category}</option>;
            })}
          </select>
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Age</p>
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

export default BulkUpload;
