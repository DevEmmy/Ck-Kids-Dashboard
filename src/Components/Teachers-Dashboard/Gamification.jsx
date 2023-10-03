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
import CreateAchievement from "./CreateAchievement";
import AddToCollection from "./AddToCollection";
import CreateNewCollection from "./CreateNewCollection";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import EachCourse from "./EachCourse";
import { getAllVideos } from "@/services/request";
import { SpinnerCircular } from "spinners-react";
import { getFilteredCourses } from "@/services/request";
import ReactPaginate from "react-paginate";
import BulkUpload from "./BulkUpload";
import BulkVideoUpload from "../Schools-Dashboard/BulkVideoUpload";

const Gamification = () => {
  const [drop, setDrop] = useState(false);
  const [ageRange, setAgeRange] = useState(null);
  const [category, setCategory] = useState(null);
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
    console.log(data);

    setAgeRange(null);
    setCategory(null);
    setVideos(data);
    setLoading(false);
  };

  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const Appear = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
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

  const [modalElement, setModalElement] = useState();

  return (
    <>
      <div className="w-full p-[30px] cflexss gap-[25px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
        <div className="w-full flexbm">
          <p className="font-[600] text-[24px] lg:text-[22px] ls:text-[20px]">
            Victory Badge Settings
          </p>
          <button
            className="relative btn px-[52px] flexmm font-[600] gap-[10px] py-[22px] lg:py-[18px] ls:py-[15px] rounded-full bg-primary2 cursor-pointer text-[#FFF] border-none"
            onClick={() => {
              setDrop(false);
              setModalElement(
                <CreateAchievement close={close} fetchData={fetchData} />
              );
              open();
            }}
          >
            <p>Add new badge</p>
            <FaPlus size="10px" />
          </button>
        </div>

        <div className="w-full h-full cflexss gap-[30px] border-[1px] rounded-[24px] bg-[#FFF] shadow-md py-[30px] px-[20px]">
          <div className="w-full flexsm gap-[25px] text-[#AAA]">
            <div
              className="relative font-[400] text-[20px] lg:text-[18px] ls:text-[16px] border-[1px] rounded-[8px] p-[15px] gap-[10px] flexmm bg-white cursor-pointer"
              onClick={() => {
                setDrop(!drop);
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
              <p>Status</p>
              <ChevronUp />
            </div>
          </div>

          <div className="w-full cflexss gap-[20px] bg-[#FFF]">
            <div className="w-full font-[400] text-[17px] lg:text-[15px] pb-[20px] ls:text-[13px] rounded-[24px] text-[#808080]">
              <div className="w-full flexsm py-[10px] px-[20px] border-b-[1px]">
                <div className="w-[100px] flexsm gap-[15px]">Badge Image</div>
                <div className="w-[14%] flexsm gap-[10px]">Badge Title</div>
                <div className="w-[25%] flexsm">Description</div>
                <div className="w-[14%] flexsm">Requirement</div>
                <div className="w-[14%] flexsm">Learning Gem</div>
                <div className="w-[14%] flexsm">Age group</div>
                <div className="w-[14%] flexsm">Actions</div>
                <div className="w-[14%] flexsm">Status</div>
              </div>
              {loading ? (
                <>
                  <div className="w-full flexmm py-[10px]">
                    <SpinnerCircular
                      color="#00AC76"
                      className="mr-4"
                      secondaryColor={"#eeeeee"}
                      size={50}
                      thickness={150}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* {GetPaginatedData(currentPage, PAGINATION, students).map(
                    (data, index) => {
                      const inputDate = new Date(data.createdAt);

                      // Extract the individual date components
                      const year = inputDate.getFullYear() % 100; // Get the last two digits of the year
                      const month = inputDate.getMonth() + 1; // Months are 0-based, so add 1
                      const day = inputDate.getDate();

                      // Create the formatted date string
                      const formattedDate = `${day}/${
                        month < 10 ? "0" : ""
                      }${month}/${year}`;

                      return (
                        <>
                          <div
                            key={index}
                            className={`w-full flexsm py-[10px] px-[20px] cursor-pointer ${
                              (index + 1) % 2 === 0
                                ? "bg-[#F7F7F7]"
                                : "bg-white"
                            }`}
                            onClick={() => {
                              setProfile(true);
                              setData(data);
                            }}
                          >
                            <div className="w-[9%] flexsm gap-[15px]">
                              <input type="checkbox" checked={data.checked} />
                              <div className="flexmm w-[24px]">
                                <img src={data.profilePicture} alt="avatar" />
                              </div>
                            </div>
                            <div className="w-[30%] flexsm">
                              {data.fullName}
                            </div>
                            <div className="w-[25%] flexsm">{data.email}</div>
                            <div className="w-[14%] flexsm">
                              {formattedDate}
                            </div>
                            <div className="w-[14%] flexsm">
                              {formattedDate}
                            </div>
                            <div className="w-[14%] flexsm gap-[20px]">
                              <EyeOutline size="16px" />
                              <PencilAltOutline size="16px" />
                              <TrashOutline
                                size="16px"
                                onClick={() => {
                                  setModalElement(
                                    <Trash
                                      close={close}
                                      data={data}
                                      setProfile={setProfile}
                                    />
                                  );
                                  open();
                                }}
                              />
                            </div>
                          </div>
                        </>
                      );
                    }
                  )} */}
                </>
              )}
              <br />
              {/* <ReactPaginate
                previousLabel={"< Previous"}
                nextLabel={"Next >"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={
                  "w-full text-[14px] lg:text-[12px] px-[20px] pt-[20px] border-t-[1px] flexbm"
                }
                activeClassName={"active"}
              /> */}
            </div>
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

export default Gamification;
