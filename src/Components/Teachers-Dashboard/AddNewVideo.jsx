import Loader from "@/AtomicComponents/Loader";
import { addToCollection } from "@/services/request";
import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";

const AddNewVideo = ({ close }) => {
  const [newVideoData, setNewVideoData] = useState({
    courseName: "",
    courseDetails: "",
    courseLink: "",
    category: "",
    ages: "",
    coursePhoto: "",
  });
  const [changing, setChanging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState(false);
  const [valid, setValid] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const urlRegex = /^(https?|http|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (
      newVideoData["courseDetails"].trim().length > 0 &&
      newVideoData["courseName"].trim().length > 0 &&
      !urlError &&
      newVideoData["courseLink"].trim().length > 0 &&
      newVideoData["category"].trim().length > 0 &&
      newVideoData["ages"].trim().length > 0 &&
      newVideoData["coursePhoto"]
    ) {
      setValid(true);
      setUrlError(false);
    }

    if (
      newVideoData["courseLink"].trim().length > 0 &&
      urlRegex.test(newVideoData["courseLink"])
    ) {
      setUrlError(false);
    }

    if (
      newVideoData["courseLink"].trim().length > 0 &&
      !urlRegex.test(newVideoData["courseLink"])
    ) {
      setUrlError(true);
      setValid(false);
    } else {
      setUrlError(false);
    }
  }, [changing]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewVideoData({ ...newVideoData, [name]: value });
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
      setNewVideoData({ ...newVideoData, coursePhoto: file});
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
    console.log(newVideoData)
    await addToCollection(newVideoData["courseName"], newVideoData["courseLink"] ,newVideoData["coursePhoto"], newVideoData.courseDetails);
    setLoading(false);
    close();
    if (valid) {
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
          Add New Video
        </p>
        <div className="w-full cflexss gap-[12px]">
          <p>Course name</p>
          <input
            type="text"
            name="courseName"
            placeholder="Course name"
            value={newVideoData["courseName"]}
            onChange={handleChange}
            className="w-[526px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Course details</p>
          <textarea
            type="text"
            name="courseDetails"
            value={newVideoData["courseDetails"]}
            onChange={handleChange}
            className="w-[526px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px] resize-none h-[187px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Course link</p>
          <input
            type="text"
            name="courseLink"
            placeholder="Paste video link here"
            value={newVideoData["courseLink"]}
            onChange={handleChange}
            className="w-[526px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
          {urlError && (
            <p className="flexmm text-[12px] text-red-700">* invalid URL!</p>
          )}
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Course Category</p>
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
          <p>Ages</p>
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
          <p>Course photo</p>
          <div className="w-full flexmm text-[#808080] text-[16px] border-[2px] border-[#808080] border-dotted rounded-[12px] h-[125px] lg:text-[14px] font-[400] cursor-pointer">
            {fileName ? fileName.name : <p>Drop file to be uploaded here</p>}
            <div className="absolute opacity-0">
              <FileBase64
                name="coursePhoto"
                defaultValue={newVideoData["coursePhoto"]}
                multiple={false}
                onDone={(base64) => {
                  upload(base64);
                  setFileName(base64);
                  console.log(base64);
                }}
              />
            </div>
          </div>
          {fileName && (
            <div className="flexmm w-[15em] rounded-[12px] flex-shrink">
              <img
                src={fileName.base64}
                alt="image"
                className="rounded-[12px]"
              />
            </div>
          )}
          {fileError && (
            <p className="flexmm text-[12px] text-red-700">
              make sure you uploaded an image not more that 10mb.
            </p>
          )}
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

export default AddNewVideo;
