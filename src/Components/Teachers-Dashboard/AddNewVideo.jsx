import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";

const AddNewVideo = () => {
  const [newVideoData, setNewVideoData] = useState({
    courseName: "",
    courseDetails: "",
    courseLink: "",
    coursePhoto: "",
  });
  const [changing, setChanging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState(false);
  const [valid, setValid] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const urlRegex = /^(https?|http|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  useEffect(() => {
    if (
      newVideoData["courseDetails"].trim().length > 0 &&
      newVideoData["courseName"].trim().length > 0 &&
      !urlError &&
      newVideoData["courseLink"].trim().length > 0 &&
      newVideoData["coursePhoto"].trim().length > 0
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
      setNewVideoData({ ...newVideoData, coursePhoto: file.base64 });
      setFileError(false);
      setChanging(!changing);
    } else {
      setFileError(true);
      console.log(file.type);
      console.log(file.size);
      setChanging(!changing);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
    }
  };

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
            <p>submit</p>
          </button>
          <button className="py-[18px] px-[52px] rounded-full bg-[#FFF] text-primary2 border-[1px] border-primary2">
            <p>cancel</p>
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewVideo;
