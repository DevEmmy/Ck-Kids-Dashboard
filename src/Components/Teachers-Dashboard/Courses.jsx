import {
  SearchOutline,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Plus,
  VideoCameraOutline,
  PlusCircle,
  DotsVertical,
  TrashOutline,
  PencilAltOutline,
} from "heroicons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AddNewVideo from "./AddNewVideo";
import AddToCollection from "./AddToCollection";
import CreateNewCollection from "./CreateNewCollection";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import EachCourse from "./EachCourse";
import { getAllVideos } from "@/services/request";
import { SpinnerCircular } from "spinners-react";
import { getFilteredCourses } from "@/services/request";
import BulkUpload from "./BulkUpload";
import BulkVideoUpload from "../Schools-Dashboard/BulkVideoUpload";

const Courses = ({isTeacher}) => {
  const [drop, setDrop] = useState(false);
  const [cat, setCat] = useState(false);
  const [ageRange, setAgeRange] = useState(null);
  const [category, setCategory] = useState(null);
  const [type, setType] = useState(false);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    let data = await getAllVideos();
    console.log(data);
    setVideos(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filterBy = async (ageRange, category) => {
    setLoading(true);
    let data = await getFilteredCourses(ageRange, category);
    setVideos(data)
    setLoading(false)
  };

  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const Appear = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
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

  const [modalElement, setModalElement] = useState();

  const AddCourse = [
    {
      type: "Single Video",
      icon: <VideoCameraOutline size="16px" />,
      element: <AddNewVideo close={close} fetchData={fetchData} isTeacher={isTeacher}/>,
    },
    {
      type: "Create new collection",
      icon: <VideoCameraOutline size="16px" />,
      element: <CreateNewCollection close={close} fetchData={fetchData} isTeacher={isTeacher}/>,
    },
    {
      type: "Add to collection",
      icon: <PlusCircle size="16px" />,
      element: <AddToCollection close={close} fetchData={fetchData} isTeacher={isTeacher}/>,
    },
    {
      type: "Bulk Video Upload",
      icon: <VideoCameraOutline size="16px" />,
      element: <BulkVideoUpload close={close} fetchData={fetchData} isTeacher={isTeacher}/>,
    },
  ];

  return (
    <>
      <div className="w-full p-[30px] cflexss gap-[25px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
        <div className="w-full flexmm flexem">
          <button
            className="relative btn px-[52px] flexmm font-[600] gap-[10px] py-[22px] lg:py-[18px] ls:py-[15px] rounded-full bg-primary2 cursor-pointer text-[#FFF] border-none"
            onClick={() => {
              setAdd(!add);
              setCat(false);
              setDrop(false);
              setType(false);
              setEdit(false);
            }}
          >
            <p>Add new course</p>
            <FaPlus size="10px" />
            {add && (
              <div className="absolute top-[80px] z-50 font-[400] text-[17px] text-[#808080] cflexss p-[6px] border-[1px] rounded-[12px] bg-[#FFF] flex-shrink shadow-md">
                {AddCourse.map((course) => {
                  return (
                    <>
                      <div
                        className="w-[228px] py-[12px] px-[16px] gap-[10px] flexsm rounded-[4px] flex-shrink hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400"
                        onClick={() => {
                          setModalElement(course.element);
                          open();
                        }}
                      >
                        {course.icon}
                        <p>{course.type}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </button>
        </div>

        <div className="w-full h-full cflexss gap-[30px] border-[1px] rounded-[24px] bg-[#FFF] shadow-md py-[30px] px-[20px]">
          <div className="w-full flexsm gap-[25px] text-[#AAA]">
            <div className="flexmm gap-[10px] rounded-[8px] border-[1px] p-[16px] w-[526px] bg-white flex-shrink">
              <SearchOutline size="16px" className="cursor-pointer" />
              <input
                type="text"
                placeholder="Search for course"
                className="w-full border-none text-[#222] outline-none"
              />
            </div>

            <div className="flexmm gap-[10px] p-[15px] border-[1px] rounded-[8px] bg-[#FFF] cursor-pointer">
              <p>Type</p>
              <ChevronUp />
            </div>

            <div
              className="relative only:z-25 flexmm p-[15px] border-[2px] gap-[10px] rounded-[8px] cursor-pointer"
              onClick={() => {
                setCat(!cat);
                setType(false);
                setDrop(false);
                setAdd(false);
                setEdit(false);
              }}
            >
              <p>Categories</p>
              {cat ? <ChevronDown /> : <ChevronUp />}
              {cat && (
                <motion.div
                  animate="visible"
                  initial="hidden"
                  variants={Appear}
                  className="absolute top-[70px] left-0 lf:left-0 text-[17px] bg-[#FFF] cflexss gap-[10px] p-[15px] w-[18em] rounded-[8px] shadow-md border-[1px]"
                >
                  {Categories.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="flexbm w-full px-[16px] py-[12px] rounded-xl hover:bg-primary2 hover:text-white cursor-pointer transition-all duration-400"
                        onClick={() => {
                          setCategory(item.category);
                          filterBy(ageRange, item.category);
                        }}
                      >
                        <p>{item.category}</p>
                        <ChevronRight />
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>

            <div
              className="relative font-[400] text-[20px] lg:text-[18px] ls:text-[16px] border-[1px] rounded-[8px] p-[15px] gap-[10px] flexmm bg-white cursor-pointer"
              onClick={() => {
                setDrop(!drop);
                setCat(false);
                setType(false);
                setAdd(false);
                setEdit(false);
              }}
            >
              <p>Ages</p>
              {drop ? <ChevronDown /> : <ChevronUp />}
              {drop && (
                <div className="absolute top-[70px] w-[150px] text-[17px] font-[400] left-0 z-25 border-[1px] shadow-md py-[8px] px-[4px] rounded-[12px] bg-white cflexss">
                  {Ages.map((items, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          className="flexbm w-full px-[16px] py-[12px] rounded-xl hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400"
                          onClick={() => {
                            setAgeRange(items.age);
                            filterBy(items.age, category);
                          }}
                        >
                          <p>{items.age}</p>
                          <ChevronRight />
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flexmm gap-[10px] p-[15px] border-[1px] rounded-[8px] bg-[#FFF] cursor-pointer">
              <p>Creators</p>
              <ChevronUp />
            </div>
          </div>

          <div className="w-full cflexss gap-[20px] bg-[#FFF]">
            {loading ? (
              <div className="w-full flexmm">
                <SpinnerCircular
                  color="#00AC76"
                  className="mr-4"
                  secondaryColor={"#eeeeee"}
                  size={50}
                  thickness={150}
                />
              </div>
            ) : (
              <>
                {videos?.map((video, i) => {
                  return (
                    <EachCourse
                      video={video}
                      setAdd={setAdd}
                      setDrop={setDrop}
                      setCat={setCat}
                      setType={setType}
                      setModalElement={setModalElement}
                      close={close}
                      fetchData={fetchData}
                      key={i}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>

        <Modal
          opened={opened}
          onClose={close}
          size={"auto"}
          //   title="Add New Video"
          overlayProps={{
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[9] : "#00AC76",
            opacity: 0.2,
            blur: 3,
          }}
          radius={"12px"}
        >
          {modalElement}
        </Modal>
      </div>
    </>
  );
};

export default Courses;
