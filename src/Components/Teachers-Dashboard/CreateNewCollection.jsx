import { uploadCollection } from "@/services/request";
import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import Loader from "@/AtomicComponents/Loader";

const CreateNewCollection = ({ close, fetchData }) => {
  const [newCollection, setNewCollection] = useState({
    title: "",
    description: "",
    category: "",
    ages: "",
    coursePhoto: "",
  });
  const [changing, setChanging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState(false);
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      newCollection["title"].trim().length > 0 &&
      newCollection["description"].trim().length > 0 &&
      newCollection["category"].trim().length > 0 &&
      newCollection["category"].trim() !== "None" &&
      newCollection["ages"].length > 0 &&
      newCollection["ages"] !== "None" &&      
      newCollection["coursePhoto"]
    ) {
      setValid(true);
    }
  }, [changing]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewCollection({ ...newCollection, [name]: value });
    setChanging(!changing);
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

  const upload = (file) => {
    if (
      parseInt(file.size.substring(0, 4)) <= 10240 &&
      (file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/jfif" ||
        file.type === "image/svg")
    ) {
      setNewCollection({ ...newCollection, coursePhoto: file });
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
    if (valid) {
      setLoading(true);
      await uploadCollection(
        newCollection.title,
        newCollection.description,
        newCollection.category,
        newCollection.ages,
        newCollection.coursePhoto
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

  return (
    <>
      <form className="w-full cflexss gap-[20px] text-[20px] px-[40px] pb-[40px] lg:text-[18px] ls:text-[16px] font-[400] bg-[#FFF] overflow-y-auto">
        <p className="text-[24px] font-[800] lg:text-[22px] ls:text-[20px]">
          Create a new collection
        </p>
        <div className="w-full cflexss gap-[12px]">
          <p>Title</p>
          <input
            type="text"
            name="title"
            placeholder="Collection Title"
            value={newCollection["title"]}
            onChange={handleChange}
            className="w-[526px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px]"
          />
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Description</p>
          <textarea
            type="text"
            name="description"
            value={newCollection["description"]}
            onChange={handleChange}
            className="w-[526px] flex-shrink p-[16px] rounded-[8px] outline-none border-[1px] resize-none h-[187px]"
          />
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
            {fileName ? fileName.name : <p>Drop file to upload here</p>}
            <div className="absolute opacity-0">
              <FileBase64
                name="coursePhoto"
                defaultValue={newCollection["coursePhoto"]}
                multiple={false}
                onDone={(base64) => {
                  upload(base64);
                  setFileName(base64);
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

export default CreateNewCollection;
