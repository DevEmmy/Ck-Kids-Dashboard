import Loader from "@/AtomicComponents/Loader";
import { useState, useEffect } from "react";
import { CreateBadge } from "@/services/request";
import FileBase64 from "react-file-base64";
import { FaUserAlt } from "react-icons/fa";

const CreateNewStage = ({ close, fetchData, gemPoint, collectionGemPoint }) => {
  const [stageDetails, setStageDetails] = useState({
    cover: "",
    title: "",
    description: "",
    requirement: "",
    allocated: parseInt(collectionGemPoint),
    badges: "",
    status: true,
  });
  // const [collectionItems, setCollectionItems] = useState([]);
  const [changing, setChanging] = useState(false);
  const [valid, setValid] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      stageDetails["cover"] &&
      stageDetails["title"] &&
      stageDetails["description"] &&
      stageDetails["requirement"] &&
      stageDetails["allocated"] &&
      stageDetails["badges"]
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
      setStageDetails({ ...stageDetails, [name]: value });
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
      setStageDetails({ ...stageDetails, cover: file.base64 });
      setFileError(false);
    } else {
      setFileError(true);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "requirement") {
      acceptNumbersOnly(name, value, 3);
    } else {
      setStageDetails({ ...stageDetails, [name]: value });
      setChanging(!changing);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
      console.log(stageDetails);
      //   await CreateBadge(
      //     stageDetails.cover,
      //     stageDetails.title,
      //     stageDetails.description,
      //     parseInt(stageDetails.requirement),
      //     stageDetails.allocated,
      //     stageDetails.badges,
      //     stageDetails.status
      //   );
      //   setLoading(false);
      //   close();
      //   fetchData();
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    close();
  };

  return (
    <>
      <form className="w-full cflexss gap-[20px] text-[20px] px-[40px] lg:px-[30px] lg:pb-[30px] pb-[40px] lg:text-[18px] ls:text-[16px] font-[400] bg-[#FFF] overflow-y-auto">
        <p className="text-[24px] font-[800] lg:text-[22px] ls:text-[20px]">
          Create a new stage
        </p>
        <div className="flex gap-3 items-center">
          <div className="relative profile w-[4.5rem] h-[4.5rem] object-contain flexmm bg-primary2 rounded-[0.75rem] text-white cursor-pointer">
            {stageDetails.cover ? (
              <>
                <img
                  src={stageDetails.cover}
                  alt="profilePicture"
                  className="rounded-[0.75rem] w-full h-full object-cover"
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
                defaultValue={stageDetails["cover"]}
                multiple={false}
                onDone={(base64) => {
                  upload(base64);
                }}
              />
            </div>
          </div>
          <div>
            <p className="text-[1em] font-[600]">Trophy Image</p>
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
          <p>Stage Title</p>
          <input
            type="text"
            name="title"
            placeholder="Stage Title"
            value={stageDetails["title"]}
            onChange={handleChange}
            className="w-[526px] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Description</p>
          <textarea
            type="text"
            name="description"
            value={stageDetails["description"]}
            onChange={handleChange}
            className="w-[526px] resize-none h-[11.5rem] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Required number of videos</p>
          <input
            type="text"
            name="requirement"
            placeholder="how many videos"
            value={stageDetails["requirement"]}
            onChange={handleChange}
            className="w-[526px] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Required Learning Gem</p>
          <input
            type="text"
            name="allocated"
            placeholder="per video"
            value={stageDetails["allocated"]}
            className="w-[526px] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Required number of badges</p>
          <input
            type="text"
            name="badges"
            placeholder="How many badges"
            value={stageDetails["badges"]}
            onChange={handleChange}
            className="w-[526px] lg:w-[400px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Status</p>
          <select
            className="w-[526px] lg:w-[400px] flex-shrink px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="status"
            onChange={(e) => {
              if (e.target.value === "Publish") {
                setStageDetails({ ...stageDetails, status: true });
              } else {
                setStageDetails({ ...stageDetails, status: false });
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

export default CreateNewStage;
