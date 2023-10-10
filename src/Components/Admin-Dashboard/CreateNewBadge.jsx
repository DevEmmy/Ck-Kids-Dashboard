import Loader from "@/AtomicComponents/Loader";
import { useState, useEffect } from "react";
import { CreateBadge } from "@/services/request";
import FileBase64 from "react-file-base64";
import { FaUserAlt } from "react-icons/fa";

const CreateNewBadge = ({ close, fetchData, gemPoint, collectionGemPoint }) => {
  const [gemDetails, setGemDetails] = useState({
    cover: "",
    title: "",
    description: "",
    requirement: "",
    allocated: parseInt(gemPoint),
    status: true,
    minAge: "None",
    maxAge: "",
  });
  // const [collectionItems, setCollectionItems] = useState([]);
  const [changing, setChanging] = useState(false);
  const [valid, setValid] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      gemDetails["cover"] &&
      gemDetails["title"] &&
      gemDetails["title"] !== "None" &&
      gemDetails["description"] &&
      gemDetails["requirement"] &&
      gemDetails["minAge"] !== "None" &&
      gemDetails["maxAge"] &&
      gemDetails["allocated"]
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [changing]);

  // useEffect(() => {
  //   fetchCollection(setCollectionItems);
  // }, []);

  const acceptNumbersOnly = (name, value, max) => {
    var numeric = /^[0-9]+$/;

    if ((numeric.test(value) && value.length <= max) || value.length === 0) {
      setGemDetails({ ...gemDetails, [name]: value });
      setChanging(!changing);
    }
  };

  const upload = (file) => {
    if (
      file.type === "image/png" ||
      file.type === "image/svg" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/jfif"
    ) {
      setGemDetails({ ...gemDetails, cover: file.base64 });
      setFileError(false);
    } else {
      setFileError(true);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "ages") {
      var list = value.split(" - ");
      setGemDetails({
        ...gemDetails,
        minAge: parseInt(list[0]),
        maxAge: parseInt(list[1]),
      });
      setChanging(!changing)
    } else if (name === "requirement") {
      acceptNumbersOnly(name, value, 3);
    } else {
      setGemDetails({ ...gemDetails, [name]: value });
      setChanging(!changing);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
      console.log(gemDetails);
      await CreateBadge(
        gemDetails.cover,
        gemDetails.title,
        gemDetails.description,
        parseInt(gemDetails.requirement),
        gemDetails.allocated,
        gemDetails.status,
        gemDetails.minAge,
        gemDetails.maxAge
      );
      setLoading(false);
      close();
      fetchData();
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

  const Badges = [
    {
      title: "Quiz Whiz",
    },
    {
      title: "Subject Hero",
    },
    {
      title: "Course Champion",
    },
    {
      title: "Helping Hand",
    },
  ];

  return (
    <>
      <form className="w-full cflexss gap-[20px] text-[20px] px-[40px] lg:px-[30px] lg:pb-[30px] pb-[40px] lg:text-[18px] ls:text-[16px] font-[400] bg-[#FFF] overflow-y-auto">
        <p className="text-[24px] font-[800] lg:text-[22px] ls:text-[20px]">
          Create a badge
        </p>
        <div className="flex gap-3 items-center">
          <div className="relative profile w-[4.5rem] h-[4.5rem] object-contain flexmm bg-primary2 rounded-[0.75rem] text-white cursor-pointer">
            {gemDetails.cover ? (
              <>
                <img
                  src={gemDetails.cover}
                  alt="profilePicture"
                  className="rounded-[0.75rem] w-full h-[4.5rem] object-cover"
                />
              </>
            ) : (
              <>
                <FaUserAlt />
              </>
            )}
            <div className="absolute left-0 top-[46%] opacity-0">
              <FileBase64
                name="coursePhoto"
                defaultValue={gemDetails["cover"]}
                multiple={false}
                onDone={(base64) => {
                  upload(base64);
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-[1em] font-[600]">Badge Image</p>
            <p className="text-[0.8em] text-gray-500">
              Maximum of 1MB. JPG, GIF, or PNG
            </p>
          </div>
        </div>
        {fileError && (
          <p className="flexmm text-[12px] text-red-700">
            ensure you uploaded an image of size not more than 1MB
          </p>
        )}
        <div className="w-full cflexss gap-[12px]">
          <p>BadgeTitle</p>
          <select
            className="w-[526px] lg:w-[400px] flex-shrink px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="title"
            onChange={handleChange}
          >
            <option>None</option>
            {Badges.map((badge, i) => {
              return <option key={i}>{badge.title}</option>;
            })}
          </select>
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Description</p>
          <textarea
            type="text"
            name="description"
            value={gemDetails["description"]}
            onChange={handleChange}
            className="w-[526px] resize-none h-[11.5rem] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Requirement</p>
          <input
            type="text"
            name="requirement"
            placeholder="how many videos"
            value={gemDetails["requirement"]}
            onChange={handleChange}
            className="w-[526px] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Allocated Learning Gem</p>
          <input
            type="text"
            name="allocated"
            placeholder="per video"
            value={gemDetails["allocated"]}
            className="w-[526px] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
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
          <p>Status</p>
          <select
            className="w-[526px] lg:w-[400px] flex-shrink px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="status"
            onChange={(e) => {
              if (e.target.value === "Publish") {
                setGemDetails({ ...gemDetails, status: true });
              } else {
                setGemDetails({ ...gemDetails, status: false });
              }
            }}
          >
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
