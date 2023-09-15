import { uploadCollection } from "@/services/request";
import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import Loader from "@/AtomicComponents/Loader";

const CreateNewCollection = ({ close }) => {
  const [newCollection, setNewCollection] = useState({
    title: "",
    description: "",
    category: "",
    class: "",
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
      newCollection["class"].trim().length > 0 &&
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

  const Class = [
    {
      class: "JSS 1",
    },
    {
      class: "JSS 2",
    },
    {
      class: "JSS 3",
    },
    {
      class: "SSS 1",
    },
    {
      class: "SSS 2",
    },
    {
      class: "SSS 3",
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
        newCollection.coursePhoto
      );
      setLoading(false);
      close()
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
          <p>Category</p>
          <select
            className="w-[526px] px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="category"
            onChange={handleChange}
          >
            <option></option>
            {Categories.map((category) => {
              return <option>{category.category}</option>;
            })}
          </select>
        </div>
        <div className="w-full cflexss gap-[12px]">
          <p>Class</p>
          <select
            className="w-[526px] px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
            name="class"
            onChange={handleChange}
          >
            <option></option>
            {Class.map((classes) => {
              return <option>{classes.class}</option>;
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